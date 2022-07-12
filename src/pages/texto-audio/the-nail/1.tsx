import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/ciKMIprp1r9Sc8NXhGLMZs5wU6ga4Ut0',
  title: 'The Nail',
  img: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&h=200&dpr=1',
  description: 'part 1',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'A salesman had done good business',
      pt: 'Um vendedor tinha feito bons negócios',
      start: 0.039,
      end: 1.857,
    },

    {
      en: 'he had sold his products',
      pt: 'ele tinha vendido seus produtos',
      start: 2.01,
      end: 3.526,
    },

    {
      en: 'and he filled his money bags',
      pt: 'e ele encheu suas bolsas de dinheiro',
      start: 3.659,
      end: 5.19,
    },

    {
      en: 'with gold and silver',
      pt: 'com ouro e prata',
      start: 5.191,
      end: 6.502,
    },

    {
      en: 'Then he wanted to come home',
      pt: 'Em seguida ele queria ir pra casa',
      start: 7.394,
      end: 8.826,
    },

    {
      en: 'and be in his own house before nightfall',
      pt: 'e estar em sua própria casa antes anoitecer',
      start: 8.945,
      end: 11.096,
    },
    {
      en: 'So he put his trunk with the money on his horse',
      pt: 'Então ele colocou seu baú com o dinheiro em seu cavalo',
      start: 11.998,
      end: 14.058,
    },
    {
      en: 'and left',
      pt: 'e saiu',
      start: 14.174,
      end: 14.844,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
