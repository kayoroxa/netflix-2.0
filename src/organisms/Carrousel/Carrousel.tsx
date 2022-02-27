import React, { useEffect, useState } from 'react'

import { ContainerCarrousel } from './styles-carrousel'
import Score from '../../atoms/Score'
import { _Data_Item } from '../../utils/types/_type_data'
import { useRouter } from 'next/router'

interface IProps {
  title: string
  items: _Data_Item[]
  small?: boolean
}
// const config = {
//   scrollPerClick: 50,
// }
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
const Carrousel = ({ title, items, small }: IProps) => {
  const router = useRouter()
  const [translate, setTranslate] = useState(0)
  const carrousel = React.useRef<HTMLDivElement>(null)
  const containerCarrousel = React.useRef<HTMLDivElement>(null)
  const width = getWindowDimensions().width * 0.75
  console.log({ width })
  useEffect(() => {
    // width current
    console.log(containerCarrousel.current?.clientWidth)
  }, [containerCarrousel])

  // console.log(itemsData.map(item => item.img))
  return (
    <ContainerCarrousel ref={containerCarrousel}>
      <div className="head">
        <h3>{title}</h3>
        <div className="buttons">
          <button
            onClick={() =>
              setTranslate(prev => {
                const next = prev - (width - 300)
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
                const next = prev + (width - 300)
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
        className={`carrousel-images ${small ? 'small' : ''}`}
        ref={carrousel}
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {items.map((v, i) => (
          <div
            className="card"
            key={v.title}
            onClick={() => router.push('/play?v=' + v.id)}
          >
            <div className="container-img">
              <img src={v.img} alt="" />
            </div>
            <div className="infos">
              <div className="inline">
                {!small && <Score />}
                <span>{v.description ? v.description : ''}</span>
              </div>
              <h3>
                {i}
                {v.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </ContainerCarrousel>
  )
}

export default Carrousel
