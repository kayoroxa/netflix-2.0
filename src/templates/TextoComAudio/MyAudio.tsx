import { useEffect, useRef, useState } from 'react'
import { I_Text } from '../../utils/types/_type_text_lyrics'

interface IProps {
  textData: I_Text
  inLoop?: boolean
  isPlaying?: boolean
  setIsPlaying?: (isPlaying: boolean) => void
  indexActive?: number | boolean
  setIndexActive: (index: number) => void
  playRate: number
}

export default function MyAudio({
  textData,
  inLoop,
  isPlaying,
  indexActive,
  playRate,
  setIndexActive,
  setIsPlaying,
}: IProps) {
  const audio = useRef<HTMLAudioElement>(null)
  const silentAudio = useRef<HTMLAudioElement>(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const isIOSDevice =
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document) ||
      /iPad|iPhone|iPod/.test(navigator.userAgent)

    setIsIOS(isIOSDevice)

    // Load silent audio for iOS devices
    if (isIOSDevice && silentAudio.current) {
      silentAudio.current.src =
        'data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV'
      silentAudio.current
        .play()
        .catch(e => console.error('Error playing silent audio:', e))
    }
  }, [])

  useEffect(() => {
    if (audio.current) {
      if (isPlaying) {
        audio.current.play().catch(e => {
          console.error('Error playing audio:', e)
        })
      } else {
        audio.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audio.current) {
      const time = textData.lyrics[0].start
      audio.current.currentTime = time
    }
  }, [textData.lyrics])

  useEffect(() => {
    if (audio.current && isPlaying) {
      if (inLoop) {
        let index = typeof indexActive !== 'number' ? 0 : indexActive
        const duration =
          textData.lyrics[index]?.end - textData.lyrics[index]?.start
        const time = textData.lyrics[index].start

        audio.current.currentTime = Math.max(time, 0)

        const interval = setInterval(() => {
          if (audio.current) audio.current.currentTime = time
        }, duration * 1000 + (isIOS ? 200 : 0))

        return () => clearInterval(interval)
      } else {
        const interval = setInterval(() => {
          if (audio.current) {
            const currentTime = audio.current.currentTime
            const isEnd =
              currentTime > textData.lyrics[textData.lyrics.length - 1].end
            const lessThenBegin = currentTime < textData.lyrics[0].start

            if (lessThenBegin) {
              setIndexActive(0)
              return
            }
            if (isEnd) {
              audio.current.pause()
              setTimeout(() => {
                setIndexActive(0)
                if (audio.current)
                  audio.current.play().catch(e => {
                    console.error('Error playing audio:', e)
                  })
              }, 1000)
              return
            }
            const findIndex = textData.lyrics.findIndex(
              item => item.start <= currentTime && item.end >= currentTime
            )

            setIndexActive(findIndex)
          }
        }, 100)

        return () => clearInterval(interval)
      }
    }
  }, [isPlaying, inLoop, indexActive])

  useEffect(() => {
    if (
      audio.current &&
      typeof indexActive === 'number' &&
      textData.lyrics[indexActive]
    ) {
      const time = textData.lyrics[indexActive].start
      if (Math.abs(audio.current.currentTime - time) > 0.15) {
        audio.current.currentTime = time
      }
    }
  }, [indexActive])

  useEffect(() => {
    if (audio.current) {
      audio.current.playbackRate = playRate
    }
  }, [playRate])

  return (
    <>
      <button
        onClick={() => {
          if (audio.current) {
            audio.current.play().catch(e => {
              console.error('Error playing audio:', e)
            })
            if (setIsPlaying) setIsPlaying(true)
          }
        }}
      >
        Play Audio
      </button>
      <audio
        src={textData.audioUrl}
        ref={audio}
        controls={isIOS ? false : true}
        style={{ position: 'fixed', left: '0', top: '0', zIndex: '10' }}
        onPlay={() => {
          if (setIsPlaying) setIsPlaying(true)
        }}
      ></audio>
      <audio ref={silentAudio} style={{ display: 'none' }}></audio>
    </>
  )
}
