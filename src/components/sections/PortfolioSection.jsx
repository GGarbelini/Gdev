import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../../styles/PortfolioSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import landingPage1Image from '../../assets/images/landingpage1.png';
import landingPage2Image from '../../assets/images/landingpage2.png';
import landingPage3Image from '../../assets/images/landingpage3.png';
import landingPage4Image from '../../assets/images/landingpage4.png';
import bio1Image from '../../assets/images/bio1.png';
import bio2Image from '../../assets/images/bio2.png';
import bio3Image from '../../assets/images/bio3.png';

// Componentes personalizados para as setas do carrossel
const NextArrow = ({ onClick }) => {
  return (
    <div className="carousel-arrow next-arrow" onClick={onClick}>
      <FiChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="carousel-arrow prev-arrow" onClick={onClick}>
      <FiChevronLeft />
    </div>
  );
};

const PortfolioSection = () => {
  // Estado para controlar a categoria ativa
  const [activeTab, setActiveTab] = useState('landing-pages');
  
  // Hooks para animações baseadas em scroll
  const [refTitle, inViewTitle] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    const checkUrlParams = () => {
      const hash = window.location.hash;
      if (hash.includes('portfolio')) {
        const queryString = hash.split('?')[1];
        if (queryString) {
          const urlParams = new URLSearchParams(queryString);
          const category = urlParams.get('category');
          
          if (category === 'landing-pages' || category === 'link-bio') {
            setActiveTab(category);
          }
        }
      }
    };
   
    checkUrlParams();
    window.addEventListener('hashchange', checkUrlParams);
    
    return () => {
      window.removeEventListener('hashchange', checkUrlParams);
    };
  }, []);

  const landingPages = [
    {
      id: 1,
      title: 'Tradição Doces',
      category: 'Landing Page',
      description: 'Landing page para lançamento de produto tecnológico com foco em conversão e design moderno.',
      image: landingPage1Image,
      link: '#https://ggarbelini.github.io/docestradicao/'
    },
    {
      id: 2,
      title: 'Fitness Revolution',
      category: 'Landing Page',
      description: 'Página de captura para programa de fitness com elementos interativos e alto índice de conversão.',
      image: landingPage2Image,
      link: '#'
    },
    {
      id: 3,
      title: 'Tradição Doces',
      category: 'Landing Page',
      description: 'Página criada para uma doceria com mais de 35 anos de Tradição. A ideia era criar uma página de apresentação da empresa com a opção de fazer pedidos diretamente pelo site, com integração para o whatsApp.',
      image: landingPage3Image,
      link: 'https://ggarbelini.github.io/docestradicao/'
    },
    {
      id: 4,
      title: 'DivMark',
      category: 'Landing Page',
      description: 'Landing Page desenvolvida para uma empresa de Marketing Digital, apresentando seus serviços e incluindo formulário de captação de leads. Layout responsivo para todos os dispositivos.',
      image: landingPage4Image,
      link: 'https://ggarbelini.github.io/divmark/'
    }
  ];
  
  const linkBio = [
    {
      id: 5,
      title: 'Influencer Connect',
      category: 'Link na Bio',
      description: 'Página de links para influenciador digital com design personalizado e integração com analytics.',
      image: bio1Image,
      link: '#'
    },
    {
      id: 6,
      title: 'Artist Portfolio',
      category: 'Link na Bio',
      description: 'Página de links para influenciador digital com design personalizado e integração com analytics.',
      image: bio2Image,
      link: '#'
    },
    {
      id: 7,
      title: 'Creator Hub',
      category: 'Link na Bio',
      description: 'Página de links para influenciador digital com design personalizado e integração com analytics.',
      image: bio3Image,
      link: '#'
    },
  ];
  
  // Projetos a serem exibidos com base na tab ativa
  const activeProjects = activeTab === 'landing-pages' ? landingPages : linkBio;

  // Configurações do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section id="portfolio" className="portfolio-container">
      <div className="background-gradient"></div>
      
      <div className="container">
        <h2
          ref={refTitle}
          className="section-title"
          style={{
            opacity: inViewTitle ? 1 : 0,
            transform: inViewTitle ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          Meu Portfólio
        </h2>
        
        <div className="tabs-container">
          <button 
            className={`tab ${activeTab === 'landing-pages' ? 'active' : ''}`}
            onClick={() => setActiveTab('landing-pages')}
            data-category="landing-pages"
          >
            Landing Pages
          </button>
          <button 
            className={`tab ${activeTab === 'link-bio' ? 'active' : ''}`}
            onClick={() => setActiveTab('link-bio')}
            data-category="link-bio"
          >
            Link na Bio
          </button>
        </div>
        
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {activeProjects.map((project) => (
              <div key={project.id} className="carousel-item">
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;