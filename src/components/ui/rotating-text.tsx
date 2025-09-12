import { useState, useEffect, memo } from 'react';
import { TextScramble } from './text-scramble';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export const RotatingText = memo(function RotatingText({ words, interval = 4000, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setTrigger(prev => !prev);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, isAnimating]);

  const handleScrambleComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    setIsAnimating(true);
  }, [trigger]);

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