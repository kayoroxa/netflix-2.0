import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/ciKMIprp1r9Sc8NXhGLMZs5wU6ga4Ut0',
  title: 'The Nail',
  img: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&h=200&dpr=1',
  description: 'part 3',
  isOnYouTube: false,
  lyrics: [
    { en: 'In the afternoon,', pt: 'Na tarde', start: 33.686, end: 34.707 },
    {
      en: 'after he fed the horse',
      pt: 'depois que ele alimentou o cavalo',
      start: 34.789,
      end: 36.062,
    },
    {
      en: 'the stable-boy went into the room and said:',
      pt: 'o cavalariço entrou no quarto e disse:',
      start: 36.212,
      end: 38.316,
    },
    {
      en: 'Sir, a shoe is missing',
      pt: 'Senhor, um sapato está faltando',
      start: 38.436,
      end: 40.022,
    },
    {
      en: "from your horse's left hind foot.",
      pt: 'no “pé” esquerdo traseiro do seu cavalo',
      start: 40.022,
      end: 41.657,
    },
    {
      en: 'Should i fix it?',
      pt: 'Eu deveria consertar isso?',
      start: 42.586,
      end: 43.477,
    },
    {
      en: '"No problem," answered the man',
      pt: '"Sem problemas", respondeu o homem',
      start: 44.324,
      end: 46.13,
    },
    {
      en: 'The horse can very well hold out for a few miles left',
      pt: 'O cavalo pode muito bem aguentar por alguns quilômetros restantes',
      start: 46.232,
      end: 49.211,
    },
    {
      en: "I'm in a hurry.",
      pt: 'Eu estou com pressa."',
      start: 50.168,
      end: 51.034,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
