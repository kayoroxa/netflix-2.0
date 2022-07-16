import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/ciKMIprp1r9Sc8NXhGLMZs5wU6ga4Ut0',
  title: 'The Nail',
  img: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&h=200&dpr=1',
  description: 'part 4',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'He left for home',
      pt: 'Ele foi para casa',
      start: 51.957,
      end: 52.903,
    },
    {
      en: 'but soon the horse began to limp',
      pt: 'mas logo o cavalo começou a mancar',
      start: 53.047,
      end: 54.6,
    },
    {
      en: "and it didn't take long until he couldn't walk anymore",
      pt: 'e não demorou muito até que ele não podia mais andar',
      start: 55.458,
      end: 58.075,
    },

    {
      en: 'The salesman was forced to take the trunk',
      pt: 'O vendedor foi forçado pegar o baú',
      start: 58.915,
      end: 60.876,
    },
    {
      en: 'and without help put it on his back',
      pt: 'e sem ajuda colocar nas suas costas',
      start: 60.957,
      end: 62.881,
    },
    {
      en: 'and go home on foot for about hours',
      pt: 'e ir para casa a pé por cerca de horas',
      start: 62.881,
      end: 65.035,
    },
    {
      en: 'And there he only arrived very late at night',
      pt: 'E lá ele só chegou bem tarde da noite.',
      start: 65.853,
      end: 68.185,
    },
    {
      en: 'And that unlucky nail',
      pt: 'E esse prego do azar"',
      start: 69.069,
      end: 70.267,
    },
    {
      en: 'said he to himself',
      pt: 'disse para si mesmo',
      start: 70.363,
      end: 71.432,
    },
    {
      en: 'has caused all this disaster.',
      pt: 'tem causado todo esse desastre.',
      start: 71.548,
      end: 73.285,
    },
    {
      en: 'Hurry up slowly.',
      pt: 'Se apresse lentamente.',
      start: 74.13,
      end: 75.205,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
