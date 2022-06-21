import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
  {
    rawSentence: '{w} {2-pessoa} {r} {p+to_be} {c}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ['yo estoy', 'tú estás', 'él está', 'estamos'],
      },

      {
        id: 'w',
        alternatives: [
          'no hay problema',
          'eso es lo que',
          'lo que importa es que',
        ],
      },
      {
        id: '2-pessoa',
        alternatives: ['ellos piensan que', 'parece que', '_'],
      },
      {
        id: 'k',
        alternatives: ['mas o menos', '_'],
      },
      {
        id: 'r',
        alternatives: ['realmente', 'ya', '_'],
      },
      {
        id: 'c',
        alternatives: [
          'buscando',
          // 'allí para',
          'haciendo',
          'ir a alguna parte',
          'empezando',
        ],
      },
    ],
  },
]
export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)

  return (
    <div>
      <CreateSentences
        patternsInfo={{
          currentIndex: bigData.length - indexData,
          length: bigData.length,
        }}
        data={bigData[indexData]}
        onPrev={() =>
          setIndexData(prev => {
            if (prev + 1 >= bigData.length) {
              return 0
            }
            return prev + 1
          })
        }
        onNext={() =>
          setIndexData(prev => {
            if (prev - 1 < 0) {
              return bigData.length - 1
            }
            return prev - 1
          })
        }
        language="es"
        before={false}
        after={false}
      />
    </div>
  )
}
