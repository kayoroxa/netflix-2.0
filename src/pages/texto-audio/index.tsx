import TextoComAudio from '../../templates/TextoComAudio'

const text = {
  audioUrl: '13lzvWcztjY',
  title: 'the nail',
  description: 'part 1',
  isOnYouTube: true,
  lyrics: [
    {
      en: 'A salesman had done good business',
      pt: 'Um vendedor tinha feito um bom negócio',
      start: 0,
      end: 1821,
    },
    {
      en: 'he had sold his products',
      pt: 'ele vendeu seus produtos',
      start: 1921,
      end: 3444,
    },
    {
      en: 'and he filled his money bags with gold and silver',
      pt: 'e ele encheu seus sacos de dinheiro com ouro e prata',
      start: 3445,
      end: 6422,
    },
    {
      en: 'Then he wanted to come home',
      pt: 'Então ele queria voltar para casa',
      start: 7316,
      end: 8769,
    },
    {
      en: 'and be in his own house before nightfall',
      pt: 'e estar em sua própria casa antes do anoitecer',
      start: 8770,
      end: 11015,
    },
    {
      en: 'So he put his trunk with the money on his horse, and left.',
      pt: 'Então ele colocou o baú com o dinheiro no cavalo e foi embora.',
      start: 11016,
      end: 14817,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
