import { useEffect, useRef, useCallback } from 'react'

// Performance monitoring hook
export function usePerformanceMonitor() {
  const lastFrameTime = useRef(performance.now())
  const frameCount = useRef(0)
  const fpsRef = useRef(60)

  const measureFPS = useCallback(() => {
    const now = performance.now()
    const delta = now - lastFrameTime.current
    
    if (delta >= 1000) {
      fpsRef.current = Math.round((frameCount.current * 1000) / delta)
      frameCount.current = 0
      lastFrameTime.current = now
    } else {
      frameCount.current++
    }
    
    requestAnimationFrame(measureFPS)
  }, [])

  useEffect(() => {
    const animationId = requestAnimationFrame(measureFPS)
    return () => cancelAnimationFrame(animationId)
  }, [measureFPS])

  return fpsRef.current
}

// Debounced resize observer
export function useResizeObserver<T extends Element = HTMLDivElement>(
  callback: (entry: ResizeObserverEntry) => void,
  debounceMs = 100
) {
  const elementRef = useRef<T>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new ResizeObserver((entries) => {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        entries.forEach(callback)
      }, debounceMs)
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      clearTimeout(timeoutRef.current)
    }
  }, [callback, debounceMs])

  return elementRef
}