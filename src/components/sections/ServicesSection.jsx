import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMonitor, FiSmartphone, FiArrowRight } from 'react-icons/fi';

// Container principal
const ServicesContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background-color: #121212;
`;

// Título da seção
const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;

// Subtítulo da seção
const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #a3a3a3;
  margin-bottom: 4rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// Container para os cards de serviços
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Card de serviço
const ServiceCard = styled(motion.div)`
  background: rgba(18, 18, 18, 0.8);
  border: 1px solid rgba(61, 255, 139, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(61, 255, 139, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(61, 255, 139, 0.5);
    
    &::before {
      opacity: 1;
    }
  }
`;

// Ícone do serviço
const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(61, 255, 139, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #3dff8b;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    background: rgba(61, 255, 139, 0.2);
    transform: scale(1.1);
  }
`;

// Título do serviço
const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

// Descrição do serviço
const ServiceDescription = styled.p`
  color: #a3a3a3;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

// Lista de recursos
const FeaturesList = styled.ul`
  margin-bottom: 2rem;
`;

// Item da lista de recursos
const FeatureItem = styled.li`
  color: #d4d4d4;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    color: #3dff8b;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    line-height: 0;
  }
`;

// Link "Ver Exemplos"
const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #3dff8b;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
   position: relative; /* Adicionado */
  z-index: 10; /* Adicionado para garantir que o link esteja acima de outros elementos */
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #5fff9f;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

// No componente ServicesSection
const handleLearnMoreClick = (e, category) => {
    e.preventDefault();

    // Rolar até a seção de portfólio
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });

        // Aguardar um pouco para garantir que a rolagem termine
        setTimeout(() => {
            // Encontrar e clicar no botão da categoria correspondente
            const categoryButton = document.querySelector(`#portfolio button[data-category="${category}"]`);
            if (categoryButton) {
                categoryButton.click();
            }
        }, 800); // Aguardar 800ms para a rolagem terminar
    }
};

// Efeito de gradiente no fundo
const BackgroundGradient = styled.div`
  position: absolute;
  top: 30%;
  right: -200px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle at center, rgba(61, 255, 139, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    right: -150px;
  }
`;

const ServicesSection = () => {
    // Hooks para animações baseadas em scroll
    const [refTitle, inViewTitle] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [refSubtitle, inViewSubtitle] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [refCards, inViewCards] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    // Variantes para animações
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    };

    // Dados dos serviços
    const services = [
        {
            icon: <FiMonitor />,
            title: "Landing Pages",
            description: "Landing pages de alto impacto que convertem visitantes em clientes, com design moderno e focado em resultados.",
            features: [
                "Design responsivo para todos os dispositivos",
                "Otimização para conversão e SEO",
                "Carregamento rápido e performance otimizada",
                "Integração com ferramentas de marketing",
                "Análise de dados e relatórios de desempenho"
            ],
            link: "#portfolio",
            category: "landing-pages"
        },
        {
            icon: <FiSmartphone />,
            title: "Link na Bio",
            description: "Páginas de Link na Bio elegantes e funcionais que centralizam sua presença online e maximizam o engajamento.",
            features: [
                "Design personalizado e alinhado com sua marca",
                "Integração com todas as suas redes sociais",
                "Analytics para acompanhar cliques e conversões",
                "Botões de ação e recursos interativos",
                "Atualizações e manutenção contínuas"
            ],
            link: "#portfolio",
            category: "link-bio"
        }
    ];

    return (
        <ServicesContainer id="services">
            <BackgroundGradient />

            <div className="container">
                <SectionTitle
                    ref={refTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Meus Serviços
                </SectionTitle>

                <SectionSubtitle
                    ref={refSubtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    Especializado em criar experiências digitais que não apenas impressionam visualmente,
                    mas também geram resultados concretos para o seu negócio.
                </SectionSubtitle>

                <ServicesGrid ref={refCards}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inViewCards ? "visible" : "hidden"}
                        >
                            <ServiceIcon>{service.icon}</ServiceIcon>
                            <ServiceTitle>{service.title}</ServiceTitle>
                            <ServiceDescription>{service.description}</ServiceDescription>

                            <FeaturesList>
                                {service.features.map((feature, i) => (
                                    <FeatureItem key={i}>{feature}</FeatureItem>
                                ))}
                            </FeaturesList>

                            <LearnMoreLink
                                href={service.link}
                                onClick={(e) => handleLearnMoreClick(e, service.category)}
                            >
                                Ver Exemplos <FiArrowRight />
                            </LearnMoreLink>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
            </div>
        </ServicesContainer>
    );
};

export default ServicesSection;