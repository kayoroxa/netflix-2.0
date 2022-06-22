import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/2T6EXCQ8OaUvvA9kXGsue2y9lR00c1GI',
  title: 'The Fox & the Crow',
  img: 'https://images.pexels.com/photos/6889088/pexels-photo-6889088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'part 2',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'No need to search any farther," thought sly Fox',
      pt: 'Não há necessidade de procurar algo mais longe”, pensou o astuta raposa',
      start: 18.401,
      end: 20.991,
    },
    {
      en: 'Here is a delicious meal for my breakfast',
      pt: 'Aqui está uma refeição deliciosa para o meu café da manhã',
      start: 21.944,
      end: 24.351,
    },
    {
      en: 'He trotted to the foot of the tree',
      pt: 'Ele trotou para o pé da árvore',
      start: 25.249,
      end: 26.759,
    },
    {
      en: 'in which the Crow was sitting',
      pt: 'em que o Corvo estava sentado',
      start: 26.805,
      end: 28.089,
    },
    {
      en: 'and looking up admiringly',
      pt: 'e olhando para cima com admiração',
      start: 28.223,
      end: 29.503,
    },
    {
      en: 'he screamed, "Good-morning, beautiful creature!',
      pt: 'ele gritou: "Bom dia, bela criatura!',
      start: 29.639,
      end: 32.343,
    },
    {
      en: 'The Crow, with its head cocked to one side',
      pt: 'O Corvo, com sua cabeça inclinada para um lado',
      start: 33.227,
      end: 35.666,
    },
    {
      en: 'watched the Fox suspiciously',
      pt: 'observava a Raposa com desconfiança',
      start: 35.784,
      end: 37.445,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
