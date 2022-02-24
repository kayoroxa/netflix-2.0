import React from 'react'
import Avatar from '../../organisms/Avatar'
import Carrousel from '../../organisms/Carrousel'

import { ContainerHome } from './styles-home'

interface IProps {}
const Home = ({}: IProps) => {
  return (
    <ContainerHome>
      <section>
        <div className="left">
          <header>
            <img
              id="Logo"
              src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png"
              alt=""
            />
            <h5>New</h5>
            <h5>Series</h5>
          </header>
          <Carrousel title="frequentes" />
          <Carrousel title="easy" />
          <Carrousel title="easy" />
          {/* <Carrousel title="frequentes" /> */}
        </div>
        <div className="right">
          <Avatar />
          <Carrousel title="Favoritos" small />
          <Carrousel title="Favoritos" small />
        </div>
      </section>
    </ContainerHome>
  )
}

export default Home
