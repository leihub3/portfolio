'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

interface ProjectViewerProps {
  isOpen: boolean;
  onClose: () => void;
  projectUrl: string;
  projectTitle: string;
}

export default function ProjectViewer({
  isOpen,
  onClose,
  projectUrl,
  projectTitle,
}: ProjectViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[50] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ${
              isFullscreen
                ? 'w-full h-full'
                : 'w-[95vw] h-[90vh] md:w-[90vw] md:h-[85vh] max-w-7xl'
            } transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {projectTitle}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe */}
            <div className="relative h-[calc(100%-73px)] bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <iframe
                src={projectUrl}
                className="w-full h-full border-0"
                title={projectTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

