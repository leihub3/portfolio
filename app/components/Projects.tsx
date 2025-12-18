'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code2, Eye } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ProjectViewer from './ProjectViewer';

const projects = [
  {
    title: 'Pokémon Explorer',
    description:
      'Modern Pokédex built with Next.js 14, TypeScript, and TailwindCSS, featuring infinite scroll, search & type filters, rich Pokémon detail pages with stat charts, abilities and moves, and a Live Battle simulator to compare Pokémon head-to-head, plus dark mode and smooth animations.',
    image: '/proyects/pokedex.png', // add your screenshot with this name in public/proyects
    liveUrl: 'https://pokedex-psi-wine-73.vercel.app/',                    // replace with your deployed URL when you have it
    githubUrl: 'https://github.com/leihub3/pokedex',                  // replace with your GitHub repo URL
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Framer Motion',
      'Recharts',
      'Zod',
      'PokéAPI',
    ],
    featured: true,
  },
  {
    title: 'AI Story Generator',
    description:
      'Full-stack AI Story Creator that lets users generate, save, and manage AI‑powered stories from custom prompts, backed by a Node/Express API and PostgreSQL database on Vercel.',
    image: '/proyects/story_teller.png',
    liveUrl: 'https://ai-story-generator-alpha-two.vercel.app/',
    githubUrl: 'https://github.com/leihub3/ai-story-generator',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'OpenAI'],
    featured: true,
  },  
  {
    title: 'REST Countries API',
    description: 'A comprehensive country information application consuming the REST Countries API. Features dark mode, filtering, and search functionality with a beautiful, responsive design.',
    image: '/proyects/rest_api.png',
    liveUrl: 'https://rest-countries-api-psi-bay.vercel.app/',
    githubUrl: '#',
    technologies: ['React', 'TypeScript', 'API Integration'],
    featured: true,
  },
  {
    title: 'Multi-Step Form',
    description: 'A modern, interactive multi-step form with smooth animations and validation. Built with React and TypeScript, showcasing advanced form handling and user experience design.',
    image: '/proyects/multi_step.png',
    liveUrl: 'https://multi-step-form-black-nine.vercel.app/',
    githubUrl: '#',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: false,
  },
  // {
  //   title: 'Video Games Collection',
  //   description: 'SPA RESTful about Videogames consuming data from Rawg API. Developed using PERN stack: PostgreSQL, ExpressJs, React and NodeJs.',
  //   image: '',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
  //   featured: false,
  // },
  {
    title: 'Isla Verde Bronces Festival',
    description: 'Official website for the International Isla Verde Bronces Festival - a brass instrument training and improvement course. Features artist profiles, activity schedules, registration system, and event information.',
    image: '/proyects/ivb.png',
    liveUrl: 'https://islaverdebronces.com.ar/',
    githubUrl: '#',
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    featured: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const openProjectViewer = (url: string, title: string) => {
    setSelectedProject({ url, title });
  };

  const closeProjectViewer = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my skills and experience in modern web development.
              Click "Live" to see them directly in your browser!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden group">
                  {project.image && project.image.startsWith('/') ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-white opacity-50 group-hover:opacity-30 transition-opacity" />
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Featured
                    </div>
                  )}
                  {project.liveUrl !== '#' && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <motion.button
                        onClick={() => openProjectViewer(project.liveUrl, project.title)}
                        className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                        Live
                      </motion.button>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl !== '#' && (
                      <motion.button
                        onClick={() => openProjectViewer(project.liveUrl, project.title)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        Live
                      </motion.button>
                    )}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open
                    </motion.a>
                    {project.githubUrl !== '#' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Viewer Modal */}
      {selectedProject && (
        <ProjectViewer
          isOpen={!!selectedProject}
          onClose={closeProjectViewer}
          projectUrl={selectedProject.url}
          projectTitle={selectedProject.title}
        />
      )}
    </>
  );
}

