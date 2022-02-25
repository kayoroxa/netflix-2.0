import React from 'react'

import { ContainerBigPoster } from './styles-big-poster'

interface IProps {
  src: string
}
const BigPoster = ({ src }: IProps) => {
  return (
    <ContainerBigPoster>
      <img src={src} alt="" />
      <div className="info">
        <div className="description">Season 1</div>
        <div className="title">Vingadores</div>
        <button>Watch Now</button>
      </div>
    </ContainerBigPoster>
  )
}

export default BigPoster
