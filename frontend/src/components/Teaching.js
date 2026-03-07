import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Users, Globe, MapPin, BookOpen, Laptop } from 'lucide-react';

const Teaching = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    { name: 'Python Programming', level: 'Beginner to Advanced', icon: <BookOpen size={24} /> },
    { name: 'Django & REST APIs', level: 'Intermediate', icon: <BookOpen size={24} /> },
    { name: 'Web Development', level: 'HTML, CSS, JavaScript', icon: <Laptop size={24} /> },
    { name: 'Cybersecurity Fundamentals', level: 'Security Basics', icon: <BookOpen size={24} /> },
    { name: 'Database Management', level: 'SQL & NoSQL', icon: <BookOpen size={24} /> },
    { name: 'Computer Maintenance', level: 'Hardware & Software', icon: <BookOpen size={24} /> },
    { name: 'AutoCAD', level: 'Technical Drawing', icon: <Laptop size={24} /> },
    { name: 'ICT Packages', level: 'MS Office Suite', icon: <Laptop size={24} /> }
  ];

  return (
    <section id="teaching" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Teaching & <span className="text-gradient">Training Services</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Flexible learning options tailored to your needs</p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="online-training-card"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-tech-cyan/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-tech-cyan/10 border border-tech-cyan/30">
                  <Video size={32} className="text-tech-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">Online Training</h3>
                  <p className="text-tech-cyan">Learn from anywhere</p>
                </div>
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1771054244019-96f9db9720b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGNhbGwlMjB0ZWFjaGVyJTIwbGFwdG9wJTIwc2NyZWVuJTIwdmlld3xlbnwwfHx8fDE3NzI5MDQ1NzR8MA&ixlib=rb-4.1.0&q=85"
                alt="Online teaching"
                className="rounded-2xl mb-6 w-full h-48 object-cover border border-slate-800"
              />
              
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Globe size={20} className="text-tech-cyan mt-1 flex-shrink-0" />
                  <span>Global reach - connect from anywhere in the world</span>
                </li>
                <li className="flex items-start gap-3">
                  <Video size={20} className="text-tech-cyan mt-1 flex-shrink-0" />
                  <span>Interactive live webinars with Q&A sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen size={20} className="text-tech-cyan mt-1 flex-shrink-0" />
                  <span>Recorded sessions for flexible learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Laptop size={20} className="text-tech-cyan mt-1 flex-shrink-0" />
                  <span>One-on-one mentoring and code reviews</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            data-testid="onsite-training-card"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tech-purple/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-tech-purple/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-tech-purple/10 border border-tech-purple/30">
                  <Users size={32} className="text-tech-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">On-Site Training</h3>
                  <p className="text-tech-purple">Hands-on workshops</p>
                </div>
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1758685848521-ff7e4d136384?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcmVzZW50aW5nJTIwd2hpdGVib2FyZCUyMG1vZGVybiUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3NzI5MDQ1NzN8MA&ixlib=rb-4.1.0&q=85"
                alt="On-site teaching"
                className="rounded-2xl mb-6 w-full h-48 object-cover border border-slate-800"
              />
              
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-tech-purple mt-1 flex-shrink-0" />
                  <span>Corporate training at your office location</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={20} className="text-tech-purple mt-1 flex-shrink-0" />
                  <span>Hands-on bootcamps and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen size={20} className="text-tech-purple mt-1 flex-shrink-0" />
                  <span>University and institution lectures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Laptop size={20} className="text-tech-purple mt-1 flex-shrink-0" />
                  <span>Practical lab sessions with real equipment</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Courses Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                data-testid={`course-${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-tech-cyan/50 transition-all"
              >
                <div className="text-tech-cyan mb-3">{course.icon}</div>
                <h4 className="font-bold text-slate-100 mb-2">{course.name}</h4>
                <p className="text-sm text-slate-400">{course.level}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <p className="text-xl text-slate-300 mb-6">
              Ready to start your learning journey or book a training session?
            </p>
            <a
              href="#contact"
              data-testid="book-class-button"
              className="inline-block rounded-full bg-tech-cyan hover:bg-cyan-500 text-white font-medium px-8 py-3 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              Book a Class Now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Teaching;