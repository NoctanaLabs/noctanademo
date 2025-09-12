import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { RotatingText } from "@/components/ui/rotating-text";
import { cn } from '@/lib/utils';

const Index = () => {
  return <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Dotted Surface Background */}
      <DottedSurface />
      
      {/* Theme Toggle Button */}
      
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4 -mt-[70px] sm:-mt-[90px] md:-mt-[110px] lg:-mt-[130px] px-[40px]">
          {/* Elegant glow effect */}
          <div aria-hidden="true" className={cn('pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full', 'bg-gradient-glow', 'blur-[30px]')} />
          
          {/* Hero Content */}
          <div className="relative">
            <h1 className="font-mono text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 mx-0 my-0 px-0 py-[14px]">Noctana Labs</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed px-0 -mt-[30px] py-0 mx-0">
              AI that works while you{" "}
              <RotatingText words={["Sleep", "Build", "Innovate", "Lead", "Revolutionise", "Dream", "Achieve", "Develop"]} className="text-lg sm:text-xl md:text-2xl text-primary font-medium" />
              .
            </p>
          </div>
          
          {/* Decorative Elements */}
          
        </div>
      </div>
    </div>;
};

export default Index;