import { isNumber } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { I_Text } from '../../utils/types/_type_text_lyrics'

interface IProps {
  textData: I_Text
  inLoop?: boolean
  isPlaying?: boolean
  setIsPlaying: (isPlaying: boolean) => void
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
  const [isIOS, setIsIOS] = useState(false)
  const [clickedOnAudio, setClickedOnAudio] = useState(false)

  useEffect(() => {
    const is =
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document) ||
      /iPad|iPhone|iPod/.test(navigator.userAgent)

    setIsIOS(is)
  }, [])

  useEffect(() => {
    if (audio.current) {
      if (isPlaying) {
        audio.current.play()
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
  }, [textData.lyrics, audio.current])

  useEffect(() => {
    if (audio?.current && isPlaying) {
      if (inLoop) {
        // loop video in index start and end
        console.log('loop')

        let index = !isNumber(indexActive) ? 0 : indexActive
        const duration =
          textData.lyrics[index]?.end - textData.lyrics[index]?.start

        const time = textData.lyrics[index].start

        audio.current.currentTime = time

        const interval = setInterval(async () => {
          if (audio.current) audio.current.currentTime = time
        }, duration * 1000)

        return () => clearInterval(interval)
      } else {
        const interval = setInterval(async () => {
          if (audio.current) {
            const currentTime = audio?.current?.currentTime
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
                if (audio.current) audio.current.play()
              }, 1000)
              return
            }
            const findIndex = textData.lyrics.findIndex(
              (item: any) =>
                item.start <= currentTime && item.end >= currentTime
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
      isNumber(indexActive) &&
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

  console.log({ isPlaying })
  // var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > - 1

  return (
    <>
      <audio
        src={textData.audioUrl}
        ref={audio}
        controls={clickedOnAudio ? false : isIOS}
        style={{ position: 'fixed', left: '0', top: '0', zIndex: '10' }}
        onPlay={() => {
          setIsPlaying(true)
          setClickedOnAudio(true)
        }}
      ></audio>
    </>
  )
}
