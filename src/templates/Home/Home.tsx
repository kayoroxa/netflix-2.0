import React from 'react'
import Carrousel from '../../organisms/Carrousel'

import { ContainerHome } from './styles-home'

interface IProps {}
const Home = ({}: IProps) => {
  return (
    <ContainerHome>
      <div className="left">
        <Carrousel title="frequentes" />
        {/* <Carrousel title="frequentes" /> */}
        {/* <Carrousel title="frequentes" /> */}
      </div>
      <div className="right">
        <Carrousel title="salvos" />
        {/* <Carrousel title="salvos" /> */}
        {/* <Carrousel title="salvos" /> */}
      </div>
    </ContainerHome>
  )
}

export default Home
