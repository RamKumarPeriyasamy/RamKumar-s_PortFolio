import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, GitBranch, LineChart } from 'lucide-react';

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-dark-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical toolkit consists of various languages, frameworks, and tools that I've mastered 
            through practical experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill} 
                      className="skill-badge"
                      variants={item}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="section-subtitle text-center mb-8">Testing Strategy & Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingExpertise.map((expertise, index) => (
              <motion.div
                key={expertise.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-dark-600 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{expertise.area}</h4>
                <p className="text-gray-600 dark:text-gray-300">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={24} />,
    skills: ["JavaScript", "TypeScript", "Java", "Bash", "SQL", "Groovy"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Server size={24} />,
    skills: ["React", "Node.js", "Express", "Jest", "Playwright", "Selenium"]
  },
  {
    title: "Databases & Storage",
    icon: <Database size={24} />,
    skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps & CI/CD",
    icon: <GitBranch size={24} />,
    skills: ["Jenkins", "Gitea", "Docker", "SonarQube", "Trivy", "Lighthouse CI"]
  },
  {
    title: "Tools & Utilities",
    icon: <Terminal size={24} />,
    skills: ["Git", "Postman", "Wireshark", "MQTT tools", "Node-RED", "IoTIFY"]
  },
  {
    title: "Monitoring & Analytics",
    icon: <LineChart size={24} />,
    skills: ["Grafana", "Monitoring Dashboards", "Performance Testing", "Log Analysis"]
  }
];

const testingExpertise = [
  {
    area: "Error Guessing",
    description: "Leveraging experience to predict where errors are likely to occur, focusing testing efforts on high-risk areas."
  },
  {
    area: "Unit & Integration Testing",
    description: "Creating comprehensive test suites for both isolated units and their interactions with other components."
  },
  {
    area: "Automated Testing",
    description: "Building robust automation frameworks that ensure consistent test execution and reporting."
  },
  {
    area: "API Testing",
    description: "Thorough validation of endpoints, request/response formats, error handling, and performance."
  },
  {
    area: "UI/UX Testing",
    description: "Ensuring interface functionality, responsiveness, and adherence to design specifications."
  },
  {
    area: "Performance Testing",
    description: "Analyzing application behavior under various load conditions to identify bottlenecks."
  }
];