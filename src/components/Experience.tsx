import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const Experience = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Function to calculate time elapsed since December 13, 2024
  const calculateTimeElapsed = () => {
    const startDate = new Date('December 13, 2024');
    const currentDate = new Date();
    
    // For demo purposes, if the date is in the future, use a past date instead
    const timeToUse = startDate > currentDate 
      ? new Date(currentDate.getTime() - (24 * 60 * 60 * 1000 * 365)) // 1 year ago
      : startDate;
    
    const timeDiff = currentDate.getTime() - timeToUse.getTime();
    
    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey as a Software Development Engineer in Test, focusing on quality assurance and test automation.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/3"
          >
            <div className="card p-6 h-full">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Clock size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Experience Counter</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Time in the field since December 13, 2024
              </p>
              
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gray-100 dark:bg-dark-600 rounded-lg p-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {timeElapsed.days}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Days</div>
                </div>
                <div className="bg-gray-100 dark:bg-dark-600 rounded-lg p-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {timeElapsed.hours}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Hours</div>
                </div>
                <div className="bg-gray-100 dark:bg-dark-600 rounded-lg p-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {timeElapsed.minutes}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Mins</div>
                </div>
                <div className="bg-gray-100 dark:bg-dark-600 rounded-lg p-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {timeElapsed.seconds}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Secs</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-2/3"
          >
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Software Development Engineer in Test (SDET)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As an SDET, I'm responsible for designing and implementing test automation frameworks, 
                developing test scripts, and ensuring software quality across the development lifecycle.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Designed and implemented automated test frameworks for web applications and APIs
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Executed comprehensive manual and automated testing for critical applications
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Conducted IoT system testing with real-time monitoring of sensors and data integrity
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Collaborated with development teams to implement CI/CD pipelines with integrated testing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};