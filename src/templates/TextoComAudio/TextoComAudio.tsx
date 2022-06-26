import { isNumber } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { BsFillPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { ImLoop } from 'react-icons/im'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { MdTranslate } from 'react-icons/md'

import { I_Text } from '../../utils/types/_type_text_lyrics'
import MyAudio from './MyAudio'
import MyYouTube from './MyYouTube'
import { ContainerTextoComAudio } from './styles-texto-com-audio'
import useKey from './useKey'

interface IProps {
  textData: I_Text
}

const TextoComAudio = ({ textData }: IProps) => {
  const [indexActive, setIndexActive] = useState<number | boolean>(false)
  const [playRate, setPlayRate] = useState(1)

  const [inLoop, setInLoop] = useState(false)
  const [showTranslate, setShowTranslate] = useState(true)

  const [isPlaying, setIsPlaying] = useState(false)

  function handleClickPlay() {
    setIsPlaying(!isPlaying)
  }
  function handleSentenceClick(index: number) {
    setIndexActive(index)
  }

  const activeSentenceElem = useRef<HTMLDivElement>(null)

  function handleAfter() {
    setIndexActive(prev => {
      if (isNumber(prev)) return Math.min(prev + 1, textData.lyrics.length - 1)
      else return 0
    })
  }

  function handlePrev() {
    setIndexActive(prev => {
      if (isNumber(prev)) return Math.max(prev - 1, 0)
      else return 0
    })
  }

  useKey({
    toggleLoop: () => setInLoop(prev => !prev),
    next: handleAfter,
    prev: handlePrev,
    togglePause: () => setIsPlaying(prev => !prev),
    repeatIndex: () => setIndexActive(prev => (isNumber(prev) ? prev : 0)),
    putSlow: () => setPlayRate(prev => Math.max(prev - 0.2, 0.2)),
    putFast: () => setPlayRate(prev => Math.min(prev + 0.2, 2)),
  })

  useEffect(() => {
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
              {Math.round(playRate * 10) / 10 !== 1 && (
                <div className="speed">{Math.round(playRate * 10) / 10}x</div>
              )}
              <img
                src={
                  textData.img ||
                  'https://www.csaimages.com/pix/ARCH/MISC/T20316_WP.JPG'
                }
                alt=""
              />
            </div>
            <div className="title">{textData.title}</div>
            <div className="description">{textData.description}</div>
          </div>

          <div className="player">
            <div
              className={`translate ${showTranslate ? 'active' : ''}`}
              onClick={() => setShowTranslate(prev => !prev)}
            >
              <MdTranslate />
            </div>
            <div className="before" onClick={handlePrev}>
              <IoMdArrowRoundBack />
            </div>
            <div
              className={`play-pause ${isPlaying ? 'active' : ''}`}
              onClick={() => handleClickPlay()}
            >
              {isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
            </div>
            <div className="after" onClick={handleAfter}>
              <IoMdArrowRoundForward />
            </div>
            <div
              className={`loop ${inLoop ? 'active' : ''}`}
              onClick={() => setInLoop(prev => !prev)}
            >
              <ImLoop />
            </div>
          </div>
        </div>
        {textData.isOnYouTube && <MyYouTube textData={textData} />}
        {!textData.isOnYouTube && (
          <MyAudio
            textData={textData}
            inLoop={inLoop}
            isPlaying={isPlaying}
            indexActive={indexActive}
            playRate={playRate}
            setIndexActive={setIndexActive}
          />
        )}
      </div>
    </ContainerTextoComAudio>
  )
}

export default TextoComAudio
