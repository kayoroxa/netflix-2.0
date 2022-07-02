import _ from 'lodash'
import { SetStateAction, useEffect, useState } from 'react'
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
  sentenceDivided: string[]
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
  anki: {
    [key: string]: number
  }
  setAnki: (
    value: SetStateAction<{
      [key: string]: number
    }>
  ) => void
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
  anki,
  setAnki,
}: IProps) => {
  const [combinations, setCombinations] = useState(0)
  // const [score, setScore] = useState(0)
  // const [level, setLevel] = useState(2)

  const [dataSentence, setDataSentence] = useState<IBlocks>({
    sentence: '',
    sentenceDivided: [],
    dataBlocks: [],
  })

  function onNotRemember() {
    setAnki(prev => {
      const newPrev = { ...prev }
      dataSentence.sentenceDivided.forEach(word => {
        if (newPrev[word]) newPrev[word] -= 1
        else newPrev[word] = -1
      })
      return newPrev
    })
  }
  function onRemember() {
    setAnki((prev: any) => {
      const newPrev: any = { ...prev }
      dataSentence.sentenceDivided.forEach(word => {
        if (newPrev[word]) newPrev[word] += 1
        else newPrev[word] = +1
      })
      return newPrev
    })
  }

  // useEffect(() => {
  //   if (score > 6) {
  //     setLevel(prev => prev + 1)
  //     setScore(0)
  //   }
  // }, [score])

  const sampleArrayIndex = (arr: string[]) => {
    // const min = Math.min(arr.length, level)
    // const index = Math.floor(Math.random() * min)
    const index = Math.floor(Math.random() * arr.length)

    const sorted = [
      ...new Map(Object.entries(anki).sort((a, b) => a[1] - b[1])),
    ].filter(item => !dataSentence.sentenceDivided.includes(item[0]))

    const randomArr = Array(2)
      .fill(0)
      .map(() => _.random(0, 10))

    const sortedFind = sorted
      .filter((_, index) => !randomArr.includes(index))
      .find(item => arr.includes(item[0]))

    const newIndex = arr.findIndex(v => v === sortedFind?.[0])

    return {
      randomIndex: sortedFind ? newIndex : index,
      value: sortedFind ? arr[newIndex] : arr[index],
    }
  }

  function generateBlocksData(data: IData) {
    let endSentence = false
    const { rawSentence, replacements } = data
    const sentencePattern = rawSentence
      .split(/(\{.*?\})/g)
      .map(v => v.trim())
      .filter(item => item.length > 0)

    let sentenceChoice: string[] = []
    let rawSentenceChoice: string[] = []

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

              rawSentenceChoice.push(alternative)
            }

            const cellsLine = {
              isEmphasis,
              text: alternative,
            }

            if (!Object.keys(anki).some(item => alternative === item)) {
              setAnki(prev => {
                const newPrev = { ...prev }
                newPrev[alternative] = 0
                return newPrev
              })
            }

            return cellsLine
          })

          return {
            isColumn: true,
            cells: column,
          }
        }
      }
      if (!endSentence) {
        rawSentenceChoice.push(word)
        sentenceChoice.push(word)
      }

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
    console.log(sentenceChoice)
    return {
      sentenceDivided: rawSentenceChoice,
      sentence: sentenceChoice
        .join(' ')
        .replace(/\s\'/g, "'")
        .replace(/\sn\'t/g, "n't"),
      dataBlocks,
    }
  }

  function onReloadSentence() {
    setDataSentence(generateBlocksData(data))
  }

  useEffect(() => {
    onReloadSentence()
  }, [data])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'd') {
        // setScore(0)
        // setLevel(2)
        setAnki({})
        onNext()
      }
      if (e.key === 'a') {
        // setScore(0)
        // setLevel(2)
        setAnki({})
        onPrev()
      }
      if (e.key === '0' || e.key === ' ') {
        e.preventDefault()
        onReloadSentence()
      }
      if (e.key.toLowerCase() === '2') {
        // setScore(prev => prev + 1)
        onReloadSentence()
        onRemember()
      }
      if (e.key.toLowerCase() === '1') {
        // setScore(prev => prev - 1)
        onNotRemember()
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
  }, [data, dataSentence, anki])

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
                        <div className="cell">
                          <div
                            className="tag"
                            style={{
                              background: getColorIntensity(anki[v.text]),
                            }}
                          />

                          <div
                            className={`al-item word ${
                              v.isEmphasis ? 'emphasis' : ''
                            }`}
                            key={key}
                          >
                            {v.text}
                          </div>
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

function getColorIntensity(score: number) {
  if (score === 0) return `rgb(88, 94, 151)`
  return `rgb(${Math.min(Math.max(140 - score * 15, 0), 255)}, 120, 180)`
}
