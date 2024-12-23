import html5 from '../../assets/html-icon.svg';
import css3 from '../../assets/css3-icon.svg';
import js from '../../assets/js-icon.svg';
import react_icon from '../../assets/react-icon.svg';
import node from '../../assets/node-icon.svg';
import mysql from '../../assets/mysql-icon.svg';
import mongodb from '../../assets/mongodb-icon.svg';
import dj from '../../assets/dj-icon.svg';
import python from '../../assets/python-icon.svg';
import git from '../../assets/git-icon.svg';
import postman from '../../assets/postman-icon.svg';
import figma from '../../assets/figma-icon.svg';
import './technologies.css';

const Technologies = ({ darkMode = true }) => {
  return (
    <section className="tecnologies-section" id="tecnologies">
      <div className="topflex-tecnologies-section">
        <div className={darkMode ? "tecnologies tech tech" : "tecnologies tech-ligth tech"}>
          <h2 className={darkMode ? '' : 'tecnologies-title-ligth'}>Front-End</h2>
          <div className="icon-grid-view">
            <ul>
              <li>
                <i className="icon html5"></i>
                <img title="html 5" className="icon-img-tech" src={html5} alt="html 5" />
              </li>
              <li>
                <i className="icon css3t"></i>
                <img title="css 3" className="icon-img-tech" src={css3} alt="css 3" />
              </li>
              <li>
                <i className="icon javascript"></i>
                <img title="Java Script" className="icon-img-tech" src={js} alt="Java Script" />
              </li>
              <li>
                <i className="icon react"></i>
                <img title="React" className="icon-img-tech" src={react_icon} alt="React" />
              </li>
            </ul>
          </div>
        </div>
        <div className={darkMode ? "tecnologies tech tech" : "tecnologies tech-ligth tech"}>
          <h2 className={darkMode ? '' : 'tecnologies-title-ligth'}>Back-End</h2>
          <div className="icon-grid-view">
            <ul>
              <li>
                <i className="icon node-js"></i>
                <img title="Node Js" className="icon-img-tech" src={node} alt="Node Js" />
              </li>
              <li>
                <i className="icon database"></i>
                <img title="MySQL" className="icon-img-tech" src={mysql} alt="MySQL" />
              </li>
              <li>
                <i className="icon database"></i>
                <img title="Mongo Db" className="icon-img-tech" src={mongodb} alt="Mongo Db" />
              </li>
              <li>
                <i className="icon django"></i>
                <img title="Django" className="icon-img-tech" src={dj} alt="Django" />
              </li>
              <li>
                <i className="icon django"></i>
                <img title="Python" className="icon-img-tech" src={python} alt="Python" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={darkMode ? "tecnologies tools" : "tecnologies tools tech-ligth"}>
        <h2 className={darkMode ? '' : 'tecnologies-title-ligth'}>Tools</h2>
        <div className="icon-grid-view">
          <ul>
            <li>
              <i className="icon git"></i>
              <img className="icon-img-tech" src={git} alt="Git" />
            </li>
            <li>
              <i className="icon code"></i>
              <img className="icon-img-tech" src={postman} alt="Postman" />
            </li>
            <li>
              <i className="icon figma"></i>
              <img className="icon-img-tech" src={figma} alt="Figma" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;