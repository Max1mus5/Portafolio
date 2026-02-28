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
import vue from '../../assets/vue-icon.svg';
import azure from '../../assets/azure-icon.svg';
import rive from '../../assets/rive-icon.jpg';
import jira from '../../assets/jira-icon.svg';
import confluence from '../../assets/confluence-icon.svg';
import docker from '../../assets/docker-icon.svg';
import tailwind from '../../assets/tailwind-icon.svg';
import github from '../../assets/github-icon.svg';
import vscode from '../../assets/visual-studio-code-icon.svg';
import claude from '../../assets/claude-icon.svg';
import './technologies.css';

// Technology data structure for better maintainability
const techStacks = {
  frontend: [
    { icon: html5, name: "HTML 5", className: "html5" },
    { icon: css3, name: "CSS 3", className: "css3t" },
    { icon: js, name: "JavaScript", className: "javascript" },
    { icon: react_icon, name: "React", className: "react" },
    { icon: vue, name: "Vue", className: "vue" },
    { icon: tailwind, name: "Tailwind", className: "tailwind" }
  ],
  backend: [
    { icon: node, name: "Node.js", className: "node-js" },
    { icon: mysql, name: "MySQL", className: "database" },
    { icon: mongodb, name: "MongoDB", className: "database" },
    { icon: dj, name: "Django", className: "django" },
    { icon: python, name: "Python", className: "django" },
    { icon: docker, name: "Docker", className: "docker" }
  ],
  tools: [
    { icon: git, name: "Git", className: "git" },
    { icon: postman, name: "Postman", className: "code" },
    { icon: figma, name: "Figma", className: "figma" },
    { icon: azure, name: "Azure", className: "azure" },
    { icon: rive, name: "Rive", className: "rive" },
    { icon: jira, name: "Jira", className: "jira" } ,
    { icon: confluence, name: "Confluence", className: "confluence" },
    { icon: github, name: "Github", className: "github" },
    { icon: vscode, name: "VS Code", className: "code" },
    { icon: claude, name: "Claude", className: "code" }
  ]
};

// TechnologySection component for each stack section
const TechnologySection = ({ title, technologies, darkMode }) => (
  <div className={`technologies ${darkMode ? 'dark' : 'light'} ${title.toLowerCase()}`}>
    <h2 className={`tech-title ${darkMode ? 'dark' : 'light'}`}>{title}</h2>
    <div className="icon-grid-view">
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index} className="tech-item">
            <i className={`icon ${tech.className}`}></i>
            <img 
              title={tech.name}
              className="icon-img-tech"
              src={tech.icon}
              alt={tech.name}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Main Technologies component
const Technologies = ({ darkMode = true }) => {
  return (
    <section className={`technologies-section ${darkMode ? 'dark' : 'light'}`} id="technologies">
      <div className="topflex-technologies-section">
        <TechnologySection 
          title="Front-End"
          technologies={techStacks.frontend}
          darkMode={darkMode}
        />
        <TechnologySection 
          title="Back-End"
          technologies={techStacks.backend}
          darkMode={darkMode}
        />
      </div>
      <TechnologySection 
        title="Tools"
        technologies={techStacks.tools}
        darkMode={darkMode}
      />
    </section>
  );
};

export default Technologies;