import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Dotted Surface Background */}
      <DottedSurface />
      
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center space-y-8 px-4">
          {/* Elegant glow effect */}
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
              'bg-gradient-glow',
              'blur-[30px]',
            )}
          />
          
          {/* Hero Content */}
          <div className="relative">
            <h1 className="font-mono text-6xl font-semibold tracking-tight text-foreground mb-6">
              Dotted Surface
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the beauty of animated particles dancing in perfect harmony. 
              Toggle between light and dark themes to see the magic unfold.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-12">
            <div className="h-1 w-12 bg-gradient-primary rounded-full opacity-60"></div>
            <div className="h-1 w-8 bg-gradient-primary rounded-full opacity-40"></div>
            <div className="h-1 w-4 bg-gradient-primary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
