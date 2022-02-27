import { useRouter } from 'next/router'
import React from 'react'

import { ContainerBigPoster } from './styles-big-poster'

interface IProps {
  src: string
  id: string
  title: string
}
const BigPoster = ({ src, id, title }: IProps) => {
  const router = useRouter()
  return (
    <ContainerBigPoster>
      <img src={src} alt="" />
      <div className="info">
        <div className="description">Season 1</div>
        <div className="title">{title}</div>
        <button onClick={() => router.push('/play?v=' + id)}>Watch Now</button>
      </div>
    </ContainerBigPoster>
  )
}

export default BigPoster
