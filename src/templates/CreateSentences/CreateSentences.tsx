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

const CreateSentences = ({ data, onNext, before, after }: IProps) => {
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
          return (
            <div className="al" key={index}>
              <div className="al-inside">
                {replacement.alternatives.map((alternative, key) => (
                  <div className="al-item word" key={key}>
                    {alternative}
                  </div>
                ))}
              </div>
            </div>
          )
        }
      }

      return <div className="word">{word}</div>
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
