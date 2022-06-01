import { useEffect, useState } from 'react'

function setSpeech() {
  return new Promise(function (resolve, reject) {
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

export function useSay(text: string | null) {
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
      console.log('1 vezinha')

      setSpeech().then(() => {
        const synth = window.speechSynthesis
        const voices = synth.getVoices()
        console.log('1 vez')

        var selectedOption = 'Google US English'

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

  function speak() {
    if (utterThis) {
      window.speechSynthesis.speak(utterThis)
    }
  }

  return {
    speak,
  }
}
