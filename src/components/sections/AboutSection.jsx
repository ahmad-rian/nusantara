import React from 'react';
import { motion } from 'framer-motion';
import { Map, Anchor, Ship, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const AboutSection = ({ preview = false }) => {
  const { isDark } = useTheme();
  
  const stats = [
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      value: "17,504",
      label: "Pulau",
      description: "Tersebar di seluruh Nusantara"
    },
    {
      icon: <Anchor className="w-8 h-8 text-primary" />,
      value: "99,093",
      label: "KM Garis Pantai",
      description: "Terpanjang kedua di dunia"
    },
    {
      icon: <Ship className="w-8 h-8 text-primary" />,
      value: "6",
      label: "Laut Besar",
      description: "Mengelilingi kepulauan"
    }
  ];

  return (
    <section className={`relative py-24 overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-white via-blue-50/50 to-green-50/50'
    }`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-javanese text-3xl text-primary mb-2">ꦱꦼꦗꦫꦃ</h2>
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Sejarah Maritim Indonesia
            </h3>
            <p className={`max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Menjelajahi perjalanan panjang Indonesia sebagai negara maritim terbesar di dunia
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-6 scale-105 transition-transform group-hover:rotate-0" />
            <img 
              src="https://images.unsplash.com/photo-1596405367208-63505402f113"
              alt="Kapal Pinisi"
              className="relative rounded-lg shadow-xl w-full h-[400px] object-cover transform transition-transform group-hover:scale-105"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Indonesia memiliki sejarah maritim yang kaya dan panjang. Dari era kejayaan Sriwijaya hingga Majapahit, lautan telah menjadi urat nadi perdagangan dan pertukaran budaya yang membangun peradaban Nusantara.
            </p>
            
            {!preview && (
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Kapal-kapal tradisional seperti Pinisi telah mengarungi Nusantara selama berabad-abad, membawa rempah-rempah dan hasil bumi ke berbagai penjuru dunia.
              </p>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border transition-shadow hover:shadow-lg ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white/80 backdrop-blur-sm border-gray-100'
                  }`}
                >
                  <div className="mb-4">{stat.icon}</div>
                  <h4 className={`text-2xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{stat.label}</p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/about"
            className={`inline-flex items-center px-8 py-4 rounded-full transition-all transform hover:scale-105 ${
              isDark 
                ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            <span>Jelajahi Sejarah Lebih Dalam</span>
            <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;