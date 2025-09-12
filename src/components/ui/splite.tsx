'use client'

import { Suspense, lazy, memo, useCallback, useState } from 'react'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  fallbackHeight?: string
  reducedQuality?: boolean
}

export const SplineScene = memo(function SplineScene({ 
  scene, 
  className, 
  fallbackHeight = "h-96",
  reducedQuality = false
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  if (hasError) {
    return (
      <div className={cn("w-full flex items-center justify-center bg-muted/20 rounded-lg", fallbackHeight, className)}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-muted/40 rounded-lg" />
          <p className="text-sm text-muted-foreground">3D Scene Unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className={cn("w-full flex items-center justify-center", fallbackHeight, className)}>
          <div className="animate-pulse space-y-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce" />
            <p className="text-xs text-muted-foreground">Loading 3D Scene...</p>
          </div>
        </div>
      }
    >
      <div className={cn("relative", className)}>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="animate-pulse space-y-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce mx-auto" />
              <p className="text-xs text-muted-foreground">Loading 3D Scene...</p>
            </div>
          </div>
        )}
        <Spline
          scene={scene}
          className={reducedQuality ? cn(className, "scale-75 origin-center") : className}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            ...(reducedQuality && {
              imageRendering: 'pixelated',
              filter: 'contrast(0.9) brightness(0.95)',
              transform: 'scale(0.7)',
              transformOrigin: 'center',
            })
          }}
        />
      </div>
    </Suspense>
  )
})