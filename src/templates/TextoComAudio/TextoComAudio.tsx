import { isNumber } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { BsFillPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { ImLoop } from 'react-icons/im'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { MdTranslate } from 'react-icons/md'
import YouTube from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'
import { I_Text } from '../../utils/types/_type_text_lyrics'
import { ContainerTextoComAudio } from './styles-texto-com-audio'

interface IProps {
  textData: I_Text
}

const TextoComAudio = ({ textData }: IProps) => {
  const [indexActive, setIndexActive] = useState<number | boolean>(false)

  const [inLoop, setInLoop] = useState(false)
  const [showTranslate, setShowTranslate] = useState(true)

  const [isPlaying, setIsPlaying] = useState(false)
  const [videoTarget, setVideoTarget] = useState<YouTubePlayer | null>(null)

  function _onReady(event: { target: YouTubePlayer }) {
    // setTimeout(() => {
    setVideoTarget(event.target)
    // }, 1000)

    // videoTarget?.seekTo(10, true)
    // event.target.seekTo(10)
  }

  function handleClickPlay() {
    if (videoTarget) {
      if (isPlaying) {
        videoTarget.pauseVideo()
      } else {
        videoTarget.playVideo()
      }
    }
  }
  function handleSentenceClick(index: number) {
    if (videoTarget) {
      // videoTarget.pauseVideo()
      videoTarget.seekTo(textData.lyrics[index].start / 1000, true)

      // if (wasPlaying) {
      // setTimeout(() => {
      // videoTarget.playVideo()
      // }, 500)
      // }
    }

    if (!isPlaying) setIndexActive(index)
  }

  useEffect(() => {
    if (videoTarget && isPlaying) {
      if (inLoop) {
        // loop video in index start and end

        let index = !isNumber(indexActive) ? 0 : indexActive
        const duration =
          textData.lyrics[index].end - textData.lyrics[index].start

        const time = textData.lyrics[index].start / 1000

        videoTarget.seekTo(time, true)

        const interval = setInterval(async () => {
          videoTarget.seekTo(time, true)
        }, duration)

        return () => clearInterval(interval)
      } else {
        const interval = setInterval(async () => {
          const currentTime = (await videoTarget?.getCurrentTime()) * 1000
          // console.log(currentTime)
          const findIndex = textData.lyrics.findIndex(
            (item: any) => item.start <= currentTime && item.end >= currentTime
          )
          setIndexActive(findIndex)
        }, 500)

        return () => clearInterval(interval)
      }
    }
  }, [isPlaying, inLoop])

  const activeSentenceElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(activeSentenceElem?.current)
    activeSentenceElem?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [activeSentenceElem, indexActive])

  return (
    <ContainerTextoComAudio>
      <div className="app">
        <div className="text-container">
          {textData.lyrics.map((item, index) => (
            <div
              className="sentence-play-container"
              onClick={() => handleSentenceClick(index)}
            >
              {/* {index === 0 && (
                <div className="play">
                  <div className="play-button" />
                </div>
              )} */}
              <div
                key={index}
                className={
                  'sentence-container' +
                  (index === indexActive ? ' active' : '')
                }
                ref={index === indexActive ? activeSentenceElem : null}
              >
                <div className="sentence en">{item.en}</div>
                {showTranslate && <div className="sentence pt">{item.pt}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="footer">
          <div className="photo-title">
            <div className="img-container">
              <img
                src="https://www.csaimages.com/pix/ARCH/MISC/T20316_WP.JPG"
                alt=""
              />
            </div>
            <div className="title">{textData.title}</div>
            <div className="description">{textData.description}</div>
          </div>
          {videoTarget && (
            <div className="player">
              <div
                className={`translate ${showTranslate ? 'active' : ''}`}
                onClick={() => setShowTranslate(prev => !prev)}
              >
                <MdTranslate />
              </div>
              <div
                className="before"
                onClick={() => {
                  const newIndex = isNumber(indexActive)
                    ? Math.max(indexActive - 1, 0)
                    : false
                  if (newIndex) handleSentenceClick(newIndex)
                }}
              >
                <IoMdArrowRoundBack />
              </div>
              <div
                className={`play-pause ${isPlaying ? 'active' : ''}`}
                onClick={() => handleClickPlay()}
              >
                {isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
              </div>
              <div
                className="after"
                onClick={() => {
                  const newIndex = isNumber(indexActive)
                    ? Math.min(indexActive + 1, textData.lyrics.length - 1)
                    : false
                  if (newIndex) handleSentenceClick(newIndex)
                }}
              >
                <IoMdArrowRoundForward />
              </div>
              <div
                className={`loop ${inLoop ? 'active' : ''}`}
                onClick={() => setInLoop(prev => !prev)}
              >
                <ImLoop />
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            display: 'none',
            position: 'absolute',
            width: '1px',
            height: '1px',
          }}
        >
          <YouTube
            className="yt-vid"
            videoId={textData.audioUrl}
            opts={{
              playerVars: {
                modestbranding: 1,
                fs: 0,
                showinfo: 0,
                controls: 0,
              },
            }}
            onReady={_onReady}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onEnd={({ target }) => {
              target.seekTo(0, true)
              setIsPlaying(false)
            }}
          />
        </div>
      </div>
    </ContainerTextoComAudio>
  )
}

export default TextoComAudio
