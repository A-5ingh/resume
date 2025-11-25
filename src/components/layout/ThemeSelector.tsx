import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeName } from '../../data/types';
import { Palette } from 'lucide-react';
import { useState } from 'react';

const ThemeSelector = () => {
  const { themeName, setThemeName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const presets: { id: ThemeName; label: string; color: string }[] = [
    { id: 'aurora', label: 'Aurora', color: 'linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)' },
    { id: 'pastel', label: 'Pastel', color: 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)' },
    { id: 'neon', label: 'Neon', color: 'linear-gradient(135deg, #39FF14 0%, #00FFFF 100%)' },
  ];

  return (
    <Container>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Palette size={20} />
      </ToggleButton>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {presets.map((preset) => (
              <Option
                key={preset.id}
                isActive={themeName === preset.id}
                onClick={() => {
                  setThemeName(preset.id);
                  setIsOpen(false);
                }}
              >
                <ColorPreview style={{ background: preset.color }} />
                <Label>{preset.label}</Label>
              </Option>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.75rem;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 50;
`;

const Option = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background: ${({ isActive, theme }) => isActive ? theme.hover : 'transparent'};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const ColorPreview = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

const Label = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

export default ThemeSelector;
