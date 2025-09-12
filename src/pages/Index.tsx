import { DottedSurface } from "@/components/ui/dotted-surface";
import { RotatingText } from "@/components/ui/rotating-text";
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, lazy, Suspense, useCallback } from "react";

// Lazy load sections for better performance
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/sections/FeaturesSection"));
const StatisticsSection = lazy(() => import("@/components/sections/StatisticsSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Memoize transforms to prevent unnecessary recalculations
  const transforms = useMemo(() => ({
    opacity: useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    textOpacity: useTransform(scrollYProgress, [0.3, 0.8], [1, 0])
  }), [scrollYProgress]);

  // Memoize rotating text words to prevent array recreation
  const rotatingWords = useMemo(() => 
    ["Sleep", "Build", "Innovate", "Lead", "Revolutionise", "Dream", "Achieve", "Develop"], 
    []
  );

  // Optimized loading fallback component
  const LoadingFallback = useCallback(({ height = "h-96" }: { height?: string }) => (
    <div className={cn("animate-pulse bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg", height)} />
  ), []);

  return (
    <div className="relative bg-background">
      {/* Hero Section with Fade Animation */}
      <div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ opacity: transforms.opacity, scale: transforms.scale }}
          className="fixed top-0 left-0 w-full h-screen z-10"
        >
          {/* Animated Dotted Surface Background */}
          <DottedSurface />
          
          {/* Theme Toggle Button */}
          
          {/* Main Content */}
          <div className="relative z-10 flex h-screen items-center justify-center">
            <motion.div 
              style={{ opacity: transforms.textOpacity }}
              className="text-center space-y-4 -mt-[70px] sm:-mt-[90px] md:-mt-[110px] lg:-mt-[130px] px-[40px]"
            >
              {/* Elegant glow effect */}
              <div aria-hidden="true" className={cn('pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full', 'bg-gradient-glow', 'blur-[30px]')} />
              
              {/* Hero Content */}
              <div className="relative">
                <h1 className="font-mono text-5xl sm:text-5x2 md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6 mx-0 my-0 px-0 py-[14px] whitespace-nowrap">Noctana Labs</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed px-0 -mt-[30px] py-0 mx-0 whitespace-nowrap">
                  AI that works while you{" "}
                  <RotatingText words={rotatingWords} className="text-lg sm:text-xl md:text-2xl text-primary font-medium" />
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Sections with optimized lazy loading */}
      <div className="relative z-20">
        <Suspense fallback={<LoadingFallback height="h-[500px]" />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <StatisticsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="h-[600px]" />}>
          <PricingSection />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;