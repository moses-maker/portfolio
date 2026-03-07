import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Shield, Wrench, FileCode, Server } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: <Server size={32} />,
      skills: ['Django', 'Django Rest Framework', 'Flask', 'RESTful API Design', 'JWT Authentication'],
      color: 'tech-cyan'
    },
    {
      title: 'Programming Languages',
      icon: <Code2 size={32} />,
      skills: ['Python', 'JavaScript', 'C', 'SQL'],
      color: 'tech-purple'
    },
    {
      title: 'Databases',
      icon: <Database size={32} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Optimization', 'Full-Text Search'],
      color: 'tech-cyan'
    },
    {
      title: 'Dev Tools',
      icon: <FileCode size={32} />,
      skills: ['Git', 'GitHub', 'Docker', 'Linux (Ubuntu)', 'TDD', 'Pytest'],
      color: 'tech-purple'
    },
    {
      title: 'Cybersecurity',
      icon: <Shield size={32} />,
      skills: ['System Security', 'Network Security', 'Secure Design', 'Computer Forensics'],
      color: 'tech-cyan'
    },
    {
      title: 'ICT & Engineering',
      icon: <Wrench size={32} />,
      skills: ['Computer Repair', 'Networking', 'CCTV Installation', 'System Troubleshooting', 'AutoCAD'],
      color: 'tech-purple'
    }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Comprehensive expertise across development and education</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:-translate-y-2 hover:border-tech-cyan/50 transition-all duration-300"
            >
              <div className={`text-${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;