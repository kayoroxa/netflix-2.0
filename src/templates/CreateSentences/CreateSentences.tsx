import React from 'react'
import { ContainerCreateSentences } from './styles-create-sentences'

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
  before: string[]
}

const CreateSentences = ({ data, onNext, before }: IProps) => {
  const sampleArrayIndex = (arr: string[]) =>
    Math.floor(Math.random() * arr.length)

  // const [sentence, setSentence] = useState<string[]>([])

  function generateHtml(data: IData) {
    const { rawSentence, replacements } = data
    const sentence = rawSentence
      .split(/(\{.*?\})/g)
      .map(v => v.trim())
      .filter(item => item.length > 0)

    const html = sentence.map((word, index) => {
      if (word.startsWith('{') && word.endsWith('}')) {
        const id = word.slice(1, -1)
        const replacement = replacements.find(
          replacement => replacement.id === id
        )
        if (replacement) {
          const randomIndex = sampleArrayIndex(replacement.alternatives)

          const data = replacement.alternatives.map((alternative, key) => {
            const isEmphasis = randomIndex === key && alternative !== '_'

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

          // console.log(data.filter(v => v.isEmphasis).map(v => v.text))

          return (
            <div className="al" key={index}>
              <div className="al-inside">{data.map(v => v.elem)}</div>
            </div>
          )
        }
      }

      return <div className="word emphasis">{word}</div>
    })
    return html
  }

  return (
    <ContainerCreateSentences>
      <div className="app">
        <button onClick={onNext}>NEXT...</button>

        <div className="flow-container">
          <div className="al">
            <div className="al-inside">
              {before.map((item, key) => (
                <div className="al-item word small" key={key}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {generateHtml(data)}
        </div>
        {/* {after.map((item, index) => (
          <div className="after word" key={index}>
            {item}
          </div>
        ))}*/}
      </div>
    </ContainerCreateSentences>
  )
}

export default CreateSentences
