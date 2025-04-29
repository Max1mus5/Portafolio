import React from 'react';
import { useTranslation } from 'react-i18next';
import './timeline-work.css';
import './workexperiencesection.css';

const TimelineWork = ({ darkMode }) => {
  const { t } = useTranslation('work');
  const workExperiences = t('workExperiences', { returnObjects: true });

  // Asegurarse de que workExperiences sea un array
  const experiences = Array.isArray(workExperiences) ? workExperiences : [];

  return (
    <div className="timeline-container">
      <div className="timeline-experiences">
        {experiences.map((experience, index) => (
          <div className="timeline-experience" key={index}>
            <div className="timeline-node"></div>
            <div className={`timeline-card work-card ${darkMode ? 'dark' : 'light'}`}>
              <span className="timeline-date">{experience.date}</span>
              
              {/* Detalles de la experiencia */}
              <div className="work-details">
                <h2 className="work-title">{experience.company}</h2>
                <h3 className="work-position">{experience.position}</h3>
                <p className="work-description">{experience.description}</p>
                
                {/* Tecnologías */}
                <div className="work-technologies">
                  {experience.technologies && experience.technologies.map((tech, techIndex) => (
                    <div className="work-tech" key={techIndex}>
                      <img src={tech.icon} alt={tech.name} title={tech.name} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Logo de la empresa */}
              {experience.logo && (
                <div className="company-logo">
                  <img 
                    src={darkMode ? experience.logoDark || experience.logo : experience.logo} 
                    alt={`${experience.company} logo`} 
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineWork;