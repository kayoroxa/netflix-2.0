import React from 'react'
import Avatar from '../../organisms/Avatar'
import BigPoster from '../../organisms/BigPoster'
import Carrousel from '../../organisms/Carrousel'
import { _Data } from '../../utils/types/_type_data'

import { ContainerHome } from './styles-home'

interface IProps {
  data: _Data
}

const Home = ({ data }: IProps) => {
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
            <a href="">
              <h3>New</h3>
            </a>
            <a href="">
              <h3>Series</h3>
            </a>
          </header>
          <div className="container-poster">
            <BigPoster src="https://images.moviemeter.nl/tmdb/t/p/original//ylawpj3jvLESk7JGh4QvlzD9EmH.jpg" />
          </div>
          {/* <Carrousel title="frequentes" />
          <Carrousel title="easy" />
          <Carrousel title="easy" /> */}

          {data.categories.map(category => (
            <Carrousel
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}

          {/* <Carrousel title="frequentes" /> */}
        </div>
        <div className="right">
          <Avatar />
          {/* <Carrousel title="Favoritos" small />
          <Carrousel title="Favoritos" small /> */}
        </div>
      </section>
    </ContainerHome>
  )
}

export default Home
