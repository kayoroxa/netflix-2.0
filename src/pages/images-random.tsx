import ImagesRandom from '../templates/ImagesRandom'

export default function PlayPage() {
  const seed = Math.floor(Math.random() * 100) + 1
  const _data = [
    'looking',
    'thinking',
    'while',
    'because',
    'why??',
    'what',
    'looks',
    'perhaps',
    'maybe',
    'maybe not',
  ]

  const sampleRandom = () => {
    const data: string[] = []
    for (let i = 0; i < 2; i++) {
      const _dataSample = _data[Math.floor(Math.random() * _data.length)]
      if (data.indexOf(_dataSample) === -1) {
        data.push(_dataSample)
      }
    }
    return data
  }

  return (
    <div>
      <ImagesRandom
        data={[
          {
            imageUrl: `https://picsum.photos/seed/${seed + 1}/400/800`,
            info: sampleRandom(),
          },
          {
            imageUrl: `https://picsum.photos/seed/${seed + 2}/400/800`,
            info: sampleRandom(),
          },
          {
            imageUrl: `https://picsum.photos/seed/${seed + 3}/400/800`,
            info: sampleRandom(),
          },
          {
            imageUrl: `https://picsum.photos/seed/${seed + 4}/400/800`,
            info: sampleRandom(),
          },
        ]}
      />
    </div>
  )
}
