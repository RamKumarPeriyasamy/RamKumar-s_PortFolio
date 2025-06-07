import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

export const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.6,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      rotateY: -45
    },
    visible: { 
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
        delay: 0.4
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { 
      height: 0,
      opacity: 0
    },
    visible: { 
      height: "100%",
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.3, 1],
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getIcon = (index: number) => {
    const icons = [Award, BookOpen, Target];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={20} />;
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-dark-700 dark:via-dark-700 dark:to-dark-600 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            duration: 0.8,
            bounce: 0.4
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ rotateY: -180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <GraduationCap size={48} className="text-primary-600 dark:text-primary-400 mx-auto" />
          </motion.div>
          <h2 className="section-title bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            My academic journey and professional training that have shaped my analytical and technical skills.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 max-w-4xl mx-auto relative"
        >
          {/* Animated Timeline */}
          <motion.div 
            variants={timelineVariants}
            className="absolute left-5 top-0 w-1 bg-gradient-to-b from-primary-400 via-purple-400 to-primary-600 hidden md:block rounded-full overflow-hidden"
          >
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="absolute inset-0 bg-gradient-to-b from-primary-300 to-purple-300 rounded-full"
            />
          </motion.div>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              {/* Floating particles effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.8 }}
                className="absolute -top-2 -left-2 w-2 h-2 bg-primary-400 rounded-full opacity-60"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 1 }}
                className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40"
                animate={{
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7
                  }
                }}
              />

              {/* Icon with enhanced animations */}
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                className="absolute left-0 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/50 dark:to-purple-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 z-20 border-3 border-white dark:border-gray-800 shadow-lg cursor-pointer group-hover:shadow-xl"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {getIcon(index)}
                </motion.div>
                
                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary-400/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: index * 0.4
                  }}
                />
              </motion.div>
              
              {/* Card with 3D effects */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="ml-16 md:ml-16 transform-gpu"
              >
                <div className="card hover:shadow-2xl p-8 relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/50 dark:group-hover:from-gray-800 dark:group-hover:to-purple-900/20 transition-all duration-500">
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    whileHover={{
                      translateX: "200%",
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                  
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300"
                  >
                    {edu.degree}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    className="text-primary-600 dark:text-primary-400 mb-2 font-semibold"
                  >
                    {edu.institution}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="text-gray-500 dark:text-gray-400 mb-3 font-medium"
                  >
                    {edu.duration}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {edu.description}
                  </motion.p>

                  {/* Decorative corner elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 border-2 border-primary-200 dark:border-primary-800 rounded-full opacity-20"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            duration: 0.8,
            delay: 0.6,
            bounce: 0.4
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-purple-100/50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-2xl blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                duration: 0.8,
                bounce: 0.6,
                delay: 0.8
              }}
              className="inline-block mb-4"
            >
              <BookOpen size={32} className="text-primary-600 dark:text-primary-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I believe in lifelong learning and regularly take online courses and participate in workshops
              to stay updated with the latest technologies and testing methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const education = [
  {
    degree: "Master of Science in Mathematics",
    institution: "Alagappa University",
    duration: "2020 - 2022",
    description: "Advanced study in mathematical concepts, focusing on analytical problem-solving and logical reasoning. Developed strong quantitative analysis skills applicable to testing and quality assurance."
  },
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "Kamaraj College, Tuticorin",
    duration: "2018 - 2020",
    description: "Fundamental education in mathematics, statistics, and computational methods. Built a strong foundation in analytical thinking and problem-solving approaches."
  },
  {
    degree: "Software Testing Course",
    institution: "QSpiders, Velachery, Chennai",
    duration: "2023",
    description: "Comprehensive training in manual and automated testing methodologies, tools, and best practices. Specialized curriculum covering various testing types, frameworks, and industry standards."
  }
];