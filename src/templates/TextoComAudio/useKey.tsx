import { useEffect } from 'react'

interface IProps {
  toggleLoop: () => any
  next: () => any
  prev: () => any
  togglePause: () => any
  repeatIndex: () => any
  putSlow: () => any
  putFast: () => any
}

export default function useKey({
  toggleLoop,
  next,
  prev,
  togglePause,
  repeatIndex,
  putSlow,
  putFast,
}: IProps) {
  useEffect(() => {
    function prevent(e: KeyboardEvent, func: () => any) {
      e.preventDefault()
      func()
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'r') toggleLoop()
      else if (e.key === 'd') prevent(e, next)
      else if (e.key === 'a') prevent(e, prev)
      else if (e.key === ' ') prevent(e, togglePause)
      else if (e.key === 's') prevent(e, repeatIndex)
      else if (e.key === '1') prevent(e, putSlow)
      else if (e.key === '2') prevent(e, putFast)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
}
