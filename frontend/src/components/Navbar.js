import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            data-testid="logo-link"
            className="text-2xl font-bold text-gradient"
          >
            AM
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="text-slate-300 hover:text-tech-cyan transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-testid="theme-toggle-button"
              className="p-2 rounded-full border border-slate-700 hover:border-tech-cyan transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 text-slate-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism border-t border-slate-800" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-tech-cyan transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;