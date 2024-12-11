import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Loader } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CulturePage from './pages/CulturePage';
import GalleryPage from './pages/GalleryPage';
import ActivityPage from './pages/ActivityPage';
import './styles/globals.css';

// Animated page transitions
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Enhanced ScrollToTop with progress indicator
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrolled / winHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Progress Circle */}
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className="text-primary"
                strokeWidth="2"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (scrollProgress / 100) * 125.6}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
            </svg>
            
            {/* Button */}
            <button
              onClick={scrollToTop}
              className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none group"
            >
              <ArrowUp 
                size={20} 
                className="text-primary group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Loading Screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <Loader size={40} className="text-primary" />
    </motion.div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <AnimatePresence>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-grow"
              >
                <Navbar />
                <main className="flex-grow relative">
                  <ScrollToTop />
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/culture" element={<CulturePage />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/activities" element={<ActivityPage />} />
                    </Routes>
                  </PageTransition>
                </main>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;