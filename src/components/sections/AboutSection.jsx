import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Importe sua foto de perfil
import profileImage from '../../assets/images/profile.png';

const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden; /* Isso garante que a imagem não ultrapasse o container */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(61, 255, 139, 0.3);
  
  /* Removido o pseudo-elemento ::after que estava causando o fundo verde */
  
  @media (max-width: 992px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: drop-shadow(0 0 10px rgba(61, 255, 139, 0.7)); /* Sombra verde neon */
  
  &:hover {
    transform: scale(1.03);
    filter: drop-shadow(0 0 15px rgba(61, 255, 139, 0.9)); /* Sombra mais intensa no hover */
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2.5rem; /* Aumentado para dar mais espaço antes do texto */
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px; /* Ajustado para ficar mais abaixo do título */
    left: 0;
    width: 60px;
    height: 4px;
    background: #3dff8b;
    border-radius: 2px;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  color: #d4d4d4;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(61, 255, 139, 0.1);
  border: 1px solid rgba(61, 255, 139, 0.3);
  border-radius: 30px;
  font-size: 0.9rem;
  color: #3dff8b;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(61, 255, 139, 0.2);
    transform: translateY(-3px);
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3dff8b;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  font-size: 1rem;
  color: #a3a3a3;
`;

const AboutSection = () => {
  const [refTitle, inViewTitle] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [refContent, inViewContent] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [refImage, inViewImage] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [refSkills, inViewSkills] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [refStats, inViewStats] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 
    'Styled Components', 'UI/UX Design', 'Responsive Design', 
    'Landing Pages', 'Link na Bio'
  ];
  
  const stats = [
    { number: '30+', label: 'Projetos Concluídos' },
    { number: '30+', label: 'Clientes Satisfeitos' },
    { number: '1+', label: 'Anos de Experiência' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <AboutContainer id="about">
      <div className="container">
        <AboutGrid>
          <AboutImageContainer
            ref={refImage}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inViewImage ? 1 : 0, x: inViewImage ? 0 : -50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <AboutImage src={profileImage} alt="Gdev - Guilherme" />
          </AboutImageContainer>
          
          <AboutContent>
            <SectionTitle
              ref={refTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : 30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }} 
            >
              Sobre Mim
            </SectionTitle>
            
            <AboutText
              ref={refContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inViewContent ? 1 : 0, y: inViewContent ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              Olá! Sou Guilherme Garbelini, um web designer e desenvolvedor apaixonado por criar experiências digitais impactantes. Especializo-me em landing pages de alto desempenho e páginas de Link na Bio que não apenas impressionam visualmente, mas também convertem visitantes em clientes.
              <br /><br />
              Com uma abordagem que combina design moderno e tecnologia de ponta, transformo ideias em realidade digital. Meu objetivo é ajudar marcas e profissionais a se destacarem online com soluções web elegantes e funcionais.
            </AboutText>
            
            <SkillsContainer
              ref={refSkills}
              variants={containerVariants}
              initial="hidden"
              animate={inViewSkills ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <SkillTag key={index} variants={itemVariants}>
                  {skill}
                </SkillTag>
              ))}
            </SkillsContainer>
            
            <StatsContainer
              ref={refStats}
              variants={containerVariants}
              initial="hidden"
              animate={inViewStats ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <StatItem key={index} variants={itemVariants}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsContainer>
          </AboutContent>
        </AboutGrid>
      </div>
    </AboutContainer>
  );
};

export default AboutSection;