import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/2T6EXCQ8OaUvvA9kXGsue2y9lR00c1GI',
  title: 'The Fox & the Crow',
  img: 'https://images.pexels.com/photos/6889088/pexels-photo-6889088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'part 3',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'But she kept her beak tightly closed on the cheese',
      pt: 'Mas ela manteve o bico bem fechado no queijo',
      start: 38.303,
      end: 40.788,
    },
    {
      en: 'and did not return his greeting',
      pt: 'e não retribuiu o cumprimento dele',
      start: 40.848,
      end: 42.223,
    },
    {
      en: '"What a charming creature she is!" said the Fox.',
      pt: '"Que criatura encantadora ela é!" disse a Raposa.',
      start: 43.142,
      end: 45.828,
    },
    {
      en: 'How her feathers shine!',
      pt: 'Como suas penas brilham!',
      start: 46.757,
      end: 47.972,
    },
    {
      en: 'What a beautiful form and what splendid wings!',
      pt: 'Que forma linda e que asas esplêndidas!',
      start: 48.869,
      end: 51.728,
    },
    {
      en: 'Such a wonderful Bird',
      pt: 'Um pássaro tão maravilhoso',
      start: 52.638,
      end: 53.887,
    },
    {
      en: 'should have a very lovely voice',
      pt: 'deve ter uma voz muito adorável',
      start: 53.936,
      end: 55.479,
    },
    {
      en: 'since everything else about her is so perfect.',
      pt: 'já que tudo sobre ela é tão perfeito.',
      start: 55.59,
      end: 58.075,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
