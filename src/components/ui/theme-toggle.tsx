'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface ThemeToggleProps {
  className?: string;
}
export function ThemeToggle({
  className
}: ThemeToggleProps) {
  const {
    theme,
    setTheme
  } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="outline" size="icon" className={cn("relative h-10 w-10 rounded-full border-2 bg-background/80 backdrop-blur-sm transition-colors hover:bg-accent", className)}>
        <Sun className="h-4 w-4" />
      </Button>;
  }
  return;
}