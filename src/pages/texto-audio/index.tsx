import TextoComAudio from '../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/PYBCj1LKR5X2lU4wtotNtRiWNeTxfCHa',
  title: 'the nail',
  description: 'part 1',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'A salesman had done good business',
      pt: 'Um vendedor tinha feito um bom negócio',
      start: 1.11,
      end: 2.912,
    },
    {
      en: 'he had sold his products',
      pt: 'ele vendeu seus produtos',
      start: 3.102,
      end: 4.534,
    },
    {
      en: 'and he filled his money bags with gold and silver',
      pt: 'e ele encheu seus sacos de dinheiro com ouro e prata',
      start: 4.749,
      end: 7.592,
    },
    {
      en: 'Then he wanted to come home',
      pt: 'Então ele queria voltar para casa',
      start: 8.449,
      end: 9.955,
    },
    {
      en: 'and be in his own house before nightfall',
      pt: 'e estar em sua própria casa antes do anoitecer',
      start: 10.034,
      end: 12.169,
    },
    {
      en: 'So he put his trunk with the money on his horse, and left.',
      pt: 'Então ele colocou o baú com o dinheiro no cavalo e foi embora.',
      start: 13.038,
      end: 16.02,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
