import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('portfolio.projects')}
          </h2>
          {loading ? (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Portfolio;