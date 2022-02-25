import React from 'react'
import { BsFillLightningFill } from 'react-icons/bs'
import { ContainerScore } from './styles-score'

interface IProps {}
const Score = ({}: IProps) => {
  return (
    <ContainerScore>
      <BsFillLightningFill />
      <span>8.5</span>
    </ContainerScore>
  )
}

export default Score
