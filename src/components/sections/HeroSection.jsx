import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video/Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf"
          alt="Hero Background - Raja Ampat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Javanese Title */}
          <h2 className="font-javanese text-4xl mb-4 text-primary">ꦤꦸꦱꦤ꧀ꦠꦫ</h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Kekayaan Samudera dan<br />Budaya Nusantara
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Menjelajahi keindahan alam dan warisan budaya Indonesia dari Sabang sampai Merauke
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/activities'}
            className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
            Jelajahi Sekarang
            </motion.button>
            </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <ChevronDown size={36} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;