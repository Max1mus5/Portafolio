import {useEffect, useState} from "react";
import "./portafolio.css";
import Navbar from "./Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import ProjectSection from "./ProjectCards/ProjectCard";
import Technologies from "./Technologies/Technologies";

import logo from "../assets/logo-black.svg";
import react_icon from "../assets/react-icon.svg";
import python from "../assets/python-icon.svg";
import css3 from "../assets/css3-icon.svg";
import dj from "../assets/dj-icon.svg";
import figma from "../assets/figma-icon.svg";
import git from "../assets/git-icon.svg";
import html5 from "../assets/html-icon.svg";
import mongodb from "../assets/mongodb-icon.svg";
import node from "../assets/node-icon.svg";
import postman from "../assets/postman-icon.svg";
import js from "../assets/js-icon.svg";
import mysql from "../assets/mysql-icon.svg";

const Portafolio = ({ language, darkMode, toggleDarkMode }) => {
  const [emailcopied, setEmailcopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'ligth' : darkMode;
  });

  useEffect(() => {
    setIsDarkMode(darkMode);
    window.localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  }, [darkMode]);

  const copiedEmail = () => {
  const email = "jeronimoriveros@gmail.com";
  navigator.clipboard.writeText(email)
    .then(() => {
      console.log("Email copiado");
      setEmailcopied(true);
      setTimeout(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
        setEmailcopied(false);
      }, 1500);
      
    })
    .catch(err => {
      console.error('Error al copiar el email: ', err);
    });
}
  

  return(
    <div className="fullcontent" style={{backgroundColor: darkMode ? "#1a1a1a" : "white"}}>
      {isDarkMode ? (
        <section className="portafolio-scroll">
        <Navbar toggleLanguage={language} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <AboutMe />
        
        <header className="projects-header">
            <h1 id="project-title">Proyectos</h1>
            <p id="project-text">Algunos proyectos que he desarrollado</p>
        </header>

        <ProjectSection darkMode={darkMode} />

        <header className="tecnologies-header">
          <h1 id="tecnologies-title">Tecnologías</h1>
        </header>

        <Technologies darkMode={darkMode} />


        <footer className="footer" id="dark"> 
          <div className="footer-credits">
            <p>© 2024 Jeronimo Riveros.</p>
            <p>Todos los derechos Reservados</p>
            <p>Hecho con React</p>
          </div>
          <div className="footer-contact">
          <div className="footer-icons">
              <div className="email-icon">
                <button className="contact-icon email" title="Copiar Email" onClick={copiedEmail}>
                  <svg className="email-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"/><path fill="none" d="M0 0h24v24H0z"/>
                  </svg>
                </button>
                <div className="copied">{emailcopied ? "Copiado" : ""}</div>
              </div>

              <div className="updated">
                Última Actualización: 18 de Marzo del 2024
              </div>
          </div>
          </div>
        </footer>
      </section>
      )
      :
      (
      <section className="portafolio-scroll back">
        <nav id="main-navbar">
            <div className="icon-name">
            <img className="logoportafolio" src={logo} alt="Logo" />  
            </div>
            <div className="navbar-features">
              <button onClick={language} title="Traduce"><span className="traduce-icon ligthModeTraduce">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
</span></button>
              <button title="Switch theme" onClick={toggleDarkMode} ><span className="moon-theme-icon">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></button>
              <a className="ligth_Mode" href="https://drive.google.com/file/d/1hf0yYf3hkurcMUsJNodRmKFDWQm6Savl/view" target='_blank'><span className="icon_download">
              <svg fill="white" width="30px" height="30px" viewBox="-1.6 -1.6 19.20 19.20" id="download-cloud-16px" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00016" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"/>

<g id="SVGRepo_iconCarrier"> <path id="Path_129" data-name="Path 129" d="M-9.146,7.646a.5.5,0,0,1,0,.708l-2.5,2.5a.518.518,0,0,1-.163.109A.5.5,0,0,1-12,11a.5.5,0,0,1-.191-.038.518.518,0,0,1-.163-.109l-2.5-2.5a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0L-12.5,9.293V6.5A.5.5,0,0,1-12,6a.5.5,0,0,1,.5.5V9.293l1.646-1.647A.5.5,0,0,1-9.146,7.646ZM-4,10a3,3,0,0,1-3,3H-17.5A2.5,2.5,0,0,1-20,10.5,2.5,2.5,0,0,1-17.5,8a2.46,2.46,0,0,1,.5.052V8a5.006,5.006,0,0,1,5-5A4.967,4.967,0,0,1-7.122,7,3,3,0,0,1-4,10Zm-1,0A2,2,0,0,0-7,8a1.987,1.987,0,0,0-.436.052.508.508,0,0,1-.4-.084.507.507,0,0,1-.2-.356A3.973,3.973,0,0,0-12,4a4,4,0,0,0-4,4v.777a.5.5,0,0,1-.251.434.5.5,0,0,1-.5,0A1.47,1.47,0,0,0-17.5,9,1.5,1.5,0,0,0-19,10.5,1.5,1.5,0,0,0-17.5,12H-7A2,2,0,0,0-5,10Z" transform="translate(19 0)"/> </g>

</svg>
</span>Descargar CV</a> 
            </div>
        </nav>
        <section className="aboutme-section" id="aboutme">
        <div className="aboutme-grid-section">
        <div className="presentation">
          <button className="button ligthModePresentation" data-text="Dessarrollador Fullstack">
              <span className="actual-text">&nbsp;Jerónimo Riveros&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Fullstack Dev&nbsp;</span>
          </button>
          <div className="effect aboutme-icons">
              <a className="contact-icon " href="https://github.com/Max1mus5" target="_blank">
                <svg className="github_ligth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

                  <title>Github</title>
                  <desc>Created with Sketch.</desc>
                  <defs>

              </defs>
                  <g id="Page-1" stroke="none" stroke-width="1">
                      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                              </path>
                          </g>
                      </g>
                  </g>
                </svg>
              </a>
              <a className="contact-icon " title="Linkedin" href="https://www.linkedin.com/in/jeronimo-riveros" target="_blank">
                <svg className="linkedin-ligth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className="linkedin-background-ligth" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"/>
                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"/>
                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
                <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"  />
                
                </svg>
              </a>
              <div className="email-icon">
                <button className="contact-icon email" title="Copiar Email" onClick={copiedEmail}>
                  <svg className="email-svg-ligth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"/><path fill="none" d="M0 0h24v24H0z"/>
                  </svg>
                </button>
                <div className="copied-light">{emailcopied ? "Copiado" : ""}</div>
              </div>
          </div>
        </div>



          <div className="aboutme-little-description">
            <p className="effect" id="aboutme-little-description-ligth">
              Soy un desarrollador Full Stack con habilidades en tecnologías clave como JavaScript, React, Node.js, Express, MySQL, entre otras. Mi enfoque se centra en la resolución efectiva de problemas y en superar la expectativas. Me destaco por mi capacidad para colaborar en equipo y adaptarme rápidamente a nuevos entornos y tecnologías. Busco constantemente oportunidades para expandir mi conocimiento y mejorar mis habilidades técnicas. Con una actitud proactiva y un compromiso con la excelencia, estoy preparado para enfrentar desafíos y contribuir al éxito de cualquier proyecto en el que participe.
            </p>
          </div>
        </div>
        </section>

        <header className="projects-header-ligth">
            <h1 id="project-title">Proyectos</h1>
            <p id="project-text">Algunos proyectos que he desarrollado</p>
        </header>

        <section className="projects-section-ligth"  id="projects">
          <div className="project" id="project-ligth">
            <div className="header-project">
              <div className="project-type">
              <span id="spanligth" >Personal Proyect</span>  
                            </div>

              <div className="project-links">
                
              <a href="https://github.com/Max1mus5/MasterVault" target="_blank">
              <svg className="github-project" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Github</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                            </path>
                        </g>
                    </g>
                </g>
                </svg>
              </a>
              <a href="https://mastervault.vercel.app/" title="MasterVault Demo"><span target="_blanck" className="link_icon">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span></a>
              </div>
            </div>
              <div className="project-details">
                <h2 className="title">MasterVault</h2>
                <p>Administrador y Generador de contraseñas</p>
                  <div className="tecnologies-icons" id="tecnologies-ligth">
                  <span className="icon_tech"><img src={react_icon} alt="react_icon" /></span>
                  <span className="icon_tech"><img src={python} alt="" /></span>
                  <span className="icon_tech"><img src={css3} alt="" /></span>
                  </div>
                <div className="image-project">
                <img className="img" src="https://raw.githubusercontent.com/Max1mus5/MasterVault/master/react_password_components/src/img/MasterVault_Slogan.png" alt="masterVault" />
                </div>  
              </div>
          </div>

          <div className="project" id="project-ligth">
            <div className="header-project">
              <div className="project-type">
              <span id="spanligth" >Personal Proyect</span>  
                            </div>

              <div className="project-links">
                
              <a href="https://github.com/Max1mus5/weather-app" target="_blank">
              <svg className="github-project" xmlns="http://www.w3.org/2000/
              svg" viewBox="0 0 24 24">
                                <title>Github</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                            </path>
                        </g>
                    </g>
                </g>
                </svg>
              </a>
              <a href="https://climj.vercel.app/" target="_blank" title="ClimJ Demo"><span className="link_icon">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span></a>
              </div>
            </div>
              <div className="project-details">
                <h2 className="title">Clim-J</h2>
                <p>Una aplicación simple para consultar el pronóstico del tiempo en tiempo real</p>
                <div className="tecnologies-icons">
                  <span className="icon_tech climj"><img src={react_icon} alt="react_icon" /></span>
                  <span className="icon_tech climj"><img src={css3} alt="" /></span>
                </div>
                <div className="image-project">
                <img className="img" src="https://github.com/Max1mus5/weather-app/assets/75461653/6cbdb56f-3d2a-487e-9ecf-6437b930087b" alt="ClimJ" />
                </div>
              </div>
            
          </div>
        </section>

        <header className="tecnologies-header">
          <h1 id="tecnologies-title" className="tecnologies-title-ligth">Tecnologías</h1>
        </header>

        <section className="tecnologies-section" id="tecnologies">
          <div className="topflex-tecnologies-section">
           <div className={darkMode ?"tecnologies tech tech" :"tecnologies tech-ligth tech "}>
              <h2>Front-End</h2>
              <div className="icon-grid-view">
                <ul>
                <li><i className="icon html5"></i> <img title="html 5" className="icon-img-tech" src={html5} alt="html 5" /></li>
                <li><i className="icon css3t"></i> <img title="css 3" className="icon-img-tech" src={css3} alt="css 3" /></li>
                <li><i className="icon javascript"></i> <img title="Java Script" className="icon-img-tech" src={js} alt="Java Script" /></li>
                <li><i className="icon react"></i> <img title="React" className="icon-img-tech" src={react_icon} alt="React" /></li>
              </ul>
              </div>
            </div>
           <div className={darkMode ?"tecnologies tech tech" :"tecnologies tech-ligth tech "}>
              <h2>Back-End</h2>
              <div className="icon-grid-view">
                <ul>
                <li><i className="icon node-js"></i> <img title="Node Js" className="icon-img-tech" src={node} alt="Node Js" /></li>
                <li><i className="icon database"></i> <img title="MySQL" className="icon-img-tech" src={mysql} alt="MySQL" /></li>
                <li><i className="icon database"></i> <img title="Mongo Db" className="icon-img-tech" src={mongodb} alt="Mongo Db" /></li>
                <li><i className="icon django"></i> <img title="Django" className="icon-img-tech" src={dj} alt="Django" /></li>
                <li><i className="icon django"></i> <img title="Python" className="icon-img-tech" src={python} alt="Python" /></li>
              </ul>
              </div>
            </div>
          </div>
           <div className={darkMode ? "tecnologies tech-ligth tools" :"tecnologies tools tech-ligth"}>
            <h2>Tools</h2>
            <div className="icon-grid-view">
              <ul>
              <li><i className="icon git"></i> <img className="icon-img-tech" src={git} alt="" /></li>
              <li><i className="icon code"></i> <img className="icon-img-tech" src={postman} alt="" /></li>
              <li><i className="icon figma"></i> <img className="icon-img-tech" src={figma} alt="" /></li>
            </ul>
            </div>
          </div>
        </section>

        <footer className="footer light-footer" id="light"> 
          <div className="footer-credits">
            <p>© 2024 Jeronimo Riveros.</p>
            <p>Todos los derechos Reservados</p>
            <p>Hecho con React</p>
          </div>
          <div className="footer-contact">
          <div className="footer-icons">
              <div className="email-icon">
                <button className="contact-icon email" title="Copiar Email" onClick={copiedEmail}>
                  <svg className="email-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"/><path fill="none" d="M0 0h24v24H0z"/>
                  </svg>
                </button>
                <div className="copied-light">{emailcopied ? "Copiado" : ""}</div>
              </div>

              <div className="updated">
                Última Actualización: 18 de Marzo del 2024
              </div>
          </div>
          </div>
        </footer>

      </section>

      
      )
      }
      
    </div>
  )
  

}

export default Portafolio;