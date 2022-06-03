import React, { useEffect, useState } from 'react'
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

interface IProps {
  data: IData
  onNext: () => void
  after: string[]
  before: string[] | false
  patternsInfo: {
    currentIndex: number
    length: number
  }
}

function getOption(textDivided: string[], target: string) {
  if (target.includes('(s)')) {
    const p1 = ['i', 'you', 'they', 'we']

    const includeAnyP1 = textDivided.some(item => p1.includes(item))

    if (includeAnyP1) return target.replace('(s)', '')
    return target.replace('(s)', 's')
  } else if (target.includes('|')) {
    const p1 = ['i', 'you', 'they', 'we']

    const includeAnyP1 = textDivided.some(item =>
      p1.includes(item.toLowerCase())
    )

    const [forP1, forP2] = target.split('|').map(v => v.trim())

    if (includeAnyP1) return forP1
    return forP2
  }
  return target
}

const CreateSentences = ({ data, onNext, before, patternsInfo }: IProps) => {
  const [combinations, setCombinations] = useState(0)

  const sampleArrayIndex = (arr: string[]) => {
    const index = Math.floor(Math.random() * arr.length)
    return {
      randomIndex: index,
      value: arr[index],
    }
  }

  // const [sentence, setSentence] = useState<string[]>([])

  function generateHtml(data: IData) {
    let endSentence = false
    const { rawSentence, replacements } = data
    const sentence = rawSentence
      .split(/(\{.*?\})/g)
      .map(v => v.trim())
      .filter(item => item.length > 0)

    let sentenceChoice: string[] = []

    const html = sentence.map((word, index) => {
      setCombinations(
        replacements
          .map(v => v.alternatives)
          .reduce((acc, cur) => {
            return acc * cur.length
          }, 1)
      )
      if (word.startsWith('{') && word.endsWith('}')) {
        const id = word.slice(1, -1)
        const replacement = replacements.find(
          replacement => replacement.id === id
        )
        if (replacement) {
          let { randomIndex } = sampleArrayIndex(replacement.alternatives)

          if (
            ['.', '!', '?'].some(p => sentenceChoice.slice(-1)[0]?.endsWith(p))
          ) {
            endSentence = true
          }

          const data = replacement.alternatives.map((alternative, key) => {
            const isEmphasis =
              randomIndex === key && alternative !== '_' && !endSentence

            if (isEmphasis) {
              sentenceChoice.push(getOption(sentenceChoice, alternative))
            }

            return {
              isEmphasis,
              text: alternative,
              elem: (
                <div
                  className={`al-item word ${isEmphasis ? 'emphasis' : ''}`}
                  key={key}
                >
                  {alternative}
                </div>
              ),
            }
          })

          return (
            <div className="al" key={index}>
              <div className="al-inside">{data.map(v => v.elem)}</div>
            </div>
          )
        }
      }
      if (!endSentence) sentenceChoice.push(word)
      return (
        <div className={`word ${!endSentence ? 'emphasis' : ''}`}>{word}</div>
      )
    })
    return {
      sentence: sentenceChoice
        .join(' ')
        .replace(/\s\'/g, "'")
        .replace(/\sn\'t/g, "n't"),
      html,
    }
  }

  const [dataSentence, setDataSentence] = useState<{
    sentence: string | null
    html: JSX.Element[] | null
  }>({ sentence: null, html: null })

  function onReloadSentence() {
    setDataSentence(generateHtml(data))
  }

  useEffect(() => {
    setDataSentence(generateHtml(data))

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onNext()
      }
      if (e.key === '0') {
        onReloadSentence()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data])

  useSay(dataSentence.sentence)

  return (
    <ContainerCreateSentences>
      <div className="app">
        <button onClick={onNext}>NEXT...</button>

        {dataSentence.html && (
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

            {dataSentence.html}
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
