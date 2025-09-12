import { useState, useEffect } from 'react';
import { TextScramble } from './text-scramble';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({ words, interval = 5000, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setTrigger(prev => !prev);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <TextScramble
      className={className}
      as="span"
      trigger={trigger}
      duration={0.6}
      speed={0.03}
    >
      {words[currentIndex]}
    </TextScramble>
  );
}