import React, { useEffect, useState } from 'react';
import './App.css';
import Portafolio from './components/portafolio.jsx';
import PortafolioTraduce from './components/portafolio-traduce.jsx';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function App() {
  const [init, setInit] = useState(false);
useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  }).then(() => {
    setInit(true);
  });
}, []);

const particlesLoaded = (container) => {
};

const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage ? savedLanguage : 'en'; 
  });

const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = window.localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'light' : true; // Inicia en modo oscuro si no hay preferencia almacenada
  });
  

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  {darkMode ? document.body.style.backgroundColor ='#f9fafb' : document.body.style.backgroundColor ='#1a1a1a'}
};

const toggleLanguage = () => {
  setLanguage(language === 'en' ? 'es' : 'en');
  /* guardar en cache */
  window.localStorage.setItem('language', language === 'en' ? 'es' : 'en');
};

 // Actualiza el localStorage cuando el estado darkMode cambia
useEffect(() => {
  window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
}, [darkMode]);


return (
  <div className="App">
    {init && (
      <div  className="particles-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false, 
            },
            background: {
              color: {
                value: darkMode ? "#1a1a1a" : "white",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: darkMode ? "repulse" : "attract",
                },
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 1,
                 },
                 attract: { // Configuración de atracción
                  distance: 500,
                  duration: 0.5,
                 },
              },
            },
            particles: {
              color: {
                value: darkMode ? "#ffffff" : "#000000",
              },
              links: {
                color: darkMode ? "#ffffff" : "#",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )}
    {language === 'en' ? <PortafolioTraduce language={toggleLanguage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} className="portafolio" />  : <Portafolio language={toggleLanguage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} className="portafolio" /> }
  </div>
);
}

export default App;