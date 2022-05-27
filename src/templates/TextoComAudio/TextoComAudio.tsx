import React, { useState } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { ImLoop } from 'react-icons/im'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { MdTranslate } from 'react-icons/md'
import { I_Text } from '../../utils/types/_type_text_lyrics'
import { ContainerTextoComAudio } from './styles-texto-com-audio'

interface IProps {
  textData: I_Text
}

const TextoComAudio = ({ textData }: IProps) => {
  const [indexActive, setIndexActive] = useState<number | boolean>(false)

  const [inLoop, setInLoop] = useState(false)
  const [showTranslate, setShowTranslate] = useState(true)

  const isMobile = window.innerWidth <= 768

  return (
    <ContainerTextoComAudio isMobile={isMobile}>
      <div className="app">
        <div className="text-container">
          {textData.lyrics.map((item, index) => (
            <div
              className="sentence-play-container"
              onClick={() => setIndexActive(index)}
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
            <div className="title">the nail</div>
            <div className="description">part 1</div>
          </div>
          <div className="player">
            <div
              className={`translate ${showTranslate ? 'active' : ''}`}
              onClick={() => setShowTranslate(prev => !prev)}
            >
              <MdTranslate />
            </div>
            <div className="before">
              <IoMdArrowRoundBack />
            </div>
            <div className="play-pause">
              <BsFillPlayCircleFill />
            </div>
            <div className="after">
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
      </div>
    </ContainerTextoComAudio>
  )
}

export default TextoComAudio
