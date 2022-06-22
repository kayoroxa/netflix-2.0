import { useEffect } from 'react'

interface IProps {
  toggleLoop: () => void
  next: () => void
  prev: () => void
  togglePause: () => void
  repeatIndex: () => void
}

export default function useKey({
  toggleLoop,
  next,
  prev,
  togglePause,
  repeatIndex,
}: IProps) {
  useEffect(() => {
    function prevent(e: KeyboardEvent, func: () => void) {
      e.preventDefault()
      func()
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'r') toggleLoop()
      else if (e.key === 'd') prevent(e, next)
      else if (e.key === 'a') prevent(e, prev)
      else if (e.key === ' ') prevent(e, togglePause)
      else if (e.key === 's') prevent(e, repeatIndex)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
}
