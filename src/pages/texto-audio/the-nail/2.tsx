import TextoComAudio from '../../../templates/TextoComAudio'

const text = {
  audioUrl: 'https://audio.jukehost.co.uk/ciKMIprp1r9Sc8NXhGLMZs5wU6ga4Ut0',
  title: 'The Nail',
  img: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&h=200&dpr=1',
  description: 'part 2',
  isOnYouTube: false,
  lyrics: [
    {
      en: 'At noon he rested in a town,',
      pt: 'Ao meio-dia ele descansou em uma cidade,',
      start: 15.744,
      end: 17.39,
    },
    {
      en: 'and when he wanted to go farther',
      pt: 'e quando ele queria ir mais longe',
      start: 17.576,
      end: 19.007,
    },
    {
      en: 'the stable-boy brought out his horse and said,',
      pt: 'o cavalariço trouxe pra fora seu cavalo e disse:',
      start: 19.008,
      end: 21.39,
    },
    {
      en: 'A nail is missing, sir,',
      pt: 'Um prego está faltando, senhor, ',
      start: 21.462,
      end: 22.912,
    },
    {
      en: 'in the shoe of its left hind foot.',
      pt: 'no sapato de sua pata traseira esquerda.',
      start: 23.014,
      end: 24.883,
    },
    {
      en: '"No problem," answered the salesman;',
      pt: '"Sem problemas", respondeu o vendedor;',
      start: 25.642,
      end: 27.728,
    },
    {
      en: 'The shoe will stay on for the six miles',
      pt: 'O sapato vai ficar nas seis milhas ',
      start: 27.729,
      end: 29.927,
    },
    {
      en: 'I still have to go.',
      pt: 'que eu ainda tenho que ir.',
      start: 30.033,
      end: 31.194,
    },
    {
      en: "I'm in a hurry.",
      pt: 'Eu estou com pressa."',
      start: 32.005,
      end: 32.826,
    },
  ],
}

export default function () {
  return <TextoComAudio textData={text} />
}
