import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { usePersonalInfo } from '../../context/ResumeContext';
import RippleEffect from '../animations/RippleEffect';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { name, role, summary } = usePersonalInfo();
  // const skills = useSkills();

  return (
    <HeroSection id="about">
      <ContentWrapper>
        <ProfileContainer
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <ProfileImage
            as={motion.div}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
          >
            <ProfilePicture 
              src="https://avatars.githubusercontent.com/u/32884734?s=400&u=f26182dfac28e00899be79e9c7e6703900a141d1&v=4"
              alt="Profile Picture"
            />
          </ProfileImage>
        </ProfileContainer>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>
            <TypeAnimation
              sequence={[500, name]}
              speed={50}
              cursor={false}
            />
          </Name>
          <Title>
            <TypeAnimation
              sequence={[1000, role]}
              speed={50}
              cursor={true}
            />
          </Title>
          <Description
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            {summary}
          </Description>
          <AnimatePresence>
            {/* <SkillsPreview>
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + categoryIndex * 0.1 }}
                >
                  <SkillCategory>
                    <SkillCategoryName>{category.category}</SkillCategoryName>
                    <SkillList>
                      {category.items.slice(0, 3).map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1 + categoryIndex * 0.1 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          <SkillTag>{skill}</SkillTag>
                        </motion.div>
                      ))}
                    </SkillList>
                  </SkillCategory>
                </motion.div>
              ))}
            </SkillsPreview> */}
            <CTAContainer
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <PrimaryButton href="#contact">
                Get in Touch
                <RippleEffect color="rgba(255, 255, 255, 0.3)" />
              </PrimaryButton>
              <SecondaryButton href="https://github.com/a-5ingh" target="_blank">
                View GitHub
                <RippleEffect color="rgba(46, 160, 67, 0.2)" />
              </SecondaryButton>
            </CTAContainer>
          </AnimatePresence>
        </Motion>
      </ContentWrapper>
    </HeroSection>
  );
};

const HeroSection = styled.section<{ theme: DefaultTheme }>`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => `${theme.primary}08`} 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Motion = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
  margin-bottom: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::before {
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid ${({ theme }) => theme.primary};
    opacity: 0;
    transform: scale(1.1);
  }

  &::after {
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => `${theme.primary}33`}
    );
    z-index: -1;
    opacity: 0;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px ${({ theme }) => theme.shadow},
      0 0 0 1px ${({ theme }) => theme.primary},
      0 0 30px ${({ theme }) => `${theme.primary}33`};
      
    &::before {
      opacity: 0.5;
      transform: scale(1);
    }
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  ${ProfileImage}:hover & {
    animation: pulse 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const Greeting = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.8;
  margin: 0 auto 2.5rem;
  max-width: 600px;
  text-align: center;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-width: 160px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: 2px solid ${({ theme }) => theme.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 25px ${({ theme }) => `${theme.primary}66`},
      0 0 0 2px ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 12px ${({ theme }) => `${theme.primary}66`},
      0 0 0 2px ${({ theme }) => theme.primary};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 
      0 8px 25px ${({ theme }) => theme.shadow},
      0 0 0 1px ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 12px ${({ theme }) => theme.shadow},
      0 0 0 1px ${({ theme }) => theme.primary};
  }
`;

// const SkillsPreview = styled.div`
//   margin: 2rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const SkillCategory = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const SkillCategoryName = styled.h3`
//   color: ${({ theme }) => theme.text};
//   font-size: 1.1rem;
//   font-weight: 600;
// `;

// const SkillList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   justify-content: center;
// `;

// const SkillTag = styled.span`
//   background-color: ${({ theme }) => `${theme.backgroundSecondary}99`};
//   color: ${({ theme }) => theme.primary};
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
//   font-size: 0.875rem;
//   font-weight: 500;
//   border: 1px solid ${({ theme }) => theme.border};
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   position: relative;
//   cursor: default;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: -1px;
//     border-radius: 20px;
//     padding: 1px;
//     background: linear-gradient(
//       45deg,
//       ${({ theme }) => theme.primary},
//       ${({ theme }) => `${theme.primary}33`}
//     );
//     -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//     mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//     -webkit-mask-composite: xor;
//     mask-composite: exclude;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 
//       0 4px 12px ${({ theme }) => theme.shadow},
//       0 0 0 1px ${({ theme }) => theme.primary};
//     background-color: ${({ theme }) => theme.backgroundSecondary};
    
//     &::before {
//       opacity: 1;
//     }
//   }
// `;

export default Hero;
