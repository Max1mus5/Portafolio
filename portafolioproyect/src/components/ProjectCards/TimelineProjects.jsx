import React from 'react';
import { useTranslation } from 'react-i18next';
import './timeline-projects.css';
import './project.css';

const TimelineProjects = ({ darkMode }) => {
  const { t } = useTranslation('project');
  const projects = t('projects', { returnObjects: true });

  // Función para obtener el año del proyecto (para la línea de tiempo)
  const getProjectYear = (project) => {
    // Si el proyecto tiene una fecha específica, úsala
    if (project.date) {
      return project.date;
    }
    // De lo contrario, usa un año estimado basado en la posición
    const baseYear = new Date().getFullYear();
    const index = projects.indexOf(project);
    return `${baseYear - index}`;
  };

  return (
    <div className="timeline-container">
      <div className="timeline-projects">
        {projects.map((project, index) => (
          <div className="timeline-project" key={index}>
            <div className="timeline-node"></div>
            <div className={`timeline-card project ${darkMode ? 'dark' : 'light'}`}>
              <span className="timeline-date">{getProjectYear(project)}</span>
              
              {/* Header del proyecto */}
              <div className="header-project">
                <span className={`project-type-label ${darkMode ? 'dark' : 'light'}`}>
                  {project.type}
                </span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg className="github-project" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg className="link_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Detalles del proyecto */}
              <div className="project-details">
                <h2 className="title">{project.title}</h2>
                <p>{project.description}</p>
                
                {/* Tecnologías */}
                <div className="technologies-icons">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <div className="icon_tech" key={techIndex}>
                      <img src={tech.icon} alt={tech.name} title={tech.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineProjects;