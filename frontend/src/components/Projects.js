import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'EduCore - Learning Management System',
      description: 'Production-ready LMS backend API with JWT authentication, role-based access control, and course management. Built using Django Rest Framework with TDD approach.',
      tech: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'TDD', 'Pytest'],
      github: 'https://github.com/mosese-maker/EduCore-LMS-Backend-API-Django-DRF-',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
      featured: true
    },
    {
      title: 'SmartSearch - Full-Text Search API',
      description: 'High-performance REST API implementing PostgreSQL full-text search with tsvector and GIN indexes. Achieved 60% faster search response times through optimization.',
      tech: ['Django', 'PostgreSQL', 'SQL Optimization', 'Full-Text Search'],
      github: 'https://github.com/mosese-maker/smartsearch-api',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      featured: true
    },
    {
      title: 'SecureShop - E-Commerce Backend',
      description: 'Secure e-commerce backend with product catalog, cart, and order management. Integrated Stripe payment gateway with webhook verification.',
      tech: ['Django', 'PostgreSQL', 'Stripe API', 'REST API'],
      github: 'https://github.com/mosese-maker',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      featured: false
    },
    {
      title: 'Python Automation Tools',
      description: 'Collection of Python tools for data extraction, web scraping, and process automation. Used for educational purposes and client projects.',
      tech: ['Python', 'Selenium', 'BeautifulSoup', 'APIs'],
      github: 'https://github.com/mosese-maker',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Real-world applications built with modern technologies</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-tech-cyan/30 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-tech-cyan/20 border border-tech-cyan text-tech-cyan text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-tech-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-tech-cyan border border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-tech-cyan transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mosese-maker"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="view-all-projects-button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 hover:border-tech-cyan text-slate-300 hover:text-white px-8 py-3 transition-all"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;