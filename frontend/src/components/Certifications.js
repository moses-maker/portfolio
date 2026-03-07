import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = {
    degree: 'Bachelor of Science - Computer Security & Forensics',
    institution: 'Jaramogi Oginga Odinga University of Science and Technology',
    icon: <Award size={40} className="text-tech-cyan" />
  };

  const certifications = [
    { name: 'Python Django Developer', provider: 'LinkedIn Learning', category: 'Web Development' },
    { name: 'Python Essentials', provider: 'Cisco Networking Academy', category: 'Programming' },
    { name: 'Full Stack Web Development with Flask', provider: 'LinkedIn Learning', category: 'Web Development' },
    { name: 'Python Developer', provider: 'Sololearn', category: 'Programming' },
    { name: 'Database Administrator', provider: 'MongoDB University', category: 'Database' },
    { name: 'Node.js Developer Track', provider: 'MongoDB University', category: 'Backend' },
    { name: 'SQL (Basic & Intermediate)', provider: 'HackerRank', category: 'Database' },
    { name: 'REST API (Intermediate)', provider: 'HackerRank', category: 'Backend' },
    { name: 'React (Basic)', provider: 'HackerRank', category: 'Frontend' },
    { name: 'Deep Learning Using Python', provider: 'Udacity', category: 'AI/ML' },
    { name: 'Scientific Computing with Python', provider: 'freeCodeCamp', category: 'Programming' },
    { name: 'Open-Source Masterclass', provider: 'Certificate of Completion', category: 'Development' }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Continuous learning and professional development</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-tech-cyan/10 border border-tech-cyan/30">
              {education.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">{education.degree}</h3>
              <p className="text-tech-cyan text-lg">{education.institution}</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-100">
                <span className="text-tech-cyan">{category}</span> Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications
                  .filter(cert => cert.category === category)
                  .map((cert, index) => (
                    <div
                      key={cert.name}
                      data-testid={`certification-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-tech-cyan/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-tech-cyan mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-100 mb-1">{cert.name}</h4>
                          <p className="text-sm text-slate-400">{cert.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;