import { memo } from 'react';
import Particles from '@tsparticles/react';

const ParticlesBackground = memo(({ darkMode }) => {
  const particlesLoaded = (container) => {
  };

  return (
    <div className="particles-container">
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
                mode: "bubble",
              },
            },
            modes: {
              push: {
                quantity: 3,
              },
              bubble: {
                distance: 200,
                duration: 2,
                size: 12,
                opacity: 0.8,
                color: darkMode ? 
                  ["#a7e237", "#f4e604", "#ff7954", "#1ebbd7"] : 
                  ["#ff6b6b", "#4ecdc4", "#45b7d1"],
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#ffffff" : "#000000",
            },
            links: {
              color: darkMode ? "#ffffff" : "None",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.7,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 6 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}, (prevProps, nextProps) => prevProps.darkMode === nextProps.darkMode);

export default ParticlesBackground;