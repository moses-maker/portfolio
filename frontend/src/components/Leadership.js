import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      icon: <TrendingUp size={32} />,
      title: '50% Cost Reduction',
      description: 'Reduced ICT lab repair costs through preventive maintenance programs'
    },
    {
      icon: <Users size={32} />,
      title: '90% Student Retention',
      description: 'Achieved exceptional retention through hands-on practical training'
    },
    {
      icon: <Award size={32} />,
      title: '95% Satisfaction',
      description: 'Maintained high student satisfaction through project-based teaching'
    },
    {
      icon: <Target size={32} />,
      title: '15% Engagement Boost',
      description: 'Improved student engagement with technology-driven learning tools'
    }
  ];

  return (
    <section id="leadership" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Leadership <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">Driving innovation in ICT education</p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwbGVhZGVyc2hpcCUyMG1lZXRpbmclMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzcyOTA0NTY0fDA&ixlib=rb-4.1.0&q=85"
              alt="Leadership"
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 text-slate-100">Head of ICT & Engineering Department</h3>
              <p className="text-tech-cyan text-lg mb-4">East Africa Institute of Certified Studies</p>
              <p className="text-slate-400 mb-2">September 2022 - Present</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2"></div>
                <p className="text-slate-300">Managing comprehensive ICT training programs for students and professionals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2"></div>
                <p className="text-slate-300">Coordinating lecturers and technical staff to deliver quality education</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2"></div>
                <p className="text-slate-300">Developing and updating technical curricula to match industry standards</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2"></div>
                <p className="text-slate-300">Organizing student technical exhibitions and coding competitions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-tech-cyan mt-2"></div>
                <p className="text-slate-300">Leading departmental technology initiatives and laboratory management</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              data-testid={`achievement-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-tech-cyan/50 transition-all text-center"
            >
              <div className="text-tech-cyan mb-4 flex justify-center">{achievement.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-slate-100">{achievement.title}</h4>
              <p className="text-sm text-slate-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;