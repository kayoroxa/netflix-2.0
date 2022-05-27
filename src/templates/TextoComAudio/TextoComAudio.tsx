import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { I_Text } from '../../utils/types/_type_text_lyrics'
import { ContainerTextoComAudio } from './styles-texto-com-audio'

interface IProps {
  textData: I_Text
}

const TextoComAudio = ({ textData }: IProps) => {
  return (
    <ContainerTextoComAudio>
      <div className="app">
        <div className="text-container">
          {textData.lyrics.map((item, index) => (
            <div className="sentence-play-container">
              {/* {index === 0 && (
                <div className="play">
                  <div className="play-button" />
                </div>
              )} */}
              <div
                key={index}
                className={
                  'sentence-container' + (index === 5 ? ' active' : '')
                }
              >
                <div className="sentence en">{item.en}</div>
                <div className="sentence pt">{item.pt}</div>
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
            <div className="before">
              <IoMdArrowRoundBack />
            </div>
            <div className="play-pause">
              <BsFillPlayCircleFill />
            </div>
            <div className="after">
              <IoMdArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </ContainerTextoComAudio>
  )
}

export default TextoComAudio
