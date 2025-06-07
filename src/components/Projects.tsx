import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, Layout } from 'lucide-react';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<'testing' | 'development'>('testing');

  return (
    <section id="projects" className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work across testing and development projects.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-dark-600 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'testing' 
                  ? 'bg-white dark:bg-dark-500 shadow-sm text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-500/50'
              }`}
              onClick={() => setActiveTab('testing')}
            >
              Testing
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'development' 
                  ? 'bg-white dark:bg-dark-500 shadow-sm text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-500/50'
              }`}
              onClick={() => setActiveTab('development')}
            >
              Development
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={activeTab}
        >
          {activeTab === 'testing' ? (
            <div className="grid md:grid-cols-2 gap-6">
              {testingProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title}
                  project={project} 
                  index={index} 
                  icon={<Server size={24} />}
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {developmentProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index} 
                  icon={<Layout size={24} />}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  highlights: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="card hover:shadow-lg h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Key Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-gray-100 dark:bg-dark-500 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const testingProjects = [
  {
    title: "Dwinzo Application",
    description: "Comprehensive testing of a 2D/3D canvas application with complex WebGL/Three.js interactions and backend API testing.",
    technologies: ["WebGL", "Three.js", "Node.js", "TypeScript", "API Testing"],
    highlights: [
      "Implemented test strategies for complex canvas interactions",
      "Performed thorough API testing for Node.js TypeScript endpoints",
      "Created automation scripts for regression testing"
    ]
  },
  {
    title: "IoT Smart Dwinzo Factory",
    description: "Testing of an IoT-enabled smart factory system with real-time monitoring of sensors, including temperature, voltage, and coolant levels.",
    technologies: ["IoT", "MQTT", "Sensor Data", "Real-time Monitoring"],
    highlights: [
      "Tested real-time data collection from multiple sensors",
      "Verified data integrity across the monitoring pipeline",
      "Performed stress testing under high data volume scenarios"
    ]
  },
  {
    title: "Pantaloons Traffic Testing",
    description: "User traffic simulation and testing for the Pantaloons e-commerce platform, focusing on user experience and performance.",
    technologies: ["Load Testing", "UI Testing", "Performance Analysis"],
    highlights: [
      "Conducted user journey mapping and testing",
      "Analyzed performance under various traffic conditions",
      "Identified and reported UX/UI inconsistencies"
    ]
  },
  {
    title: "Ease My Trip Testing",
    description: "Comprehensive traffic and user journey testing for the Ease My Trip platform, including booking flows and payment processes.",
    technologies: ["E-commerce Testing", "User Flow Analysis", "Performance Testing"],
    highlights: [
      "Simulated peak traffic conditions for booking flows",
      "Tested concurrent user sessions and resource utilization",
      "Documented performance metrics and suggested optimizations"
    ]
  }
];

const developmentProjects = [
  {
    title: "Salon Project",
    description: "A full-stack application for salon management with customer appointments, service management, and admin dashboard.",
    technologies: ["Vite", "React", "Node.js", "MongoDB", "Docker"],
    link: "https://sundramsalons.netlify.app/",
    highlights: [
      "Developed responsive frontend using Vite and React",
      "Implemented backend with Node.js and MongoDB",
      "Created admin portal with customer data dashboard",
      "Containerized the application using Docker Compose"
    ]
  },
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing professional experience, projects, and skills with dark/light theme support.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Designed and developed a responsive portfolio website",
      "Implemented dark/light theme with smooth transitions",
      "Created animated components with Framer Motion",
      "Built a contact form with email integration"
    ]
  }
];