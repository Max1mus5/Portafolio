import logo from "../../assets/logo-black.svg";
import { useTranslation } from 'react-i18next';
import './navbar.css';


const Navbar = ({ 
  toggleLanguage, 
  darkMode, 
  toggleDarkMode 
}) => {
  const { t, i18n } = useTranslation('navbar');

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    toggleLanguage(); //actualizará el estado en el componente padre
  };
  return (
    <nav id="main-navbar">
      <div className="icon-name">
        <img className="logoportafolio" src={logo} alt="Logo" />  
      </div>
      <div className="navbar-features">
        <button onClick={toggleLanguage} title={t('navbar.translate')}>
          <span className="traduce-icon">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier">
                <path d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21" 
                  stroke={darkMode ? "white" : "black"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
        </button>
        <button title={t('navbar.switchTheme')} onClick={toggleDarkMode}>
          <span className="sun-theme-icon">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="12" r="5" stroke="#d69e2e" strokeWidth="1.5"/>
                <path d="M12 2V4" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 20V22" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 12L2 12" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M22 12L20 12" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#d69e2e" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
            </svg>
          </span>
        </button>
        <a href="https://drive.google.com/file/d/1hf0yYf3hkurcMUsJNodRmKFDWQm6Savl/view" target='_blank' rel="noopener noreferrer">
          <span className="icon_download">
            <svg fill="#000000" width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" id="download-cloud-16px" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00016" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" strokeWidth="0.192"/>
              <g id="SVGRepo_iconCarrier">
                <path id="Path_129" data-name="Path 129" d="M-9.146,7.646a.5.5,0,0,1,0,.708l-2.5,2.5a.518.518,0,0,1-.163.109A.5.5,0,0,1-12,11a.5.5,0,0,1-.191-.038.518.518,0,0,1-.163-.109l-2.5-2.5a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0L-12.5,9.293V6.5A.5.5,0,0,1-12,6a.5.5,0,0,1,.5.5V9.293l1.646-1.647A.5.5,0,0,1-9.146,7.646ZM-4,10a3,3,0,0,1-3,3H-17.5A2.5,2.5,0,0,1-20,10.5,2.5,2.5,0,0,1-17.5,8a2.46,2.46,0,0,1,.5.052V8a5.006,5.006,0,0,1,5-5A4.967,4.967,0,0,1-7.122,7,3,3,0,0,1-4,10Zm-1,0A2,2,0,0,0-7,8a1.987,1.987,0,0,0-.436.052.508.508,0,0,1-.4-.084.507.507,0,0,1-.2-.356A3.973,3.973,0,0,0-12,4a4,4,0,0,0-4,4v.777a.5.5,0,0,1-.251.434.5.5,0,0,1-.5,0A1.47,1.47,0,0,0-17.5,9,1.5,1.5,0,0,0-19,10.5,1.5,1.5,0,0,0-17.5,12H-7A2,2,0,0,0-5,10Z" transform="translate(19 0)"/>
              </g>
            </svg>
          </span>
         {t('navbar.downloadCV')}
        </a> 
      </div>
    </nav>
  );
};

export default Navbar;