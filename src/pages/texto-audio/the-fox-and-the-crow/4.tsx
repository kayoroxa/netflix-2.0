import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/2T6EXCQ8OaUvvA9kXGsue2y9lR00c1GI',
  title: 'The Fox & the Crow',
  img: 'https://images.pexels.com/photos/6889088/pexels-photo-6889088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'part 4',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'Could you sing just one song?',
      pt: 'Você poderia cantar apenas uma música?',
      start: 58.919,
      end: 60.468,
    },
    {
      en: 'I know I should hail her Queen of Birds."',
      pt: 'Eu sei, Eu deveria saudá-la Rainha dos Pássaros."',
      start: 61.332,
      end: 63.387,
    },
    {
      en: 'Listening to these beautiful words',
      pt: 'Ouvindo estas bonitas palavras',
      start: 64.213,
      end: 66.006,
    },
    {
      en: 'The Crow forgot all her suspicions, and also her breakfast.',
      pt: 'O Corvo esqueceu todas as suas suspeitas, e também seu café da manhã.',
      start: 66.102,
      end: 69.684,
    },
    {
      en: 'She really wanted to be called Queen of Birds.',
      pt: 'Ela realmente queria ser chamada de Rainha dos Pássaros.',
      start: 70.513,
      end: 72.942,
    },
    
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
