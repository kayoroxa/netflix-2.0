import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

const bigData = [
  {
    rawSentence: '{p} {s/n} {v} every {time}',
    replacements: [
      {
        id: 'p',
        alternatives: [
          `(I)`,
          `(you)`,
          `(they)`,
          `(we)`,
          `my mom`,
          `he`,
          `she`,
          `people`,
          'many people',
        ],
      },

      {
        id: 'v',
        alternatives: ['love', 'cry', 'play', 'study', 'work', 'invent'],
      },
      {
        id: 'time',
        alternatives: ['time', 'moment', 'day'],
      },
      {
        id: 's/n',
        alternatives: ["(don't) / doesn't", '(do not) / does not', '_'],
      },
    ],
  },
  {
    rawSentence: '{cod} {p} {v} every {time}',
    replacements: [
      {
        id: 'p',
        alternatives: [
          `(I)`,
          `(you)`,
          `(they)`,
          `(we)`,
          `my mom`,
          `he`,
          `she`,
          `people`,
          'many people',
        ],
      },

      {
        id: 'v',
        alternatives: ['love', 'cry', 'play', 'study', 'work', 'invent'],
      },
      {
        id: 'time',
        alternatives: ['time', 'moment', 'day'],
      },
      {
        id: 'cod',
        alternatives: [
          '(do) / does',
          "(don't) / doesn't",
          '(do not) / does not',
        ],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} {s/n} {v+ing} every {time}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: [
          "i'm / i am",
          "he's / he is",
          "she's / she is",
          "it's / it is",
          "you're / you are",
          "we're / we are",
          "they're / they are",
        ],
      },
      {
        id: 'v+ing',
        alternatives: [
          'loving',
          'crying',
          'playing',
          'studying',
          'working',
          'inventing',
        ],
      },
      {
        id: 'time',
        alternatives: ['time', 'moment', 'day'],
      },
      {
        id: 's/n',
        alternatives: ['not', '_'],
      },
    ],
  },

  {
    rawSentence: '{p+to_be} {s/n} {v+ing} every {time}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: [
          'am i',
          'is he',
          'is she',
          'is it',
          'are you',
          'are we',
          'are they',
        ],
      },
      {
        id: 'v+ing',
        alternatives: [
          'loving',
          'crying',
          'playing',
          'studying',
          'working',
          'inventing',
        ],
      },
      {
        id: 'time',
        alternatives: ['time', 'moment', 'day'],
      },
      {
        id: 's/n',
        alternatives: ['not', '_'],
      },
    ],
  },

  // {
  //   rawSentence: '{p} {will} be able to {comp}',
  //   replacements: [
  //     {
  //       id: 'p',
  //       alternatives: [`I`, `My mon`, `you`, `he`, `she`, `we`, `they`, `it`],
  //     },
  //     {
  //       id: 'comp',
  //       alternatives: [`stop me`, 'do it right', 'do it fast', 'do it well'],
  //     },
  //     {
  //       id: 'will',
  //       alternatives: ['will', 'will not', "won't", '_'],
  //     },
  //   ],
  // },
]
//which is why it says
//but so far
//the traffic has always been terrible
//i've always been obsessed with animal behavior
//every once in a while

// const before = [
//   'where',
//   'as {strange} as it might sound',
//   "As far as l'm concerned",
//   'because',
//   'seems odd that',
//   'even with all the [...] …',
//   'Well,',
//   'while',
//   'Also',
//   'though',
//   'although (apesar)',
//   'sometimes',
//   'enjoy it now before',
//   'As long as  (enquanto)',
//   "I'm afraid …",
//   'It could be said that…',
//   'Actually',
//   'l realize',
//   'What I think is that',
//   'I think',
//   "Don't worry",
//   'But since (mas já que)',
//   'Ever since (desde que)',
//   "it's the first time",
//   'in other words',
//   'but when',
//   'What else do/does (O quê mais)',
//   'Since when do/does (Desde quando)',
// ]

// const after = [
//   "That's why I thought, ",
//   'right?',
//   'at first, but …',
//   'since … (since you got here) / since the moment I saw you',
// ]

export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)

  return (
    <div>
      <CreateSentences
        patternsInfo={{
          currentIndex: bigData.length - indexData,
          length: bigData.length,
        }}
        data={bigData[indexData]}
        onPrev={() =>
          setIndexData(prev => {
            if (prev + 1 >= bigData.length) {
              return 0
            }
            return prev + 1
          })
        }
        onNext={() =>
          setIndexData(prev => {
            if (prev - 1 < 0) {
              return bigData.length - 1
            }
            return prev - 1
          })
        }
        before={false}
        after={false}
      />
    </div>
  )
}
