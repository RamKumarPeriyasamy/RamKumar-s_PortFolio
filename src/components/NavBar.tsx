import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">
        Ram<span className="text-accent-500">Kumar</span> P
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} className="text-primary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} className="text-primary-700" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-dark-700 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};