import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { TextScramble } from './text-scramble';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export const RotatingText = memo(function RotatingText({ words, interval = 6000, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const scheduleNext = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setTrigger((prev) => !prev);
    }, interval);
  }, [interval, words.length]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleScrambleComplete = () => {
    scheduleNext();
  };

  return (
    <TextScramble
      className={className}
      as="span"
      trigger={trigger}
      duration={0.6}
      speed={0.03}
      onScrambleComplete={handleScrambleComplete}
    >
      {words[currentIndex]}
    </TextScramble>
  );
});