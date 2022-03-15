import React from 'react'
import Avatar from '../../organisms/Avatar'
import BigPoster from '../../organisms/BigPoster'
import Carrousel from '../../organisms/Carrousel'
import { _Data } from '../../utils/types/_type_data'

import { ContainerHome } from './styles-home'

interface IProps {
  data: _Data
  posterData: {
    img: string
    id: string
    title: string
  }
  showInfo?: boolean
}

const Home = ({ data, posterData, showInfo }: IProps) => {
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
            <BigPoster
              src={posterData.img}
              id={posterData.id}
              title={posterData.title}
            />
          </div>
          {/* <Carrousel title="frequentes" />
          <Carrousel title="easy" />
          <Carrousel title="easy" /> */}

          {data.categories.map(category => (
            <Carrousel
              showInfo={showInfo}
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}

          {/* <Carrousel title="frequentes" /> */}
        </div>
        <div className="right">
          <Avatar />
          {/* <Carrousel
            showInfo={showInfo}
            title="Favoritos"
            small
            items={data.categories[0].items}
          />
          <Carrousel
            showInfo={showInfo}
            title="Favoritos"
            small
            items={data.categories[1].items}
          /> */}
        </div>
      </section>
    </ContainerHome>
  )
}

export default Home
