import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Beranda' },
    { to: '/about', label: 'Sejarah' },
    { to: '/culture', label: 'Budaya & Tradisi' },
    { to: '/gallery', label: 'Galeri' },
    { to: '/activities', label: 'Kegiatan' }
  ];

  const navBackground = () => {
    if (!scrolled) return 'bg-transparent';
    return isDark ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm';
  };

  const textColor = () => {
    if (!scrolled) return 'text-white';
    return isDark ? 'text-gray-100' : 'text-gray-800';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground()} ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold transition-colors ${textColor()}`}
            >
              <span className="font-javanese">Nusantara</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${textColor()}`}
                >
                  {item.label}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${
                    location.pathname === item.to ? 'scale-x-100' : ''
                  }`} />
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${
                isDark ? 'bg-gray-900/95' : 'bg-white/95'
              } backdrop-blur-sm rounded-b-xl shadow-xl`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.to
                        ? isDark 
                          ? 'bg-gray-800 text-white' 
                          : 'bg-gray-100 text-gray-900'
                        : isDark
                          ? 'text-gray-300 hover:bg-gray-800'
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;