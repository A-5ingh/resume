import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Star {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const BackgroundStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const starIdRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const animationRef = useRef<number>();

  // Animation loop for particle movement
  useEffect(() => {
    const animate = () => {
      setStars((prevStars) => {
        return prevStars
          .map((star) => ({
            ...star,
            x: star.x + star.vx,
            y: star.y + star.vy,
            life: star.life - 0.02,
          }))
          .filter((star) => star.life > 0);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    // Exclude interactive elements
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]')
    ) {
      return;
    }

    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Create stars on mouse move with debounce
    timeoutRef.current = setTimeout(() => {
      const x = e.clientX;
      const y = e.clientY;

      // Create 6-10 stars radiating outward
      const starCount = Math.floor(Math.random() * 5) + 6;
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        const angle = (Math.PI * 2 * i) / starCount + (Math.random() - 0.5);
        const speed = Math.random() * 2.5 + 1.5;

        newStars.push({
          id: starIdRef.current++,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.5,
        });
      }

      setStars((prev) => [...prev, ...newStars]);
    }, 100); // Debounce
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <StarsContainer>
      {stars.map((star) => (
        <Star
          key={star.id}
          $x={star.x}
          $y={star.y}
          $opacity={star.life}
        />
      ))}
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const Star = styled.div<{ $x: number; $y: number; $opacity: number }>`
  position: fixed;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: 6px;
  height: 6px;
  pointer-events: none;
  opacity: ${({ $opacity }) => $opacity};
  background: ${({ theme }) => theme.primary};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 0 2px ${({ theme }) => theme.primary}80);
`;

export default BackgroundStars;

