'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Strong collaborator in Agile/Scrum environments',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: '4+ years delivering high-quality web applications',
  },
  {
    icon: Zap,
    title: 'Modern Tools',
    description: 'Expert in React, TypeScript, and AI-assisted development',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Results-driven Senior Frontend Software Engineer with 4+ years of experience
            developing high-quality web applications using React and TypeScript. Expert in
            modern UI architecture, Design Systems, and API integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-400 text-white"
        >
          <p className="text-lg md:text-xl leading-relaxed text-center">
            Skilled in Cursor IDE (AI-assisted coding) development workflows, leveraging
            AI-assisted coding to boost productivity and code quality. Passionate about
            building scalable UI systems and mentoring teams to deliver maintainable,
            high-performance products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

