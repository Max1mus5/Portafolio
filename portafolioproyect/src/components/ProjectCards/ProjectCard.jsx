import { useTranslation } from 'react-i18next';
import react_icon from '../../assets/react-icon.svg';
import python from '../../assets/python-icon.svg';
import css3 from '../../assets/css3-icon.svg';
import './project.css';

// SVG Components for better organization and reusability
const GithubIcon = () => (
  <svg className="github-project" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Github</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1">
      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
        </g>
      </g>
    </g>
  </svg>
);

const LinkIcon = () => (
  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" 
      stroke="#000000" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Project data structure with translations
const createProjectsData = (t) => [
  {
    id: 1,
    type: t('projects.personal'),
    title: 'MasterVault',
    description: t('projects.mastervault.description'),
    githubLink: 'https://github.com/Max1mus5/MasterVault',
    demoLink: 'https://mastervault.vercel.app/',
    technologies: [
      { icon: react_icon, alt: 'react_icon' },
      { icon: python, alt: 'python' },
      { icon: css3, alt: 'css3' }
    ],
    imageUrl: 'https://raw.githubusercontent.com/Max1mus5/MasterVault/master/react_password_components/src/img/MasterVault_Slogan.png',
    altText: 'masterVault'
  },
  {
    id: 2,
    type: t('projects.personal'),
    title: 'Clim-J',
    description: t('projects.climj.description'),
    githubLink: 'https://github.com/Max1mus5/weather-app',
    demoLink: 'https://climj.vercel.app/',
    technologies: [
      { icon: react_icon, alt: 'react_icon' },
      { icon: css3, alt: 'css3' }
    ],
    imageUrl: 'https://github.com/Max1mus5/weather-app/assets/75461653/6cbdb56f-3d2a-487e-9ecf-6437b930087b',
    altText: 'ClimJ'
  }
];

const ProjectCard = ({ project, darkMode = false }) => {
  return (
    // Main project container with theme-based styling
    <div className={`project ${darkMode ? 'dark' : 'light'}`}>
      {/* Project header section */}
      <div className="header-project">
        {/* Project type indicator */}
        <div className="project-type">
          <span className={`project-type-label ${darkMode ? 'dark' : 'light'}`}>
            {project.type}
          </span>  
        </div>

        {/* Project links section */}
        <div className="project-links">
          {/* GitHub repository link */}
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            title="View Source Code"
          >
            <GithubIcon />
          </a>
          {/* Live demo link */}
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            title={`${project.title} Demo`}
            className="project-link"
          >
            <span className="link_icon">
              <LinkIcon />
            </span>
          </a>
        </div>
      </div>

      {/* Project details section */}
      <div className="project-details">
        {/* Project title with animation */}
        <h2 className="title animated-element">{project.title}</h2>
        
        {/* Project description with animation */}
        <p className="project-description animated-element">
          {project.description}
        </p>

        {/* Technologies used section */}
        <div className={`technologies-icons ${darkMode ? 'dark' : 'light'}`}>
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`icon_tech animated-element ${
                project.title === 'Clim-J' ? 'climj' : ''
              }`}
            >
              <img 
                src={tech.icon} 
                alt={tech.alt} 
                title={tech.alt} // Added tooltip for better accessibility
              />
            </span>
          ))}
        </div>

        {/* Project image section */}
        <div className="image-project animated-element">
          <img 
            className="img" 
            src={project.imageUrl} 
            alt={project.altText}
            loading="lazy" // Added lazy loading for better performance
          />
        </div>  
      </div>
    </div>
  );
};

// Main ProjectSection Component
const ProjectSection = ({ darkMode = true }) => {
  const { t } = useTranslation('projects');
  const projects = createProjectsData(t);

  return (
    <section 
      className={`projects-section ${darkMode ? 'dark' : 'light'}`} 
      id="projects"
    >
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          darkMode={darkMode} 
        />
      ))}
    </section>
  );
};

export default ProjectSection;