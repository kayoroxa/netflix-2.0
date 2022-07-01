import { useEffect, useState } from 'react'
import { ContainerCreateSentences } from './styles-create-sentences'
import { useSay } from './useSay'

interface IReplacement {
  id: string
  alternatives: string[]
}

interface IData {
  rawSentence: string
  replacements: IReplacement[]
}

interface IBlocks {
  sentence: string
  dataBlocks: {
    isColumn: boolean
    cells: {
      isEmphasis: boolean
      text: string
    }[]
  }[]
}

interface IProps {
  data: IData
  onNext: () => any
  onPrev: () => any
  after: string[] | false
  before: string[] | false
  patternsInfo: {
    currentIndex: number
    length: number
  }
  language?: string
}

function getOption(textDivided: string[], target: string) {
  if (target.includes('(s)')) {
    const p1 = ['i', 'you', 'they', 'we']

    const includeAnyP1 = textDivided.some(item => p1.includes(item))

    if (includeAnyP1) return target.replace('(s)', '')
    return target.replace('(s)', 's')
  } else if (target.includes('|')) {
    const p1 = ['i', 'you', 'they', 'we', 'these', 'those']

    const includeAnyP1 = textDivided.some(item =>
      p1.some(p => item.match(new RegExp(`\\b${p}\\b`, 'gi')))
    )

    const [forP1, forP2] = target.split('|').map(v => v.trim())

    if (includeAnyP1) return forP1
    return forP2
  }
  return target
}

const CreateSentences = ({
  data,
  onNext,
  before,
  patternsInfo,
  language,
  onPrev,
}: IProps) => {
  const [combinations, setCombinations] = useState(0)

  const sampleArrayIndex = (arr: string[]) => {
    const index = Math.floor(Math.random() * arr.length)
    return {
      randomIndex: index,
      value: arr[index],
    }
  }

  function generateHtml(data: IData) {
    let endSentence = false
    const { rawSentence, replacements } = data
    const sentencePattern = rawSentence
      .split(/(\{.*?\})/g)
      .map(v => v.trim())
      .filter(item => item.length > 0)

    let sentenceChoice: string[] = []

    const dataBlocks = sentencePattern.map(word => {
      setCombinations(
        replacements
          .map(v => v.alternatives)
          .reduce((acc, cur) => {
            return acc * cur.length
          }, 1)
      )
      const isItTag = word.startsWith('{') && word.endsWith('}')
      if (isItTag) {
        const id = word.slice(1, -1)
        const replacement = replacements.find(
          replacement => replacement.id === id
        )
        if (replacement) {
          let { randomIndex } = sampleArrayIndex(replacement.alternatives)

          const andWithPunctuation = ['.', '!', '?'].some(p =>
            sentenceChoice.slice(-1)[0]?.endsWith(p)
          )

          if (andWithPunctuation) endSentence = true

          const column = replacement.alternatives.map((alternative, key) => {
            const isEmphasis: boolean =
              randomIndex === key && alternative !== '_' && !endSentence

            if (isEmphasis) {
              sentenceChoice.push(
                getOption(
                  sentenceChoice,
                  alternative.replace(/[^\s\w\?\!\.\,\'\|]/g, '')
                )
              )
            }

            const cellsLine = {
              isEmphasis,
              text: alternative,
            }

            return cellsLine
          })

          return {
            isColumn: true,
            cells: column,
          }
        }
      }
      if (!endSentence) sentenceChoice.push(word)

      return {
        isColumn: false,
        cells: [
          {
            isEmphasis: !endSentence,
            text: word,
          },
        ],
      }
    })

    return {
      sentence: sentenceChoice
        .join(' ')
        .replace(/\s\'/g, "'")
        .replace(/\sn\'t/g, "n't"),
      dataBlocks,
    }
  }

  const [dataSentence, setDataSentence] = useState<IBlocks>({
    sentence: '',
    dataBlocks: [],
  })

  function onReloadSentence() {
    setDataSentence(generateHtml(data))
  }

  useEffect(() => {
    setDataSentence(generateHtml(data))

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'd') {
        onNext()
      }
      if (e.key === '.' || e.key === 'a') {
        onPrev()
      }
      if (e.key === '0' || e.key === ' ') {
        onReloadSentence()
      }
      // if (e.key === 'c') {
      //   console.log(dataSentence.sentence)
      //   // copy to clipboard
      //   const text = dataSentence.sentence
      //   if (text) {
      //     navigator.clipboard.writeText(text)
      //   }
      // }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data])

  useSay(dataSentence.sentence, language)

  return (
    <ContainerCreateSentences>
      <div className="app">
        <button onClick={onNext}>NEXT...</button>

        {dataSentence.dataBlocks.length > 0 && (
          <div className="flow-container">
            {before && (
              <div className="al">
                <div className="al-inside">
                  {before.map((item, key) => (
                    <div className="al-item word small" key={key}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {dataSentence.dataBlocks.map((column, index) => {
              if (column.isColumn) {
                return (
                  <div className="al" key={index}>
                    <div className="al-inside">
                      {column.cells.map((v, key) => (
                        <div
                          className={`al-item word ${
                            v.isEmphasis ? 'emphasis' : ''
                          }`}
                          key={key}
                        >
                          {v.text}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div
                    className={`word ${
                      column.cells[0].isEmphasis ? 'emphasis' : ''
                    }`}
                  >
                    {column.cells[0].text}
                  </div>
                )
              }
            })}
          </div>
        )}

        <div className="after word">{dataSentence.sentence}</div>
        <div className="combinations">{combinations}</div>
        <div className="index">
          N: {patternsInfo?.currentIndex}/{patternsInfo?.length}
        </div>
      </div>
    </ContainerCreateSentences>
  )
}

export default CreateSentences
