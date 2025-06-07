import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const WelcomePage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-primary-700 dark:bg-dark-900 flex flex-col items-center justify-center text-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Welcome to my Portfolio',
              1000
            ]}
            speed={50}
            wrapper="span"
            cursor={true}
          />
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">Exploring the journey of Ram Kumar P ✨</p>
        
        <div className="w-64 md:w-96 h-2 bg-gray-300/30 rounded-full mx-auto overflow-hidden">
          <motion.div 
            className="h-full bg-accent-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        </div>
        <p className="mt-4 text-gray-200">Loading your experience...</p>
      </motion.div>
    </motion.div>
  );
};