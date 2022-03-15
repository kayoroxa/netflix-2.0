import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
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
    rawSentence: '{p+to_be} {intensificador} trying to {complement}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's"],
      },
      { id: 'intensificador', alternatives: ['really', 'just', '_'] },
      {
        id: 'complement',
        alternatives: ['understand', 'tell something', 'be the best'],
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
      />
    </div>
  )
}
