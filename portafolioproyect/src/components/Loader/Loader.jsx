import React from 'react';
import './loader.css';
import { useTranslation } from 'react-i18next';

const Loader = ({ darkMode }) => {
  const { t } = useTranslation('projects');
  // Generate particles dynamically
  const particles = Array.from({ length: 13 }, (_, i) => i + 1);
  
  const loaderStyle = {
    '--uib-color': darkMode ? '#f9fafb' : '#1a1a1a',
    '--particle-color-1': darkMode ? '#a7e237' : '#ff6b6b',
    '--particle-color-2': darkMode ? '#f4e604' : '#4ecdc4',
    '--particle-color-3': darkMode ? '#ff7954' : '#45b7d1',
    '--particle-color-4': darkMode ? '#1ebbd7' : '#ff6b6b',
  };

  return (
    <div className="loader-container" style={{ backgroundColor: darkMode ? '#1a1a1a' : '#f9fafb' }}>
      <div className="container" style={loaderStyle}>
        {particles.map((index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              '--particle-color': `var(--particle-color-${Math.ceil(Math.random() * 4)})`
            }}
          />
        ))}
      </div>
      <p className="loading-text" style={{ color: darkMode ? '#f9fafb' : '#1a1a1a' }}>
        {t('projects.loading')}
      </p>
    </div>
  );
};

export default Loader;