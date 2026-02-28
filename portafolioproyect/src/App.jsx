import React, { useEffect, useState } from 'react';
import './App.css';
import Portafolio from './components/portafolio.jsx';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTranslation } from 'react-i18next';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground.jsx';
import Loader from './components/Loader/Loader.jsx';

function App() {
  const [init, setInit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  // Initialize particles engine
  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
        // Add a small delay to ensure smooth transition
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error('Error initializing particles:', error);
        setIsLoading(false); //don't get stuck on loading
      }
    };

    initEngine();
  }, []);

  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage || 'es';
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

  useEffect(() => {
    i18n.changeLanguage(language);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader darkMode={darkMode} />;
  }

  return (
    <div className="App">
      {init && <ParticlesBackground darkMode={darkMode} />}
      <Portafolio
        language={toggleLanguage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        className="portafolio"
      />
    </div>
  );
}

export default App;