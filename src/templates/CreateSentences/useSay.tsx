import { useEffect, useState } from 'react'

function setSpeech() {
  return new Promise(function (resolve) {
    let synth = window.speechSynthesis
    let id: any

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices())
        clearInterval(id)
      }
    }, 10)
  })
}

export function useSay(text: string | null, language?: string) {
  const [utterThis, setUtterThis] = useState<null | SpeechSynthesisUtterance>(
    null
  )

  const [config, setConfig] = useState<any>(false)
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !config &&
      'speechSynthesis' in window
    ) {
      const utter = new SpeechSynthesisUtterance()
      utter.lang = 'en_US'
      console.log('1 vezinha')

      setSpeech().then(() => {
        const synth = window.speechSynthesis
        const voices = synth.getVoices()
        console.log('1 vez')
        var selectedOption = 'Google US English'

        if (language === 'fr') {
          selectedOption = 'Google français'
        }
        if (language === 'es') {
          selectedOption = 'Google español'
        }

        voices.forEach(voice => {
          if (voice.name === selectedOption) {
            utter.voice = voice
          }
        })

        setUtterThis(utter)
        setConfig(true)
      })
    }
  }, [])

  useEffect(() => {
    if (utterThis && text && config) {
      utterThis.text = text
      speak()
    }
  }, [text])

  useEffect(() => {
    // keydown
    const keydown = (e: any) => {
      if (e.key.toLowerCase() === 'r' || e.key === 's') {
        speak()
      }
    }

    window.addEventListener('keydown', keydown)

    return () => {
      window.removeEventListener('keydown', keydown)
    }
  })

  function speak() {
    if (utterThis) {
      stop()
      window.speechSynthesis.speak(utterThis)
    }
  }

  function stop() {
    if (utterThis) {
      window.speechSynthesis.cancel()
    }
  }

  return {
    speak,
  }
}
