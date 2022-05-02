import React from 'react'
import MrPlayer from '../../organisms/MrPlayer'
import { ContainerTeste } from './styles-teste'

interface IProps {}
const Teste = ({}: IProps) => {
  return (
    <ContainerTeste>
      {/* <div className="container"> */}
      {/* https://youtu.be/XCzLIMUfBpU */}
      <MrPlayer videoId="XCzLIMUfBpU" />
      {/* </div> */}
    </ContainerTeste>
  )
}

export default Teste
