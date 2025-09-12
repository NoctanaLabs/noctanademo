import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from '@/lib/utils';
const Index = () => {
  return <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Dotted Surface Background */}
      <DottedSurface />
      
      {/* Theme Toggle Button */}
      
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center space-y-8 px-4">
          {/* Elegant glow effect */}
          <div aria-hidden="true" className={cn('pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full', 'bg-gradient-glow', 'blur-[30px]')} />
          
          {/* Hero Content */}
          <div className="relative">
            <h1 className="font-mono text-6xl font-semibold tracking-tight text-foreground mb-6 mx-0 my-0 py-0 px-0">
              Dotted Surface
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-0 py-[9px]">
              Experience the beauty of animated particles dancing in perfect harmony. 
              Toggle between light and dark themes to see the magic unfold.
            </p>
          </div>
          
          {/* Decorative Elements */}
          
        </div>
      </div>
    </div>;
};
export default Index;