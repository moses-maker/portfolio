import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setSubmitStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Open to teaching roles, ICT consultancy, and technology training opportunities
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-slate-100">Let's Connect</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Whether you're looking for technical training, backend development services, 
                  or educational consultation, I'd love to hear from you. Let's discuss how we 
                  can work together to achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:mosesomoto@gmail.com"
                  data-testid="contact-email-link"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all group"
                >
                  <div className="p-3 rounded-lg bg-tech-cyan/10 border border-tech-cyan/30 group-hover:bg-tech-cyan/20 transition-all">
                    <Mail size={24} className="text-tech-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-100 font-medium">mosesomoto@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+254791688623"
                  data-testid="contact-phone-link"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all group"
                >
                  <div className="p-3 rounded-lg bg-tech-cyan/10 border border-tech-cyan/30 group-hover:bg-tech-cyan/20 transition-all">
                    <Phone size={24} className="text-tech-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-slate-100 font-medium">+254 791 688 623</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="p-3 rounded-lg bg-tech-purple/10 border border-tech-purple/30">
                    <MapPin size={24} className="text-tech-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-slate-100 font-medium">Available for Remote & On-Site</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://github.com/mosese-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-github-link"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-slate-300 hover:text-tech-cyan transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/moses-omoto-adala"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-link"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-tech-cyan transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-slate-300 hover:text-tech-cyan transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  data-testid="contact-name-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border-slate-800 focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan rounded-lg py-3 px-4 text-slate-100 placeholder:text-slate-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-testid="contact-email-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border-slate-800 focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan rounded-lg py-3 px-4 text-slate-100 placeholder:text-slate-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  data-testid="contact-subject-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border-slate-800 focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan rounded-lg py-3 px-4 text-slate-100 placeholder:text-slate-600 transition-all"
                  placeholder="Training Inquiry / Consulting / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  data-testid="contact-message-input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-slate-950/50 border-slate-800 focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan rounded-lg py-3 px-4 text-slate-100 placeholder:text-slate-600 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {submitStatus && (
                <div
                  data-testid="contact-form-status"
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-900/20 border border-green-500 text-green-400'
                      : 'bg-red-900/20 border border-red-500 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                data-testid="contact-submit-button"
                disabled={submitting}
                className="w-full rounded-full bg-tech-cyan hover:bg-cyan-500 text-white font-medium px-8 py-3 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;