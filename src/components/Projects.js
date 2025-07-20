// components/ProjectsSection.tsx
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FixIt – Handyman Services, Repairs & Maintenance Portal',
    description: 'Booking platform for handyman services with user auth and admin tools.',
    tech: 'React.js, Python, TailwindCSS',
    live: 'https://vise-fix-it.vercel.app/',
    code: '',
  },
  {
    title: 'InPath LMS – Learning Management System',
    description: 'Early-stage LMS to manage courses, user dashboards, and progress tracking.',
    tech: 'React.js, Python, Tailwind',
    live: 'https://in-path-lms.vercel.app/',
    code: '',
  },
  {
    title: 'Dental Healthcare – Clinic Landing Page',
    description: 'Fully responsive business site with info sections and forms.',
    tech: 'HTML, Javascript, TailwindCSS',
    live: 'https://dentalhealthcarecenter.vercel.app/',
    code: '',
  },
  {
    title: 'Mian Shazz – Financial Consultant Service Page',
    description: 'Fully responsive business site with info sections and forms.',
    tech: 'HTML, Javascript, TailwindCSS',
    live: 'https://mian-shazz.vercel.app/',
    code: '',
  },
  {
    title: 'Progress Media – Personal Portfolio Site',
    description: 'Company landing page with motion effects and professional UI.',
    tech: 'Next.js, TailwindCSS, Framer Motion',
    live: 'https://progressmedia.vercel.app/',
    code: '',
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-br from-light to-primary py-20 px-6 relative mt-2" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center font-sans">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative backdrop-blur-xl bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary animate-pulse" />

              {/* Decorative half-inside/half-outside circle shape */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-20 h-20 bg-accent rounded-full translate-x-1/2 translate-y-1/2 "
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-dark font-sans mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-sm text-dark mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5 font-serif ">
                  {project.tech.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent text-primary text-xs px-2 py-1 rounded-full font-semibold"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary text-sm font-semibold flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark hover:text-secondary text-sm font-semibold flex items-center"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
