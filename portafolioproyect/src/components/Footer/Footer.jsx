import { useTranslation } from 'react-i18next';
import './footer.css';

// Email icon component extracted for better maintainability
const EmailIcon = () => (
  <svg className="email-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
  </svg>
);

const Footer = ({ darkMode, emailcopied, handleEmailCopy }) => {
  const { t } = useTranslation('footer');
  
  // Format current date based on locale
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(t('locale'), { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      {/* Credits Section */}
      <div className="footer-credits">
        <p className="copyright">{t('footer.copyright', { year: currentDate.getFullYear() })}</p>
        <p className="rights">{t('footer.rights')}</p>
        <p className="made-with">{t('footer.madeWith')}</p>
      </div>

      {/* Contact Section */}
      <div className="footer-contact">
        <div className="footer-icons">
          {/* Email Button */}
          <div className="email-icon">
            <button 
              className="contact-icon email" 
              title={t('footer.email.copyTitle')}
              onClick={handleEmailCopy}
              aria-label={t('footer.email.ariaLabel')}
            >
              <EmailIcon />
            </button>
            {/* Copy Confirmation Message */}
            <div className={`copy-notification ${darkMode ? 'dark' : 'light'}`}>
              {emailcopied && <span className="copied-text">{t('footer.email.copied')}</span>}
            </div>
          </div>

          {/* Last Update Information */}
          <div className="updated">
            {t('footer.lastUpdate', { date: formattedDate })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;