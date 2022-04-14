import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import stringSimilarity from 'string-similarity'
import { ContainerMemori } from './styles-memori'

interface IProps {}

const dict = {
  p: [
    'i',
    'you',
    'he',
    'she',
    'it',
    'we',
    'they',
    'the other guy',
    'many people',
  ],
  p_pt: ['eu', 'tu', 'ele', 'ela', 'ele', 'nós', 'eles', 'o outro'],
  SS_Start: [
    ['but it became clear that', 'mas ficou claro que'],
    ['there comes a point in life', 'chega um ponto na vida que'],
    ['there is a concept', 'existe um conceito que'],
    ['many people think', 'muita gente acha que'],
    ['sorry to interrupt you', 'desculpa te interromper'],
    ["Let's suppose that", 'vamos supor que'],
  ],
  SS: [
    ['a person who is not acting', 'uma pessoa que não está agindo'],
    [
      "It's like she's slowly dying",
      'é como se ela estivesse morrendo lentamente',
    ],

    [
      'everyone has the right to think so',
      'todos têm o direito de pensar assim',
    ],
    ['it is a matter of opinion', 'é uma questão de opinião'],
    [
      'the better your relationship the better you do things',
      'quanto melhor seu relacionamento melhor você faz as coisas',
    ],
    ["you don't want to know anymore", 'você não quer mais saber'],
    ['we are smarts', 'nós somos espertos'],
    [
      'the crowd is focused on just selling',
      'a galera está focada em apenas vender',
    ],
    ["I've tried over a thousand things", 'eu já tentei mais de mil coisas'],
    ['it was basically a year', 'foi basicamente um ano'],
    ['in a period of 2 weeks', 'num período de 2 semanas'],
    ['technically you will do it', 'tecnicamente você vai fazer isso'],
  ],
}

const Memori = ({}: IProps) => {
  function generateSentence() {
    return [
      _.sample(dict.SS_Start),
      _.sample(dict.SS),
      ['and', 'e'],
      _.sample(dict.SS),
    ]
  }

  const [sentence, setSentence] = useState(generateSentence())

  const sentence_pt = `${sentence[0]?.[1]} ${sentence[1]?.[1]} ${sentence[2]?.[1]}`
  const sentence_en = `${sentence[0]?.[0]} ${sentence[1]?.[0]} ${sentence[2]?.[0]}`

  var similarity = stringSimilarity.compareTwoStrings(
    'do you have any idia whats is it',
    'do you ave any ideia what is '
  )

  const [showTranslate, setShowTranslate] = useState(false)

  useEffect(() => {
    //on key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setShowTranslate(prev => !prev)
      }
      if (e.key === 'Escape') {
        setSentence(generateSentence())
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <ContainerMemori onClick={() => setSentence(generateSentence())}>
      {/* <p>
        {sentence.map(ss => (
          <span>{ss?.[0]}</span>
        ))}
      </p> */}
      <div className="container">
        <p>{sentence.map(ss => ss?.[1]).join(' ')}</p>
        <p
          style={{
            opacity: showTranslate ? '1' : '0',
          }}
        >
          {sentence.map(ss => ss?.[0]).join(' ')}
        </p>
      </div>
    </ContainerMemori>
  )
}

export default Memori
