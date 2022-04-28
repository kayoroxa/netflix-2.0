import React from 'react'
import MrPlayer from '../../organisms/MrPlayer'
import { ContainerTeste } from './styles-teste'

interface IProps {}
const Teste = ({}: IProps) => {
  return (
    <ContainerTeste>
      {/* <div className="container"> */}
      <MrPlayer videoId="rOSVc0qeRno" />
      {/* </div> */}
    </ContainerTeste>
  )
}

export default Teste
