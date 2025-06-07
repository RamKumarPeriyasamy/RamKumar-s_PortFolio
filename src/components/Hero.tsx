import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare, FileText } from 'lucide-react';
import profileImage from './ram.jpeg'; // Import the image like Surya's implementation

export const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-lg">
              <img 
                src={profileImage}  // Use the imported image variable
                alt="Ram Kumar Periyasamy" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white">
              Ram Kumar Periyasamy
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl mb-4 text-primary-600 dark:text-primary-400 font-medium">
                Software Development Engineer in Test (SDET)
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Experienced SDET with expertise in automation and manual testing. Passionate about delivering high-quality software through robust testing strategies and efficient workflows.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Contact Me
              </a>
              <a 
                href="/ram-kumar-cv.pdf" 
                className="btn btn-outline flex items-center gap-2"
                download
              >
                <FileText size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-5 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://github.com/RamKumarPeriyasamy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-kumar-p-38a6ba263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.me/919080067941"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};