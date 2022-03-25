import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
  {
    rawSentence:
      '{p} {v} that the way {p} think about {complement} is all wrong',
    replacements: [
      {
        id: 'v',
        alternatives: ['believe', 'learned', 'know', 'show', 'can say'],
      },
      {
        id: 'p',
        alternatives: ['we', 'We all', 'you', 'they', 'she', 'i', 'he'],
      },
      {
        id: 'complement',
        alternatives: ['success', 'failure', 'happiness', 'sadness'],
      },
    ],
  },
  {
    rawSentence: '{p} {tamanho} get {intensidade} {sentimento}',
    replacements: [
      {
        id: 'tamanho',
        alternatives: ['still', 'really', 'almost'],
      },
      {
        id: 'p',
        alternatives: ['we', 'you', 'they', 'she', 'i', 'he'],
      },
      {
        id: 'intensidade',
        alternatives: ['a little bit', 'very', 'so', '_'],
      },
      {
        id: 'sentimento',
        alternatives: ['nervous', 'anxious', 'sad', 'worried'],
      },
    ],
  },
  {
    rawSentence: "it's where {p} {c} {verb} ",
    replacements: [
      {
        id: 'c',
        alternatives: ['can', 'could', 'would', 'should', 'will', 'did'],
      },
      {
        id: 'p',
        alternatives: ['we', 'you', 'they', 'she', 'i', 'he'],
      },
      {
        id: 'verb',
        alternatives: ['put a lot of things', 'go', 'be'],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} really excited to {comp}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's", "they're"],
      },
      {
        id: 'comp',
        alternatives: ['show', 'see that', 'watch that', 'try', 'be here'],
      },
    ],
  },
  {
    rawSentence: '{p} {code} {x} {comp}',
    replacements: [
      { id: 'x', alternatives: ['receive', 'need', 'have'] },
      {
        id: 'comp',
        alternatives: ['all my course', 'a code', 'a message'],
      },
      {
        id: 'p',
        alternatives: ['we', 'you', 'they', 'she', 'i', 'he'],
      },
      {
        id: 'code',
        alternatives: [
          'will',
          "won't",
          "don't",
          'would',
          "wouldn't",
          'can',
          'could',
        ],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} {adj} {comp}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: [
          "i'm",
          "you're",
          "we're",
          "she's",
          "he's",
          "they're",
          'Our parents are',
          'My partner and I are',
          // "it's◽",
          // 'today was◽',
        ],
      },
      {
        id: 'adj',
        alternatives: [
          'very',
          'just',
          'really',
          'just really',
          '_',
          // 'hard',
          // 'complicated◽',
          // 'easy◽'
        ],
      },
      {
        id: 'comp',
        alternatives: [
          'late',
          'sorry about this',
          'upset',
          'close',
          'happy',
          'busy',
          'angry',
          'persuasive',
          'looking forward',
          // 'unnecessary◽',
          // 'story◽',
        ],
      },
    ],
  },
  {
    rawSentence: 'What {algo} {do + p} {complemento}?',
    replacements: [
      {
        id: 'algo',
        alternatives: [
          'sport',
          'music',
          'movie',
          'book',
          'game',
          'food',
          'drink',
        ],
      },
      {
        id: 'do + p',
        alternatives: [
          'do i',
          'do you',
          'do we',
          'do they',
          'does he',
          'does she',
        ],
      },
      {
        id: 'complemento',
        alternatives: [
          'like',
          'love',
          'hate',
          'want',
          'need',
          'want to',
          'need to',
        ],
      },
    ],
  },
  // {
  //   rawSentence: '{p+to_be} not sure {wq}',
  //   replacements: [
  //     {
  //       id: 'p+to_be',
  //       alternatives: ["i'm", "you're", "we're", "she's", "he's"],
  //     },
  //     { id: 'wq', alternatives: ['why', 'when', 'how much'] },
  //   ],
  // },
  // {
  //   rawSentence: '{p} {verb} {noun} as well',
  //   replacements: [
  //     { id: 'verb', alternatives: ['love 💕', 'hate 😡'] },
  //     { id: 'noun', alternatives: ['cats 🐱', 'dogs 🐶'] },
  //     { id: 'p', alternatives: ['you', 'i', 'they'] },
  //   ],
  // },
  // {
  //   rawSentence: 'Why {p} Can {verb+} But {p2} {2verb+}',
  //   replacements: [
  //     { id: 'p', alternatives: ['you', 'i', 'they', 'he', 'she'] },
  //     { id: 'p2', alternatives: ['i', 'they', 'she', 'he', 'you'] },
  //     { id: 'verb+', alternatives: ['talk 👄', 'see 👀'] },
  //     { id: '2verb+', alternatives: ["can't", 'never thank'] },
  //   ],
  // },
  {
    rawSentence: '{p} {have} no ideia {complement}',
    replacements: [
      { id: 'p', alternatives: ['i', 'you', 'we', 'they'] },
      { id: 'have', alternatives: ['have', 'had', 'really have', "'ve"] },
      {
        id: 'complement',
        alternatives: [
          'what to do',
          'how long to wait',
          'how much it means',
          'it was so complicated',
        ],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} {intensificador} {mid} {complement}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's"],
      },
      { id: 'intensificador', alternatives: ['really', 'just', '_'] },
      // { id: 'x', alternatives: ['did', "didn't", 'will', "won't", '_'] },
      {
        id: 'mid',
        alternatives: ['trying to', 'want to', 'need to'],
      },
      {
        id: 'complement',
        alternatives: [
          'understand',
          'tell something',
          'be the best',
          'please',
          'have fun',
        ],
      },
    ],
  },
  // {
  //   rawSentence:
  //     "{p} {*} {intermediador} {p+to_be} {v+ing} but {p} can't agree",
  //   replacements: [
  //     {
  //       id: '*',
  //       alternatives: ['understand', 'know', 'remember', 'appreciate'],
  //     },
  //     {
  //       id: 'p',
  //       alternatives: ['i', 'you', 'we', 'they', 'he', 'she'],
  //     },
  //     {
  //       id: 'p+to_be',
  //       alternatives: ["i'm", "you're", "we're", "she's", "he's"],
  //     },
  //     { id: 'p2', alternatives: ['me', 'them', 'her', 'him', 'you'] },
  //     {
  //       id: 'intermediador',
  //       alternatives: ['everything', 'what', 'why'],
  //     },
  //     {
  //       id: 'v+ing',
  //       alternatives: ['saying', 'doing'],
  //     },
  //   ],
  // },
]
//which is why it says
//but so far
//the traffic has always been terrible
//i've always been obsessed with animal behavior
//every once in a while

const before = [
  'where',
  'because',
  'even with all the [...] …',
  'Well,',
  'while',
  'Also',
  'sometimes',
  'As long as  (enquanto)',
  "I'm afraid …",
  'It could be said that…',
  'Actually',
  'l realize',
  'What I think is that',
  'I think',
  "Don't worry",
  'But since (mas já que)',
  'Ever since (desde que)',
  "it's the first time",
  'in other words',
  'but when',
  'What else do...',
  'Since when do…',
]

const after = [
  "That's why I thought, ",
  'right?',
  'at first, but …',
  'since … (since you got here) / since the moment I saw you',
]

export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)

  return (
    <div>
      <CreateSentences
        data={bigData[indexData]}
        onNext={() =>
          setIndexData(prev => {
            if (prev + 1 >= bigData.length) {
              return 0
            }
            return prev + 1
          })
        }
        before={before}
        after={after}
      />
    </div>
  )
}
