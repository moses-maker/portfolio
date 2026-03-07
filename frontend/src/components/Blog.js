import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blog`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = ['All', ...new Set(posts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Knowledge <span className="text-gradient">Hub</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 text-lg">Tutorials, insights, and tech education resources</p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              data-testid={`blog-category-${category.toLowerCase()}`}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-tech-cyan text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-tech-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-tech-cyan border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`blog-post-${post.slug}`}
                className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-tech-cyan/50 transition-all overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-tech-cyan/20 border border-tech-cyan text-tech-cyan text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(post.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.read_time}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-tech-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-slate-800/50 text-slate-400 border border-slate-700"
                      >
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-tech-cyan hover:text-cyan-400 transition-colors cursor-pointer">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Blog;