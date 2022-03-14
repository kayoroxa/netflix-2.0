import React from 'react'

import { ContainerImagesRandom } from './styles-images-random'

interface IProps {
  data: {
    imageUrl: string
    info: string[]
  }[]
}
const ImagesRandom = ({ data }: IProps) => {
  return (
    <ContainerImagesRandom>
      <div className="container">
        {data.map(({ imageUrl, info }) => (
          <div className="image-container col" key={imageUrl}>
            <img src={imageUrl} alt="" />
            <div className="info">
              {info.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContainerImagesRandom>
  )
}

export default ImagesRandom
