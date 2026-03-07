import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            I'm <span className="text-tech-cyan font-semibold">Adala Omoto Moses</span>, 
            a results-driven <strong>Backend Developer</strong> and <strong>ICT & Engineering Lecturer</strong> with 
            over 4 years of experience in software development and education. Currently serving as a lecturer at 
            East Africa Institute of Certified Studies, I specialize in building scalable RESTful APIs using 
            Django and Django Rest Framework.
          </p>
          
          <p>
            My passion lies at the intersection of <span className="text-tech-purple font-semibold">technology education</span> and 
            <span className="text-tech-cyan font-semibold"> practical software development</span>. I believe in teaching 
            through hands-on projects that mirror real-world challenges, ensuring my students are industry-ready from day one.
          </p>
          
          <p>
            With a strong foundation in <strong>Test Driven Development (TDD)</strong>, <strong>database optimization</strong>, 
            and <strong>system security</strong>, I've successfully delivered learning management systems, e-commerce backends, 
            and high-performance search APIs. My teaching portfolio includes courses in Python, Web Development, Cybersecurity, 
            and Computer Maintenance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all">
              <h3 className="text-2xl font-bold text-tech-cyan mb-2">4+</h3>
              <p className="text-slate-400">Years of Experience</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all">
              <h3 className="text-2xl font-bold text-tech-cyan mb-2">90%+</h3>
              <p className="text-slate-400">Student Retention Rate</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all">
              <h3 className="text-2xl font-bold text-tech-cyan mb-2">10+</h3>
              <p className="text-slate-400">Courses Taught</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;