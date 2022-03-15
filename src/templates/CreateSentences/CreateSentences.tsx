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
}

const CreateSentences = ({ data, onNext }: IProps) => {
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
              {replacement.alternatives.map((alternative, key) => (
                <div className="al-item word" key={key}>
                  {alternative}
                </div>
              ))}
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
        {generateHtml(data)}
      </div>
    </ContainerCreateSentences>
  )
}

export default CreateSentences
