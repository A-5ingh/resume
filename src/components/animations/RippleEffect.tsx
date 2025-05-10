import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface RippleEffectProps {
  color?: string;
}

const RippleEffect = ({ color = 'rgba(255, 255, 255, 0.3)' }: RippleEffectProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      const timer = setTimeout(() => {
        setIsRippling(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <RippleContainer onClick={handleClick}>
      {isRippling && (
        <RippleCircle
          style={{
            left: coords.x,
            top: coords.y,
            backgroundColor: color
          }}
        />
      )}
    </RippleContainer>
  );
};

const rippleAnimation = keyframes`
  to {
    transform: scale(20);
    opacity: 0;
  }
`;

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: inherit;
`;

const RippleCircle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  border-radius: 50%;
  animation: ${rippleAnimation} 0.6s linear;
  transform: scale(0);
`;

export default RippleEffect;
