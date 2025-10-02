import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import '../../styles/ContactSection.css';

const ContactSection = () => {
  // Estado para o formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Hooks para animações baseadas em scroll
  const [refTitle, inViewTitle] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [refContent, inViewContent] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  // Manipulador de alteração de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
  e.preventDefault();
  
  const phoneNumber = "+351924785438";
  const message = `Nome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
  
  setFormStatus({
    submitted: true,
    success: true,
    message: 'Redirecionando para o WhatsApp...'
  });
  
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  setTimeout(() => {
    setFormStatus({
      submitted: false,
      success: false,
      message: ''
    });
  }, 5000);
};
  
  return (
    <section id="contact" className="contact-container">
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
          Entre em Contato
        </h2>
        
        <p className="section-subtitle">
          Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.
        </p>
        
        <div
          ref={refContent}
          className="contact-content"
          style={{
            opacity: inViewContent ? 1 : 0,
            transform: inViewContent ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>contato@guilhermegarbelini.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-details">
                <h3>Telefone</h3>
                <p>+351 924785438</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h3>Localização</h3>
                <p>Braga - Portugal</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/gui_garbelini/?hl=pt-br" target='_blank' className="social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-garbelini-b5011736a/" target='_blank' className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/GGarbelini" target='_blank' className="social-icon" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Enviar Mensagem <FiSend />
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;