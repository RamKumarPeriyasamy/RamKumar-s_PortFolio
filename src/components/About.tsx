import { motion } from 'framer-motion';
import { User, Code, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-dark-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate SDET with a strong background in both manual and automated testing.
            I'm dedicated to ensuring software quality and delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-white dark:bg-dark-600 rounded-xl p-8 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Profile Summary</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm Ram Kumar Periyasamy, a Software Development Engineer in Test (SDET) with a passion for ensuring software quality.
            With a background in Mathematics and specialized training in Software Testing, I bring analytical thinking and 
            problem-solving skills to the testing process. My expertise spans manual and automated testing across web applications, 
            APIs, and IoT systems.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe in creating robust test frameworks that enable comprehensive coverage while maintaining efficiency.
            My goal is to continuously improve testing processes and contribute to delivering high-quality software products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    title: "Who I Am",
    description: "A detail-oriented SDET who combines technical expertise with analytical thinking to deliver high-quality software testing solutions.",
    icon: <User size={28} />,
  },
  {
    title: "What I Do",
    description: "Design and implement test automation frameworks, perform manual and exploratory testing, and ensure software quality across the development lifecycle.",
    icon: <Code size={28} />,
  },
  {
    title: "My Background",
    description: "Educated in Mathematics with specialized training in Software Testing, bringing strong analytical and logical reasoning to testing processes.",
    icon: <BookOpen size={28} />,
  },
];