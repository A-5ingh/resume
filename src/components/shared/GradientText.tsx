import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GradientText = styled(motion.span)`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.primary}; /* Fallback color */
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  display: inline-block;
  background-size: 200% auto;
  animation: gradient 5s ease infinite;

  /* Ensure visibility if background-clip is not supported */
//   @supports (-webkit-background-clip: text) or (background-clip: text) {
//     color: transparent;
//   }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
