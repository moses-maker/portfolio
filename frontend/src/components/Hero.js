import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/resume/download`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Adala_Moses_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-transparent to-tech-purple/10"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-glow animation-delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Architecting Systems,{' '}
              <span className="text-gradient">Educating Minds</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-4">
              ICT & Engineering Lecturer | Backend Developer | Technology Trainer
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Passionate about teaching technology, developing scalable backend solutions, 
              and empowering students with real-world digital skills through online and on-site training.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadResume}
                data-testid="download-resume-button"
                className="rounded-full bg-tech-cyan hover:bg-cyan-500 text-white font-medium px-8 py-3 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                data-testid="contact-me-button"
                className="rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 bg-transparent transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a
                href="#projects"
                data-testid="view-projects-button"
                className="rounded-full border border-slate-700 hover:border-tech-purple text-slate-300 hover:text-white px-8 py-3 bg-transparent transition-all"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan to-tech-purple opacity-20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwZGFyayUyMG1vZGV8ZW58MHx8fHwxNzcyOTA0NTYyfDA&ixlib=rb-4.1.0&q=85"
                alt="Coding workspace"
                className="relative rounded-3xl shadow-2xl border border-slate-800 animate-float"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-slate-400 hover:text-tech-cyan transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;