import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { RotatingText } from "@/components/ui/rotating-text";
import { cn } from '@/lib/utils';
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  return (
    <div className="relative bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
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
              <h1 className="font-mono text-5xl sm:text-5x2 md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6 mx-0 my-0 px-0 py-[14px] whitespace-nowrap">Noctana Labs</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed px-0 -mt-[30px] py-0 mx-0 whitespace-nowrap">
                AI that works while you{" "}
                <RotatingText words={["Sleep", "Build", "Innovate", "Lead", "Revolutionise", "Dream", "Achieve", "Develop"]} className="text-lg sm:text-xl md:text-2xl text-primary font-medium" />
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default Index;