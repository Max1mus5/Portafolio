import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./portafolio.css";

// Component imports
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import ProjectSection from "./ProjectCards/ProjectCard";
import Technologies from "./Technologies/Technologies";
import Footer from "./Footer/Footer";
import Work from "./Work/WorkExpericeSection";

const Portfolio = ({ language, darkMode, toggleDarkMode }) => {
  const { t } = useTranslation('content');
  const [emailcopied, setEmailcopied] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      setIsAnimated(true);
    }
  }, []);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : darkMode;
  });

    

  // Sync dark mode state with props and localStorage
  useEffect(() => {
    setIsDarkMode(darkMode);
    window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    
    // Update body background
    document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '#f9fafb';
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isAnimated) {
        setIsAnimated(true);
        setTimeout(handleScrollEnd, 500); // Espera un poco antes de eliminar el evento
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);
  

  const handleScrollEnd = () => {
    window.removeEventListener('scroll', handleScrollEnd);
    setIsAnimated(false);
  };

  // Email copy handler
  const handleEmailCopy = async () => {
    const email = "jeronimoriveros@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailcopied(true);
      setTimeout(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
        setEmailcopied(false);
      }, 1500);
    } catch (err) {
      console.error('Error copying email:', err);
    }
  };

  return (
    <div className={`fullcontent ${!isDarkMode ? 'back' : ''}`}>
      <section className="portafolio-scroll">
        {/* Navigation */}
        <Navbar 
          toggleLanguage={language}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* About Section */}
        <AboutMe darkMode={darkMode}  className={isAnimated ? 'about-section' : ''} />

        {/* Work Experience Section */}
        <header className="work-header">
          <h1 id="work-title">{t('content.workExperience')}</h1>  
        </header>
        <Work darkMode={darkMode} className={isAnimated ? 'work-experience-section' : ''} />
        
        {/* Projects Section */}
        <header className="projects-header">
          <h1 id="project-title">{t('content.projects')}</h1>
          <p id="project-text">{t('content.projectsDescription')}</p>
        </header>
        <ProjectSection darkMode={darkMode} className={isAnimated ? 'project-section' : ''} />

        {/* Technologies Section */}
        <header className="tecnologies-header">
          <h1 id="tecnologies-title">{t('content.technologies')}</h1>
        </header>
        <Technologies darkMode={darkMode} className={isAnimated ? 'technologies-section' : ''}/>

        {/* Footer */}
        <Footer 
          darkMode={darkMode}
          emailcopied={emailcopied}
          handleEmailCopy={handleEmailCopy}
          className={isAnimated ? 'footer-section' : ''}
        />
      </section>
    </div>
  );
};

export default Portfolio;