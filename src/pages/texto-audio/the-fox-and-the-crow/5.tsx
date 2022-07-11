import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/2T6EXCQ8OaUvvA9kXGsue2y9lR00c1GI',
  title: 'The Fox & the Crow',
  img: 'https://images.pexels.com/photos/6889088/pexels-photo-6889088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'part 5',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'So she opened her beak wide to utter her loudest caw',
      pt: 'Então ela abriu bem o bico para proferir seu grasnido mais alto',
      start: 73.783,
      end: 76.375,
    },
    {
      en: 'and down fell the cheese',
      pt: 'e caiu o queijo',
      start: 76.52,
      end: 77.699,
    },
    {
      en: "straight into the Fox's open mouth.",
      pt: 'direto na boca aberta da Raposa.',
      start: 77.702,
      end: 79.536,
    },
    {
      en: '"Thank you," said Master Fox sweetly',
      pt: 'Obrigado", disse Mestre Fox docemente',
      start: 80.368,
      end: 82.61,
    },
    {
      en: 'as he walked off.',
      pt: 'enquanto ele se afastava.',
      start: 82.715,
      end: 83.714,
    },
    {
      en: 'you have an amazing voice for sure.',
      pt: 'você tem uma voz incrível com certeza.',
      start: 84.532,
      end: 86.498,
    },
    {
      en: 'But where is your intelligence?',
      pt: 'Mas onde está sua inteligência?',
      start: 87.336,
      end: 88.951,
    },
    {
      en: 'The flatterer lives',
      pt: 'O bajulador vive',
      start: 89.806,
      end: 90.743,
    },
    {
      en: 'at the expense of those',
      pt: 'à custa daqueles',
      start: 90.744,
      end: 91.701,
    },
    {
      en: 'who will listen to him',
      pt: 'que vão ouvir ele',
      start: 91.701,
      end: 92.697,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
