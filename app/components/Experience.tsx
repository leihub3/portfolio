'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'Clarika Software + Innovation (DAC Group, CA)',
    location: 'Remote',
    period: 'Current',
    responsibilities: [
      'Migrated multiple legacy reporting systems into modular React + TypeScript applications',
      'Developed new React-based products with measurable business impact and modern UI architecture',
      'Integrated front-end solutions with .NET Razor Views / MVC backends',
      'Implemented end-to-end testing using Playwright to ensure quality and reliability',
      'Enhanced maintainability through SCSS mixins, reusable components, and strong typing',
      'Collaborated in Agile/Scrum teams using Azure DevOps',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Soy Henry',
    location: 'Remote',
    period: 'Nov 2021 - Feb 2022',
    responsibilities: [
      'Coordinated the assistance of students during their bootcamp journey',
      'Planned and developed activities and resolved doubts',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Isla Verde (NGO)',
    location: 'Remote',
    period: 'Mar 2010 - Aug 2021',
    responsibilities: [
      'Developed several systems for lodging reservations; registration management; printing of badges, certificates and diplomas',
      'Implemented user login, internal chat, forum, event schedule and accounting records',
      'Designed, created and implemented the website',
      'Technologies: PHP, HTML, BOOTSTRAP, JAVASCRIPT, AJAX, CMS\'s: Wordpress, Joomla and Mambo',
    ],
  },
  {
    title: 'Webmaster',
    company: 'Latin Grammy Winner Lucia Zicos',
    location: 'Remote',
    period: 'Jan 2010 - Dec 2019',
    responsibilities: [
      'Website design, creation and implementation',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10"></div>

                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="w-6 h-6 text-primary-500 flex-shrink-0 ml-4" />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

