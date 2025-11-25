import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GlassCard = styled(motion.div)`
  background: ${({ theme }) => theme.backgroundSecondary}80; // 50% opacity
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary}40;
  }
`;
