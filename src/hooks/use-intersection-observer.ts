import { useEffect, useRef, useState, useMemo } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<T>(null)

  const observer = useMemo(
    () => {
      if (typeof window === 'undefined') return null
      
      return new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting
          
          if (isElementIntersecting && triggerOnce && !hasTriggered) {
            setIsIntersecting(true)
            setHasTriggered(true)
          } else if (!triggerOnce) {
            setIsIntersecting(isElementIntersecting)
          }
        },
        { threshold, rootMargin }
      )
    },
    [threshold, rootMargin, triggerOnce, hasTriggered]
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element || !observer) return

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [observer])

  return { ref: elementRef, isIntersecting }
}