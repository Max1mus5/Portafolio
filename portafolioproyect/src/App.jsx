import React, { useEffect, useState } from 'react';
import './App.css';
import Portafolio from './components/portafolio.jsx';
import PortafolioTraduce from './components/portafolio-traduce.jsx';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTranslation } from 'react-i18next';
import i18n from './locale/i18n.js';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground.jsx';

function App() {
  const [init, setInit] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage || 'es'; // Default to Spanish
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : true;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#f9fafb' : '#1a1a1a';
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    window.localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  }, [darkMode]);

  // Set initial language
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className="App">
      {/* Particles Background */}
      {init && <ParticlesBackground darkMode={darkMode} />}

      {language === 'en' ? (
        <PortafolioTraduce
          language={toggleLanguage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          className="portafolio"
        />
      ) : (
        <Portafolio
          language={toggleLanguage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          className="portafolio"
        />
      )}
    </div>
  );
}

export default App;