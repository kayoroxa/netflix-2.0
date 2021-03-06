import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
  {
    rawSentence: '{p} pas {v}',
    replacements: [
      {
        id: 'p',
        alternatives: [
          `je ne sais`,
          `tu ne sais`,
          `elle ne sait`,
          `il ne sait`,
          `ils ne savent`,
          `nous ne savons`,
        ],
      },
      {
        id: 'v',
        alternatives: [
          `sourire`,
          `chanter`,
          `parler`,
          `écouter`,
          `comprendre`,
          `ce qui s'est passé`,
          `ce qu'il a fait`,
          `ce que tu as fait`,
        ],
      },
    ],
  },
]
export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)
  const [anki, setAnki] = useState<{ [key: string]: number }>({})
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
        language="fr"
        before={false}
        anki={anki}
        setAnki={setAnki}
        after={false}
      />
    </div>
  )
}
