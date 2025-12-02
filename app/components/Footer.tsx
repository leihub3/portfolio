'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white mb-2">Luis Isaia</p>
            <p className="text-sm">Senior Frontend Developer</p>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://github.com/leihub3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-isaia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:isaia.luis@gmail.com"
              className="hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>© {currentYear} Luis Isaia. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

