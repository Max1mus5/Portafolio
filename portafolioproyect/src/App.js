import React, { useEffect, useState } from 'react';
import './App.css';
import Portafolio from './components/portafolio.jsx';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function App() {
const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem('darkMode');
  return storedTheme !== null ? JSON.parse(storedTheme) : true;
};

const [init, setInit] = useState(false);
const [darkMode, setDarkMode] = useState(getInitialTheme);

useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  }).then(() => {
    setInit(true);
  });
}, []);

const toggleDarkMode = () => {
  const newDarkMode = !darkMode;
  setDarkMode(newDarkMode);
  window.localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
};

const particlesLoaded = (container) => {
  console.log(container);
};

return (
  <div className="App">
    {init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: darkMode ? "#1a1a1a" : "#f9fafb",
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
                mode: "repulse",
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
            },
          },
          particles: {
            color: {
              value: darkMode ? "#ffffff" : "#",
            },
            links: {
              color: darkMode ? "#ffffff" : "#000000",
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
    )}
      <Portafolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} className="portafolio" />
  </div>
);
}

export default App;
