import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Adala Moses</h3>
            <p className="text-slate-400 leading-relaxed">
              ICT & Engineering Lecturer | Backend Developer | Technology Trainer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-tech-cyan transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-tech-cyan transition-colors">Skills</a></li>
              <li><a href="#teaching" className="text-slate-400 hover:text-tech-cyan transition-colors">Teaching</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-tech-cyan transition-colors">Projects</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-tech-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/mosese-maker"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-github-link"
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all"
                aria-label="GitHub"
              >
                <Github size={20} className="text-slate-300 hover:text-tech-cyan transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/moses-omoto-adala"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin-link"
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-slate-300 hover:text-tech-cyan transition-colors" />
              </a>
              <a
                href="mailto:mosesomoto@gmail.com"
                data-testid="footer-email-link"
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all"
                aria-label="Email"
              >
                <Mail size={20} className="text-slate-300 hover:text-tech-cyan transition-colors" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Available for remote and on-site opportunities
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {currentYear} Adala Moses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;