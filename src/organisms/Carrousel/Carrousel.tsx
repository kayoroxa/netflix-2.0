import React, { useEffect, useState } from 'react'

import { ContainerCarrousel } from './styles-carrousel'
import Carousel from 'react-elastic-carousel'

interface IProps {
  title: string
}
const config = {
  scrollPerClick: 50,
}
function getWindowDimensions() {
  try {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } catch (error) {
    return {
      width: 0,
      height: 0,
    }
  }
}
const Carrousel = ({ title }: IProps) => {
  const [translate, setTranslate] = useState(0)
  const carrousel = React.useRef<HTMLDivElement>(null)
  const containerCarrousel = React.useRef<HTMLDivElement>(null)
  const width = getWindowDimensions().width * 0.75
  console.log({ width })
  useEffect(() => {
    // width current
    console.log(containerCarrousel.current?.clientWidth)
  }, [containerCarrousel])

  const itemsData = [
    ...Array(6)
      .fill(0)
      .map(() => ({
        title: 'Viuva negra',
        description: 'Very good movie',
        img: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
      })),
    ...Array(6)
      .fill(0)
      .map(() => ({
        title: 'Black Widow',
        description: 'Very cool',
        img: 'https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg',
      })),
  ]
  // console.log(itemsData.map(item => item.img))
  return (
    <ContainerCarrousel ref={containerCarrousel}>
      <div className="head">
        <h3>{title}</h3>
        <div className="buttons">
          <button
            onClick={() =>
              setTranslate(prev => {
                const next = prev - width - 200
                if (next <= 0) return 0
                return Math.max(next, 0)
              })
            }
          >
            {'<'}
          </button>
          <button
            onClick={() =>
              setTranslate(prev => {
                const next = prev + (width - 200)
                console.log(next)
                if (!carrousel.current) next
                else if (next > carrousel.current.scrollWidth) {
                  return 0
                }
                console.log(containerCarrousel.current?.clientWidth)
                const isLast = next * 2 >= carrousel.current.scrollWidth - 5
                console.log(carrousel.current.scrollWidth)
                if (isLast)
                  return (
                    carrousel.current.scrollWidth -
                    containerCarrousel.current?.clientWidth -
                    4
                  )
                return next
              })
            }
          >
            {'>'}
          </button>
        </div>
      </div>

      <div
        className="carrousel-images"
        ref={carrousel}
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {itemsData.map((v, i) => (
          <div className="card">
            <div className="container-img">
              <img src={v.img} alt="" />
            </div>
            <div className="infos">
              <h3>
                {i}
                {v.title}
              </h3>
              <p>{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerCarrousel>
  )
}

export default Carrousel
