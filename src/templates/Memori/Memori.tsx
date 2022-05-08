import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import { ContainerMemori } from './styles-memori'

interface IProps {}

const dict: any = {
  p: [
    ['i', 'eu'],
    ['you', 'você'],
    ['he', 'ele'],
    ['she', 'ela'],
    ['it', 'isso'],
    ['we', 'nós'],
    ['they', 'eles'],
    ['the other guy', 'os outros caras'],
    ['many people', 'muita gente'],
  ],
  complete: [
    //
    ['sorry to interrupt you', '🤭desculpa te interromper'],
    ['I am sorry!', '🤭desculpa!'],
    ['I get it!', 'eu entendi!'],
  ],

  antesDoQue: [
    ['but', 'mas'],
    ['however', 'porém'],
    ['even so', 'mesmo assim'],
  ], //'not to mention'],
  que: [
    ['it became clear', 'ficou claro que'],
    ['there comes a point in life', 'chega um ponto na vida que'],
    ['there is a concept', 'existe um conceito que'],
    ['many people think', '👥muita gente 🧠acha que'],
    ["Let's suppose that", '🧐vamos supor que'],
    ['that was the time', '🦕essa foi a época que'],
    ['who assures me that', '🖋quem me garante que'],
    ['it can be said that', 'pode ser dito que'],
    ["it's on the day", 'é no dia que'],
    ['the question is that', 'a questão é que'],
    ["it's not that", '⛔não é que'],
  ],
  completeDpsDoQue: [
    ['we are smarts', 'nós somos espertos'],

    ['technically you will do it', 'tecnicamente você vai fazer isso'],
    ['it was a lot of money', 'era muita grana'],
    ['it was fun', 'isso era divertido'],
    ['technically you will do it', 'tecnicamente você vai fazer isso'],
    ["I've tried over a thousand things", 'eu já tentei mais de mil coisas'],

    [
      'the crowd is focused on just selling',
      'a galera está focada em apenas vender',
    ],
    ['I lost my car', 'eu perdi meu carro'],
    ['we did the right thing', 'nós fizemos a coisa certa'],
  ],
  completeAntTime: [
    ['I had just woken up', 'eu tinha acabado de acordar🛏'],
    ['she had just finished', '👩ela tinha acabado de terminar✅'],
    ['we had just arrived', '👩‍👩‍👧‍👧nós tinhamos acabado de chegar🚙'],
    [
      'we only find out when it happens',
      '👩‍👩‍👧‍👧a gente só descobre quando acontece',
    ],
    ["you don't want to know anymore", 'você não quer MAIS saber'],
    ['it was basically one year studying', 'foi basicamente 1 ano estudando'],
    ['it was one year studying', 'foi 1 ano estudando'],
  ],
  incompleteTimeDpsDoQue: [
    ['at the time', 'na época'],
    ['in a 2 week period', 'num período de 2 semanas'],
    ['in the last 2 weeks', 'nas últimas duas semanas'],
  ],
  incompleteDpsDoQue: [
    //
    ['as far as I know', 'até onde eu sei'],
    ['as far as I can remember', 'até onde eu consigo lembrar'],
    ['you are sure that', 'você tem certeza que'],
  ],
  tempo: [["That's when", '🤔Foi quando']],
  others: [
    //

    ["it's all because", 'é tudo porque'],
  ],
  dpsOthers: [
    //
    ['it was a lot of money', 'era muita grana'],
    ['a person who is not acting', 'uma pessoa que não está agindo'],
    ['it is a matter of opinion', 'é uma questão de opinião', true],
  ],
}

const patterns = [
  // '{!complete} {!antesDoQue} {que} {completeDpsDoQue} {!incompleteTimeDpsDoQue}',
  // '{!complete} {!antesDoQue} {que} {incompleteTimeDpsDoQue} {completeDpsDoQue} ',
  // '{!complete} {antesDoQue} {completeDpsDoQue} {!incompleteTimeDpsDoQue}',
  '{!complete} {antesDoQue} {que} {!incompleteDpsDoQue} {completeAntTime}',
]

export default function Memori({}: IProps) {
  const [value, setValue] = useLocalStorage<{
    [key: string]: number
  }>('historic', {})

  function generateSentenceByPattern(pattern: string, random = false) {
    const keys = pattern
      .match(/(?<=\{).*?(?=\})/g)
      ?.filter(key => (key.includes('!') ? _.sample([true, false]) : true))

    const sentence = keys?.map(key => {
      const keyWithoutOptional = key.replace('!', '')

      if (!random && value) {
        const ordenado = Object.entries(value)
          .sort(([, a], [, b]) => a - b)
          .map(v => v[0])

        const onlyEnDictRandom = dict[keyWithoutOptional].map(
          (v: string[]) => v[0]
        )
        const findEn = ordenado.find(v => onlyEnDictRandom.includes(v))
        const findDict = dict[keyWithoutOptional].find(
          (v: string[]) => v[0] === findEn
        )
        // console.log(findDict)
        return findDict ? findDict : _.sample(dict[keyWithoutOptional])
      }

      return _.sample(dict[keyWithoutOptional])
    })
    return sentence
  }

  function generateSentenceByAllPatterns(patterns: string[]) {
    const pattern = _.sample(patterns) || ''
    const dictGot = generateSentenceByPattern(pattern)
    return dictGot
  }

  const [sentence, setSentence] = useState(
    generateSentenceByAllPatterns(patterns)
  )

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
        setSentence(generateSentenceByAllPatterns(patterns))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function decrease() {
    const newValue: any = { ...value }
    sentence
      ?.map((s: any) => s?.[0])
      ?.forEach((s: any) => {
        newValue[s] = newValue[s] ? newValue[s] - 1 : -1
      })

    setValue(newValue)
  }

  function increase() {
    const newValue: any = { ...value }
    sentence
      ?.map((s: any) => s?.[0])
      ?.forEach((s: any) => {
        newValue[s] = newValue[s] ? newValue[s] + 1 : 1
      })
    setValue(newValue)
  }

  useEffect(() => {
    setSentence(generateSentenceByAllPatterns(patterns))
  }, [value])

  function getColor(sentence: string) {
    if (!value) return
    const score = value[sentence]
    if (score > 4) return 'green'
    if (score > 2) return '#cdcd3c'
    if (score > 0) return 'orange'
    if (score <= 0) return 'red'
  }

  return (
    <ContainerMemori
    // onClick={() => setSentence(generateSentenceByAllPatterns(patterns))}
    >
      {/* <p>
        {sentence.map(ss => (
          <span>{ss?.[0]}</span>
        ))}
      </p> */}
      <div className="container">
        <p>
          {sentence
            ?.filter((v: any) => v?.[0])
            .map((ss: any) => (
              <span style={{ background: getColor(ss?.[0]) }}>{ss?.[1]}</span>
            ))}
        </p>
        <p
          style={{
            opacity: showTranslate ? '1' : '0',
          }}
        >
          {sentence
            ?.filter((v: any) => v?.[0])
            .map((ss: any) => (
              <span style={{ background: getColor(ss?.[0]) }}>{ss?.[0]}</span>
            ))}
        </p>
      </div>
      <div>
        <button onClick={() => decrease()}>NÃO SEI</button>
        <button onClick={() => increase()}>SEI</button>
      </div>
      <br />
      {value && (
        <table>
          {Object.keys(value).map((key: string) => (
            <tr>
              <td>{key}</td>
              <td>{value[key]}</td>
            </tr>
          ))}
        </table>
      )}
    </ContainerMemori>
  )
}
