import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './timeline-work.css';
import './workexperiencesection.css';

const TimelineWork = ({ darkMode }) => {
  const { t } = useTranslation('work');
  const timelineRef = useRef(null);

  // Obtener datos de la estructura i18n
  const milestones = t('milestones', { returnObjects: true }) || [];
  const workExperiences = t('work', { returnObjects: true }) || [];
  const currentStudies = t('currentStudies', { returnObjects: true }) || {};
  const timelineTexts = t('timeline', { returnObjects: true }) || {};

  // Combinar y ordenar cronológicamente todos los eventos
  const allEvents = [
    ...milestones.map(milestone => ({ ...milestone, type: 'milestone' })),
    ...workExperiences.map(work => ({ 
      ...work, 
      type: 'work',
      date: work.period,
      title: work.company,
      description: work.role,
      icon: ''
    }))
  ];

  // Parsear fechas textuales a Date
  const getDate = (item) => {
    if (item.startDate) return new Date(item.startDate);
    const d = item.date || '';
    if (d.includes('Febrero') || d.includes('February')) return new Date('2022-02-01');
    const yearMatch = d.match(/(\d{4})/);
    const year = yearMatch ? yearMatch[1] : null;
    if ((d.includes('Mediados') || d.includes('Mid')) && year) return new Date(`${year}-06-01`);
    if ((d.includes('Finales') || d.includes('Late')) && year) return new Date(`${year}-11-01`);
    if (d.includes('27/11/2023') || d.includes('11/27/2023')) return new Date('2023-11-27');
    if (d.includes('14/06/2024') || d.includes('06/14/2024')) return new Date('2024-06-14');
    return new Date('2099-01-01'); // si no se puede parsear, va al final
  };

  // Ordenar por fecha de inicio
  const sortedEvents = allEvents.sort((a, b) => getDate(a) - getDate(b));

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar todas las experiencias
    const experienceElements = document.querySelectorAll('.treasure-map-experience');
    experienceElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const generateSVGPath = (eventCount) => {
    const baseHeight = 1200;
    const adjustedHeight = Math.max(baseHeight, eventCount * 200 + 400);
    const stepHeight = adjustedHeight / (eventCount + 1);
    
    let path = `M 200 0`;
    
    for (let i = 1; i <= eventCount; i++) {
      const y = stepHeight * i;
      const x = i % 2 === 1 ? 180 : 220; // Alternar izquierda/derecha
      if (i === 1) {
        path += ` Q 120 ${y - 50} ${x} ${y}`;
      } else {
        const prevX = (i - 1) % 2 === 1 ? 180 : 220;
        const controlX = prevX + (x - prevX) * 0.5 + (i % 2 === 1 ? -60 : 60);
        path += ` Q ${controlX} ${y - 100} ${x} ${y}`;
      }
    }
    
    path += ` Q 320 ${adjustedHeight - 100} 200 ${adjustedHeight}`;
    return { path, height: adjustedHeight };
  };

  const { path: svgPath, height: svgHeight } = generateSVGPath(sortedEvents.length);

  return (
    <div className={`treasure-map-container ${darkMode ? 'dark' : 'light'}`} ref={timelineRef}>
      <div className="treasure-map-path">
        {/* Línea de path curvo dinámico */}
        <svg className="curved-path" viewBox={`0 0 400 ${svgHeight}`} preserveAspectRatio="none">
          <path 
            d={svgPath}
            className={`path-line ${darkMode ? 'dark' : 'light'}`}
            fill="none" 
          />
          {/* Puntos de conexión dinámicos */}
          <circle cx="200" cy="0" r="8" className="path-point start-point" />
          {sortedEvents.map((_, index) => {
            const stepHeight = svgHeight / (sortedEvents.length + 1);
            const y = stepHeight * (index + 1);
            const x = (index + 1) % 2 === 1 ? 180 : 220;
            return (
              <circle 
                key={index}
                cx={x} 
                cy={y} 
                r="12" 
                className="path-point experience-point"
                style={{ animationDelay: `${(index + 1) * 0.5}s` }}
              />
            );
          })}
          <circle cx="200" cy={svgHeight} r="8" className="path-point end-point" />
        </svg>

        {/* Experiencias laborales */}
        <div className="treasure-map-experiences">
          {/* Punto de inicio */}
          <div className="treasure-map-start">
            <div className={`start-marker ${darkMode ? 'dark' : 'light'}`}>
              <span className="start-text">{timelineTexts.start || 'Inicio de mi carrera'}</span>
            </div>
          </div>

          {sortedEvents.map((event, index) => (
            <div 
              key={event.id || index} 
              className={`treasure-map-experience position-${index} ${darkMode ? 'dark' : 'light'}`}
              style={{
                '--delay': `${index * 0.3}s`,
                top: `${280 + index * 200}px`,
                [index % 2 === 0 ? 'right' : 'left']: index % 2 === 0 ? '15%' : '10%'
              }}
            >
              {/* Contenedor de la tarjeta */}
              <div className={`treasure-card ${darkMode ? 'dark' : 'light'}`}>
                {/* Fecha con estilo de pergamino */}
                <div className="treasure-date">
                  <span className="date-text">{event.date || event.period}</span>
                </div>

                {/* Logo de la empresa o icono del milestone */}
                <div className="company-treasure-logo">
                  {event.type === 'work' ? (
                    <img 
                      src={
                        event.imageUrlDark
                          ? darkMode ? event.imageUrlDark : event.imageUrlLight
                          : event.imageUrl
                      }
                      alt={event.altText}
                      className={`company-logo-img ${darkMode ? 'dark' : 'light'}`}
                    />
                  ) : (
                    <div className={`milestone-icon ${darkMode ? 'dark' : 'light'}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.8"/>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Información de la empresa o milestone */}
                <div className="treasure-info">
                  <h3 className="company-name">{event.title || event.company}</h3>
                  <h4 className="role-name">{event.description || event.role}</h4>
                  
                  {/* Información adicional */}
                  {event.institution && (
                    <p className="institution-name">{event.institution}</p>
                  )}
                  
                  {/* Logros principales */}
                  <div className="achievements-preview">
                    <span className="achievement-count">
                      {event.type === 'work' 
                        ? `${event.achievements?.length || 0} logros`
                        : event.category}
                    </span>
                  </div>
                </div>

                {/* Conectores decorativos */}
                <div className="treasure-connector"></div>
              </div>

              {/* Efectos decorativos - removidos */}
            </div>
          ))}

          {/* Estudios actuales */}
          {currentStudies.title && (
            <div 
              className={`treasure-map-experience current-studies ${darkMode ? 'dark' : 'light'}`}
              style={{
                '--delay': `${sortedEvents.length * 0.3}s`,
                top: `${280 + sortedEvents.length * 200}px`,
                [sortedEvents.length % 2 === 0 ? 'right' : 'left']: '15%'
              }}
            >
              <div className={`treasure-card ${darkMode ? 'dark' : 'light'}`}>
                <div className="treasure-date">
                  <span className="date-text">{currentStudies.period}</span>
                </div>

                <div className="company-treasure-logo">
                  <div className={`milestone-icon ${darkMode ? 'dark' : 'light'}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                      <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.8"/>
                    </svg>
                  </div>
                </div>

                <div className="treasure-info">
                  <h3 className="company-name">{currentStudies.title}</h3>
                  <h4 className="role-name">{currentStudies.description}</h4>
                </div>

                <div className="treasure-connector"></div>
              </div>

              {/* Efectos decorativos - removidos */}
            </div>
          )}

          {/* Punto final */}
          <div className="treasure-map-end">
            <div className={`end-marker ${darkMode ? 'dark' : 'light'}`}>
              <span className="end-text">{timelineTexts.present || 'Presente'}</span>
              <small className="studying-text">{timelineTexts.studying || 'Continúo estudiando...'}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineWork;