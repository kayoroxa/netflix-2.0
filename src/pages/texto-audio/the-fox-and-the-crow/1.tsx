import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/2T6EXCQ8OaUvvA9kXGsue2y9lR00c1GI',
  title: 'The Fox & the Crow',
  img: 'https://images.pexels.com/photos/6889088/pexels-photo-6889088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'part 1',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'One bright morning',
      pt: 'Em uma manhã clara',
      start: 0,
      end: 0.975,
    },
    {
      en: 'while the fox walked through the forest',
      pt: 'enquanto a raposa caminhava pela floresta',
      start: 0.976,
      end: 2.673,
    },
    {
      en: 'in search of a bite to eat',
      pt: 'em busca de algo para comer',
      start: 2.675,
      end: 4.042,
    },
    {
      en: 'He saw a Crow on the limb of a tree overhead',
      pt: 'Ele viu um corvo no galho de uma árvore acima',
      start: 4.136,
      end: 6.614,
    },
    {
      en: 'This was by no means',
      pt: 'Este não foi de forma alguma',
      start: 7.382,
      end: 8.475,
    },
    {
      en: 'the first Crow the Fox had ever seen',
      pt: 'o primeiro Corvo que a Raposa já tinha visto',
      start: 8.479,
      end: 10.631,
    },
    {
      en: 'What caught his attention this time',
      pt: 'O que chamou sua atenção dessa vez',
      start: 11.504,
      end: 13.028,
    },
    {
      en: 'and made him stop for a second look',
      pt: 'e o fez parar para dar uma segunda olhada',
      start: 13.029,
      end: 14.721,
    },
    {
      en: 'was that the lucky Crow held a bit of cheese in her beak',
      pt: 'foi que a sortuda Corvo segurava um pouco de queijo no bico dela',
      start: 14.886,
      end: 17.513,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
