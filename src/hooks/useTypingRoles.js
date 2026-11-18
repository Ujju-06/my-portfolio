import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useTypingRoles(roles, typingSpeed = 70, pause = 1600) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(roles[0] ?? '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!roles.length) return undefined
    if (prefersReducedMotion) {
      setText(roles[index])
      const timer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % roles.length)
      }, 2200)
      return () => window.clearTimeout(timer)
    }

    const current = roles[index]
    const doneTyping = text === current
    const doneDeleting = text.length === 0

    let delay = deleting ? 38 : typingSpeed
    if (doneTyping && !deleting) delay = pause
    if (doneDeleting) delay = 280

    const timer = window.setTimeout(() => {
      if (!deleting && !doneTyping) {
        setText(current.slice(0, text.length + 1))
        return
      }
      if (!deleting && doneTyping) {
        setDeleting(true)
        return
      }
      if (deleting && !doneDeleting) {
        setText(current.slice(0, text.length - 1))
        return
      }
      setDeleting(false)
      setIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [roles, index, text, deleting, typingSpeed, pause, prefersReducedMotion])

  return text
}
