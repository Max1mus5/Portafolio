import React from 'react';
import logo from "../../assets/logo-black.svg";
import { useTranslation } from 'react-i18next';
import './navbar.css';

const Navbar = ({ 
  toggleLanguage, 
  darkMode, 
  toggleDarkMode 
}) => {
  const { t, i18n } = useTranslation('navbar');
  // Determinar el color del trazo basado en el modo oscuro/claro
  const strokeColor = darkMode ? "white" : "black";
  
  // Determinar el color de relleno para el ícono de descarga
  const downloadFill = darkMode ? "black" : "white";

  return (
    <nav id="main-navbar">
      <div className="icon-name">
        <img className="logoportafolio" src={logo} alt="Logo" />  
      </div>
      <div className="navbar-features">
        <button 
          onClick={toggleLanguage} 
          title={t('navbar.translate')}
        >
          <span className={`traduce-icon ${!darkMode ? 'ligthModeTraduce' : ''}`}>
            <svg 
              width="30px" 
              height="30px" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier">
                <path 
                  d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21" 
                  stroke={strokeColor} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
        </button>

        <button 
          title={t('navbar.switchTheme')} 
          onClick={toggleDarkMode}
        >
          <span className={darkMode ? "sun-theme-icon" : "moon-theme-icon"}>
            {darkMode ? (
              // Sol para modo oscuro
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
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
            ) : (
              // Luna para modo claro
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" 
                  stroke="#000000" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>

        <a 
          href="https://drive.google.com/file/d/1hf0yYf3hkurcMUsJNodRmKFDWQm6Savl/view" 
          target='_blank' 
          rel="noopener noreferrer"
          className={!darkMode ? 'ligth_Mode' : ''}
        >
          <span className="icon_download">
            <svg 
              fill={downloadFill}
              width="30px" 
              height="30px" 
              viewBox="-1.6 -1.6 19.20 19.20" 
              id="download-cloud-16px" 
              xmlns="http://www.w3.org/2000/svg" 
              stroke="#000000" 
              strokeWidth="0.00016"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"/>
              <g id="SVGRepo_iconCarrier">
                <path 
                  id="Path_129" 
                  data-name="Path 129" 
                  d="M-9.146,7.646a.5.5,0,0,1,0,.708l-2.5,2.5a.518.518,0,0,1-.163.109A.5.5,0,0,1-12,11a.5.5,0,0,1-.191-.038.518.518,0,0,1-.163-.109l-2.5-2.5a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0L-12.5,9.293V6.5A.5.5,0,0,1-12,6a.5.5,0,0,1,.5.5V9.293l1.646-1.647A.5.5,0,0,1-9.146,7.646ZM-4,10a3,3,0,0,1-3,3H-17.5A2.5,2.5,0,0,1-20,10.5,2.5,2.5,0,0,1-17.5,8a2.46,2.46,0,0,1,.5.052V8a5.006,5.006,0,0,1,5-5A4.967,4.967,0,0,1-7.122,7,3,3,0,0,1-4,10Zm-1,0A2,2,0,0,0-7,8a1.987,1.987,0,0,0-.436.052.508.508,0,0,1-.4-.084.507.507,0,0,1-.2-.356A3.973,3.973,0,0,0-12,4a4,4,0,0,0-4,4v.777a.5.5,0,0,1-.251.434.5.5,0,0,1-.5,0A1.47,1.47,0,0,0-17.5,9,1.5,1.5,0,0,0-19,10.5,1.5,1.5,0,0,0-17.5,12H-7A2,2,0,0,0-5,10Z" 
                  transform="translate(19 0)"
                />
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