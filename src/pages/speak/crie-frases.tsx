import { useState } from 'react'
import CreateSentences from '../../templates/CreateSentences'

function person(id: string) {
  let alternatives = ['you', 'he', 'you guys', 'they', 'those people', "y'all"]

  if (id === 'p2')
    alternatives = [
      'me',
      'you',
      'her',
      'him',
      'us',
      'them',
      'us all',
      'all of us',
    ]
  if (id === 'code')
    alternatives = [
      'will',
      "won't",
      "don't",
      'would',
      "wouldn't",
      'can',
      'could',
    ]

  if (id === 'ancora') alternatives = ['which means', '_']

  if (id === 'aumentadores')
    alternatives = ['really', 'sure', 'literally', `suddenly`, '_']
  return {
    id,
    alternatives,
  }
}

function before() {
  return {
    id: 'before',
    alternatives: [
      'just to be clear',
      'seems odd that',
      'although', // (apesar)
      'But since', //(mas já que)
      "it's the first time",
      'in other words',
      'sometimes',
      'What I think is that',
      'As long as', //(enquanto)
      //"what's in it for you?", // qual é a sua
      '_',
    ],
  }
}

const bigData = [
  {
    rawSentence: '{before} {p} {have} {known} {whats} {to feel joy}',
    replacements: [
      before(),
      person('p'),
      {
        id: 'have',
        alternatives: [
          `have | has`,
          `have never | has never`,
          `haven't | hasn't`,
          `had`,
        ],
      },
      {
        id: 'known',
        alternatives: [
          `known`,
          `seen sunlight.`,
          `been exposed.`,
          `been thinking about`,
          `been wondering`,
        ],
      },
      {
        id: 'whats',
        alternatives: [`what it's like`, `what to do`],
      },
      {
        id: 'to feel joy',
        alternatives: [`to feel joy`, `to be happy`],
      },
    ],
  },
  {
    rawSentence: '{p} {aumentadores} {code} {w} {p2} {v} there {f_l}',
    replacements: [
      person('p'),
      person('p2'),
      person('aumentadores'),
      {
        id: 'f_l',
        alternatives: [`for life`, `forever`, `until tomorrow`, '_'],
      },
      {
        id: 'code',
        alternatives: [
          `don't | doesn't`,
          `do not | does not`,
          `didn't`,
          `did not`,
          `can't`,
          'may not',
          '_',
        ],
      },
      {
        id: 'w',
        alternatives: [`imagine`, `want`],
      },
      {
        id: 'v',
        alternatives: [
          `to go`,
          `to be`,
          `staying`,
          `to stay`,
          `getting sick`,
          `getting sad`,
        ],
      },
    ],
  },
  {
    rawSentence: '{w} {code+p} {r} do {p2} {f}',
    replacements: [
      person('p2'),

      {
        id: 'f',
        alternatives: ['a meal', 'a favor', 'some food'],
      },
      {
        id: 'w',
        alternatives: ['why', `I don't understand why`],
      },
      {
        id: 'code+p',
        alternatives: [
          `don't you`,
          `doesn't he`,
          `doesn't she`,
          `don't they`,
          `doesn't nobody`,
        ],
      },
      {
        id: 'r',
        alternatives: ['even', '_'],
      },
    ],
  },
  {
    rawSentence: '{w} the {only} {r} {action} {p2} {who}',
    replacements: [
      person('p2'),

      {
        id: 'who',
        alternatives: ['is this kid', 'is this random girl'],
      },
      {
        id: 'w',
        alternatives: ['how come', 'why'],
      },
      {
        id: 'only',
        alternatives: ['only person', 'only one'],
      },

      {
        id: 'r',
        alternatives: ['really', 'recently', 'who is literally', '_'],
      },
      {
        id: 'action',
        alternatives: ['talking to', 'looking at', 'helping'],
      },
    ],
  },
  {
    rawSentence: '{frase} {p} {cod+n} {r} {v} what {comp} {ing}',
    replacements: [
      person('p'),

      {
        id: 'frase',
        alternatives: [
          'i was sure',
          'i told you',
          'no one knew',
          'someone told me that',
          "i don't even know why",
        ],
      },
      {
        id: 'cod+n',
        alternatives: ["didn't", "don't | doesn't", "wouldn't"],
      },
      {
        id: 'v',
        alternatives: ['know', 'understand', 'notice', 'remember', 'find out'],
      },

      {
        id: 'r',
        alternatives: ['really', 'recently', 'literally', '_'],
      },
      {
        id: 'comp',
        alternatives: ['she was', 'they were', 'you were', 'we were'],
      },
      {
        id: 'ing',
        alternatives: ['doing', 'thinking', 'talking'],
      },
    ],
  },
  {
    rawSentence: '{ps} {have} {r} {v3} {a} about {c}',
    replacements: [
      {
        id: 'ps',
        alternatives: [
          'you and he',
          'he and she',
          'mom and dad',
          'both individuals',
          'they',
          'the guys',
          'people',
          'society',
        ],
      },

      {
        id: 'have',
        alternatives: ['have', 'had'],
      },
      {
        id: 'v3',
        alternatives: [
          'heard',
          'known',
          'been talking',
          'spoken',
          'been wondering',
          'been asking themselves',
          'been thinking',
        ],
      },

      {
        id: 'r',
        alternatives: ['really', 'recently', 'sure', 'literally', '_'],
      },
      {
        id: 'a',
        alternatives: [
          'all',
          'everything',
          'a few things',
          'of a positive point',
          '_',
        ],
      },
      {
        id: 'c',
        alternatives: [
          'it',
          'themselves',
          'the situation',
          'what happened',
          'these problems',
        ],
      },
    ],
  },
  {
    rawSentence: '{w} {2-pessoa} {p+to_be} {r} {c}',
    replacements: [
      {
        id: 'p+to_be',
        alternatives: [
          "i'm",
          "it's",
          "you're",
          "you're both",
          "we're",
          "she's",
          "he's",
          "they're",
        ],
      },

      {
        id: 'w',
        alternatives: ['no problem', "that's what", 'what matters is that'],
      },
      {
        id: '2-pessoa',
        alternatives: ['they think', 'it looks like', '_'],
      },
      {
        id: 'k',
        alternatives: ['kind of', '_'],
      },
      {
        id: 'r',
        alternatives: ['really', 'already', '_'],
      },
      {
        id: 'c',
        alternatives: ['looking for', 'there for', 'doing', 'going somewhere'],
      },
    ],
  },
  {
    rawSentence: '{p} {comp} {pq} {p+to_be} about to {do}',
    replacements: [
      {
        id: 'pq',
        alternatives: ['just because', 'because'],
      },
      {
        id: 'p',
        alternatives: ['you', 'he', 'she', 'we', 'they', 'my dad'],
      },
      {
        id: 'comp',
        alternatives: [
          'do it | does it',
          'did it',
          'had to do it',
          'have to do it | has to do it',
          'will do it',
          'would do it',
          'should do it',
          'are here | is here',
          'were here | was here',
        ],
      },
      {
        id: 'p+to_be',
        alternatives: [
          "i'm",
          // "it's",
          "you're",
          "we're",
          "she's",
          "he's",
          "they're",
          'the players are',
        ],
      },
      {
        id: 'do',
        alternatives: [
          'break a barrier',
          'make a mistake',
          'succeed',
          'start',
          'lose',
        ],
      },
    ],
  },
  {
    rawSentence: 'What does that {c1} {c2}?',
    // rawSentence: 'What does that ({c1a} {c1b} | {c2})?', column1-2elem column2-1elem ( numElemInLine | numElemInLine) numero de columns
    replacements: [
      {
        id: 'p',
        alternatives: [
          `I`,
          `you`,
          `he`,
          `she`,
          `we`,
          `they`,
          `people`,
          'many people',
        ],
      },
      {
        id: 'c1',
        alternatives: ['have to do with', 'mean?', 'exactly mean?'],
      },
      {
        id: 'c2',
        alternatives: [
          'solving the problem',
          'me',
          'making our civilization work',
        ],
      },
      {
        id: 'causa',
        alternatives: ['ability', 'creativity', 'capacity'],
      },
    ],
  },

  {
    rawSentence:
      "it's not {because} lack of {causa} but for lack of commitment",
    replacements: [
      {
        id: 'p',
        alternatives: [
          `I`,
          `you`,
          `he`,
          `she`,
          `we`,
          `they`,
          `people`,
          'many people',
        ],
      },
      {
        id: 's/n',
        alternatives: ['not', '_'],
      },
      {
        id: 'because',
        alternatives: ['because of a', 'for'],
      },
      {
        id: 'causa',
        alternatives: ['ability', 'creativity', 'capacity'],
      },
    ],
  },
  {
    rawSentence: 'this is {before} {adj} reason {p} {after}',
    replacements: [
      {
        id: 'p',
        alternatives: [
          `I`,
          `you`,
          `he`,
          `she`,
          `we`,
          `they`,
          `people`,
          'many people',
        ],
      },
      {
        id: 'before',
        alternatives: ['one of the', 'another', 'the'],
      },
      {
        id: 'adj',
        alternatives: ['big', 'biggest', 'best', 'same', '_'],
      },
      {
        id: 'after',
        alternatives: ['end up giving up', 'do it now', 'enjoy it'],
      },
    ],
  },
  {
    rawSentence: '{p} will {time} be able to {comp}',
    replacements: [
      {
        id: 'p',
        alternatives: [`I`, `My mon`, `you`, `he`, `she`, `we`, `they`, `it`],
      },
      {
        id: 'comp',
        alternatives: [`stop me`, 'do it right', 'do it fast', 'do it well'],
      },
      {
        id: 'time',
        alternatives: ['not', 'always', 'never', '_'],
      },
    ],
  },
  {
    rawSentence: '{ancora} {p} {have} {time} {v3} {m}',
    replacements: [
      person('ancora'),
      {
        id: 'm',
        alternatives: [`more`, `_`],
      },
      {
        id: 'p',
        alternatives: [
          `I`,
          `My mon`,
          `you`,
          `he`,
          `she`,
          `we`,
          `they`,
          'someone else',
        ],
      },
      {
        id: 'have',
        alternatives: [
          `have | has`,
          `'ve | 's`,
          `could've`,
          `could have`,
          `should've`,
          `should have`,
        ],
      },
      {
        id: 'time',
        alternatives: ['always', 'never', 'often', '_'],
      },
      {
        id: 'v3',
        alternatives: ['been obsessed', 'done', 'talked', 'here'],
      },
    ],
  },
  {
    rawSentence: 'what {code} {not} {cod+p} {w/h} {adj} {comp}?',
    replacements: [
      {
        id: 'not',
        alternatives: ['not', '_'],
      },
      {
        id: 'w/h',
        alternatives: [
          'want to do',
          'have to do',
          'intend to do',
          'do',
          // 'mean',
        ],
      },
      {
        id: 'adj',
        alternatives: [
          'to fool',
          'to show',
          'to impress',
          'to prove',
          // 'mean',
        ],
      },
      {
        id: 'cod+p',
        alternatives: ['we', 'we all', 'you', 'they', 'she', 'i', 'he', 'Jack'],
      },
      {
        id: 'code',
        alternatives: ['will', 'would', 'should', 'could', 'did'],
      },
      {
        id: 'comp',
        alternatives: ['you', 'me', 'him', 'these things', 'our boss'], //'by that'
      },
    ],
  },
  {
    rawSentence: 'if {p+to_be} trying to {adj} that {p} {what}',
    replacements: [
      {
        id: 'adj',
        alternatives: ['pretend', 'show', 'impress', 'prove'],
      },
      {
        id: 'p',
        alternatives: ['we', 'we all', 'you', 'they', 'she', 'i', 'he'],
      },
      {
        id: 'p+to_be',
        alternatives: [
          "i'm",
          "it's",
          "you're",
          "we're",
          "she's",
          "he's",
          "they're",
        ],
      },
      {
        id: 'what',
        alternatives: ['speak languages', 'play piano', 'recommend this'],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} {not} {adj} {supposed to} {comp}',
    replacements: [
      // before(),
      {
        id: 'adj',
        alternatives: [
          //
          'even',
          'still',
          // '_',
        ],
      },
      {
        id: 'p+to_be',
        alternatives: [
          "i'm",
          "you're",
          'those guys are',
          "we're",
          "she's",
          "he's",
          "they're",
        ],
      },
      {
        id: 'comp',
        alternatives: [
          'be here',
          'be there',
          'be able to do that',
          'be able to understand',
          'be with him',
          'make it',
          'get home',
          'stop',
        ],
      },
      {
        id: 'supposed to',
        alternatives: [
          //
          'going to',
          // 'supposed to',
          'gonna',
        ],
      },
      {
        id: 'not',
        alternatives: [
          //
          'not',
          '_',
        ],
      },
    ],
  },
  {
    rawSentence: 'when {p} get asked {question}',
    replacements: [
      {
        id: 'question',
        alternatives: ['if we could live', 'about it'],
      },
      {
        id: 'p',
        alternatives: ['we', 'we all', 'you', 'they', 'she', 'i', 'he'],
      },
    ],
  },
  {
    rawSentence: '{p} {think} there is no {excuse} for {p} {complement}',
    replacements: [
      {
        id: 'complement',
        alternatives: ['do it', 'did it'],
      },
      {
        id: 'excuse',
        alternatives: ['excuse', 'reason', 'why'],
      },
      {
        id: 'think',
        alternatives: ['think(s)', 'believe(s)', 'thought'],
      },
      {
        id: 'adj',
        alternatives: ['sickened', 'tall', 'curious', 'happy'],
      },
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's", "they're"],
      },
      {
        id: 'p',
        alternatives: ['we', 'We all', 'you', 'they', 'she', 'i', 'he', 'cat'],
      },
    ],
  },
  {
    rawSentence: '{p+to_be} as {adj} as {p}',
    replacements: [
      {
        id: 'adj',
        alternatives: ['sickened', 'tall', 'curious', 'happy'],
      },
      {
        id: 'p+to_be',
        alternatives: ["i'm", "you're", "we're", "she's", "he's", "they're"],
      },
      {
        id: 'p',
        alternatives: ['we', 'We all', 'you', 'they', 'she', 'i', 'he', 'cat'],
      },
    ],
  },
  {
    rawSentence: '{p} {v} that the way {p} {verb} {complement} is all wrong',
    replacements: [
      {
        id: 'verb',
        alternatives: ['deal with', 'think about'],
      },
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
    rawSentence: '{p} {tamanho} {g} {intensidade} {sentimento}',
    replacements: [
      {
        id: 'g',
        alternatives: ['get', 'got'],
      },
      {
        id: 'tamanho',
        alternatives: ['still', 'really', 'almost', 'probably', 'mostly'],
      },
      {
        id: 'p',
        alternatives: ['my dog', 'we', 'mom', 'you', 'they', 'she', 'i', 'he'],
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
    rawSentence: "it's where {p} {x} {c} {verb} ",
    replacements: [
      {
        id: 'x',
        alternatives: ['mostly', 'usually', '_'],
      },
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
    rawSentence: '{p+to_be} {want} to {comp}',
    replacements: [
      {
        id: 'want',
        alternatives: [
          'discouraged',
          'really excited',
          'more than capable',
          'unable',
        ],
      },
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
        alternatives: [
          'all my course',
          'a code',
          'a message',
          'an order',
          'a letter',
        ],
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
    rawSentence: '{p} {have} {ideia} {complement}',
    replacements: [
      {
        id: 'ideia',
        alternatives: ['no ideia', 'ideia'],
      },
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
        alternatives: [
          "i'm",
          "you're",
          "we're",
          "she's",
          "he's",
          'somebody is',
          'who is',
          'The other one is',
        ],
      },
      { id: 'intensificador', alternatives: ['really', 'just', '_'] },
      // { id: 'x', alternatives: ['did', "didn't", 'will', "won't", '_'] },
      {
        id: 'mid',
        alternatives: [
          'trying to',
          'being forced to',
          'needing to',
          'happy to',
          // 'want to',
          // 'should be having to',
          // 'might be having to',
        ],
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

// const before = [
//   'where',
//   'as {strange} as it might sound',
//   "As far as l'm concerned",
//   'because',

//   'even with all the [...] …',
//   'Well,',
//   'while',
//   'Also',
//   'though',

//   'seems odd that',
//   'although (apesar)',
//   'But since (mas já que)',
//   'Ever since (desde que)',
//   "it's the first time",
//   'in other words',
//   'sometimes',
//   'What I think is that',
//   'As long as  (enquanto)',

//   'enjoy it now before',
//   "I'm afraid …",
//   'It could be said that…',
//   'Actually',
//   'l realize',
//   'I think',
//   "Don't worry",

//   'but when',
//   'What else do/does (O quê mais)',
//   'Since when do/does (Desde quando)',
// ]

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
        after={after}
      />
    </div>
  )
}
