import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
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
  {
    rawSentence: '{p+to_be} not sure {wq}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's"],
      },
      { id: 'wq', alternatives: ['why', 'when', 'how much'] },
    ],
  },
  {
    rawSentence: '{p} {verb} {noun} as well',
    replacements: [
      { id: 'verb', alternatives: ['love 💕', 'hate 😡'] },
      { id: 'noun', alternatives: ['cats 🐱', 'dogs 🐶'] },
      { id: 'p', alternatives: ['you', 'i', 'they'] },
    ],
  },
  {
    rawSentence: 'Why {p} Can {verb+} But {p2} {2verb+}',
    replacements: [
      { id: 'p', alternatives: ['you', 'i', 'they', 'he', 'she'] },
      { id: 'p2', alternatives: ['me', 'them', 'her', 'him', 'you'] },
      { id: 'verb+', alternatives: ['talk 👄', 'see 👀'] },
      { id: '2verb+', alternatives: ["can't", 'never thank'] },
    ],
  },
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
    rawSentence: '{p+to_be} {intensificador} {x} {mid} {complement}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's"],
      },
      { id: 'intensificador', alternatives: ['really', 'just', '_'] },
      { id: 'x', alternatives: ['did', "didn't", 'will', "won't", '_'] },
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
  {
    rawSentence:
      "{p} understand {intermediador} {p+to_be} {v+ing} but {p} can't agree",
    replacements: [
      {
        id: 'p',
        alternatives: ['i', 'you', 'we', 'they', 'he', 'she'],
      },
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's"],
      },
      { id: 'p2', alternatives: ['me', 'them', 'her', 'him', 'you'] },
      {
        id: 'intermediador',
        alternatives: ['everything', 'what', 'why'],
      },
      {
        id: 'v+ing',
        alternatives: ['saying', 'doing'],
      },
    ],
  },
]

const before = [
  'where',
  'because',
  'even with all the [...] …',
  'Well,',
  'Also',
  'What else do...',
  'Since when do…',
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
