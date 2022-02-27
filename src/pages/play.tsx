import { useRouter } from 'next/router'
import Play from '../templates/Play'

export default function PlayPage() {
  const { v } = useRouter().query
  const myId = typeof v === 'string' ? v : typeof v === 'object' ? v[0] : ''

  return (
    <div>
      <Play id={myId} />
    </div>
  )
}
