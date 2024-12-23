import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';

const AboutMe = ({ darkMode }) => {
  const [emailcopied, setEmailcopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation('about');

  const copiedEmail = () => {
    const email = "jeronimoriveros@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log(t('about.social.email.copied'));
        setEmailcopied(true);
        setTimeout(() => {
          window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
          setEmailcopied(false);
        }, 1500);
      })
      .catch(err => {
        console.error(t('about.social.email.error'), err);
      });
  };

  const technologies = t('about.description.techList').split(',').map(tech => tech.trim());

  const renderHighlightedDescription = () => (
    <p 
      className="highlight-description effect" 
      id={darkMode ? "aboutme-little-description-ligth" : "aboutme-little-description-content"}
    >
      <span>{t('about.description.intro')}&nbsp;</span>
      <span>
        <span className="highlight-role">{t('about.description.role')}</span>&nbsp;
      </span>
      <span>{t('about.description.withSkills')}&nbsp;</span> 
      <span>
        {technologies.map((tech, index) => (
          <React.Fragment key={tech}>
            <span className="highlight-tech">{tech}</span>
            {index < technologies.length - 1 ? ', ' : ' '}
          </React.Fragment>
        ))}
      </span>
      <span>{t('about.description.andOthers')}&nbsp;</span>
      
      <span>
        {t('about.description.focus.prefix')}&nbsp;
        <span className="highlight-skill">{t('about.description.focus.skill1')}</span>&nbsp;
        {t('about.description.focus.and')}&nbsp;
        <span className="highlight-skill">{t('about.description.focus.skill2')}</span>.&nbsp;
      </span>
      
      <span>
        {t('about.description.abilities.prefix')}&nbsp;
        <span className="highlight-soft">{t('about.description.abilities.soft1')}</span>&nbsp;
        {t('about.description.abilities.and')}&nbsp;
        <span className="highlight-soft">{t('about.description.abilities.soft2')}</span>&nbsp;
        {t('about.description.abilities.suffix')}&nbsp;
      </span>
      
      <span>
        {t('about.description.growth.prefix')}&nbsp;
        <span className="highlight-growth">{t('about.description.growth.growth1')}</span>&nbsp;
        {t('about.description.growth.and')}&nbsp;
        <span className="highlight-growth">{t('about.description.growth.growth2')}</span>.&nbsp;
      </span>
      
      <span>
        {t('about.description.attitude.prefix')}&nbsp;
        <span className="highlight-attitude">{t('about.description.attitude.att1')}</span>&nbsp;
        {t('about.description.attitude.and')}&nbsp;
        <span className="highlight-attitude">{t('about.description.attitude.att2')}</span>,&nbsp;
        {t('about.description.attitude.suffix')}
      </span>
    </p>
  );

  return (
    <section className="aboutme-section" id="aboutme">
      <div className="aboutme-grid-section">
        <div className="presentation">
          <button className={darkMode ?"button ligthModePresentation":"button effect"} data-text={t('about.title.role')}>
            <span className="actual-text">&nbsp;{t('about.title.name')}&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;{t('about.title.role')}&nbsp;</span>
          </button>
          <div className="effect aboutme-icons">
            <a 
              className="contact-icon"
              href="https://github.com/Max1mus5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={darkMode ? "github_ligth" : "github"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>{t('about.social.github')}</title>
                <g id="Page-1" stroke="none" strokeWidth="1">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a 
              className="contact-icon"
              title={t('about.social.linkedin')}
              href="https://www.linkedin.com/in/jeronimo-riveros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={darkMode ? "linkedin-ligth" :"linkedin"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className={darkMode ? "linkedin-background" : "linkedin-background-ligth"} clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"/>
                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"/>
                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
                <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" />
              </svg>
            </a>
            <div className="email-icon">
              <button 
                className="contact-icon email" 
                title={t('about.social.email.title')}
                onClick={copiedEmail}
              >
                <svg className={darkMode ?  "email-svg-ligth" : "email-svg"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.410l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .640V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.500s.010-.335.025-.500zM3 16.293V5.901l5.871 4.520zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.500 4.403 4.403 0 0 0 .050.500 4.49 4.49 0 0 0 4.450 4h.500v-1h-.500a3.495 3.495 0 0 1-3.450-3 3.455 3.455 0 0 1-.050-.500 3.498 3.498 0 0 1 5.947-2.500H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.500v-1a4.555 4.555 0 0 0-4.5-4.500zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.500 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.500 1.498 1.498 0 0 1-1.408 1zm3.5-.500a.500.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"/>
                  <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
              </button>
              <div className={darkMode ? "copied-light" :"copied"}>
                {emailcopied ? t('about.social.email.copied') : ""}
              </div>
            </div>
          </div>
        </div>

        <div 
          className="aboutme-little-description"
        >
          <p 
            className={`default-description effect ${darkMode ? "aboutme-little-description-ligth" : "aboutme-little-description-content"}`}
          >
            {t('about.description.full')}
          </p>
          {renderHighlightedDescription()}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;