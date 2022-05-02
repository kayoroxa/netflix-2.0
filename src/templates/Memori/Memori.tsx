import _ from 'lodash'
import React, { useEffect, useState } from 'react'
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
    ['that was the time', 'essa foi a época que'],
    ['who assures me that', 'quem me garante que'],
    ['as far as I know', 'até onde eu sei'],
    ['it can be said that', 'pode ser dito que'],
    ['but the day', 'mas no dia que'],
    ['the question is that', 'a questão é que'],
    ["but it's not that", 'mas não é que'],
  ],
  SS: [
    ['a person who is not acting', 'uma pessoa que não está agindo', true],
    [
      "It's like she's slowly dying",
      'é como se ela estivesse morrendo lentamente',
    ],

    [
      'everyone has the right to think so',
      'todos têm o direito de pensar assim',
      true,
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
    ['it was a lot of money', 'era muita grana'],
    ['at the time', 'na época', true],
    ['it was fun', 'isso era divertido'],

    ['I lost my car', 'eu perdi meu carro'],
    ['I had just woken up', 'eu tinha acabado de acordar'],
    ['she had just finished', 'ela tinha acabado de terminar'],

    ["they don't miss anything", 'eles não perde nada'],
    ['we only find out when it happens', 'a gente só descobre quando acontece'],
    ['they have to work it out', 'eles têm que resolver isso'],
    ['as far as i know', 'até onde eu saiba'],
    ['we did the right thing', 'nós fizemos a coisa certa'],
  ],
  JS: [
    ['and', 'e'],
    ['not to mention', 'sem falar que'],
    ['it depends if', 'depende se'],
  ],
}

const Memori = ({}: IProps) => {
  function generateSentence() {
    const last = _.sample(dict.SS)
    return [
      _.sample(dict.SS_Start),
      _.sample(dict.SS),
      !last?.[2] && _.sample(dict.JS),
      last,
    ]
  }

  const [sentence, setSentence] = useState(generateSentence())

  // var similarity = stringSimilarity.compareTwoStrings(
  //   'do you have any idia whats is it',
  //   'do you ave any ideia what is '
  // )

  const [showTranslate, setShowTranslate] = useState(true)

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
        <p>{sentence.map((ss: any) => ss?.[1]).join(' ')}</p>
        <p
          style={{
            opacity: showTranslate ? '1' : '0',
          }}
        >
          {sentence.map((ss: any) => ss?.[0]).join(' ')}
        </p>
      </div>
    </ContainerMemori>
  )
}

export default Memori
