import React from 'react';
import { motion } from 'framer-motion';
import { Music, Palette, Theater, Book, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const CultureSection = ({ preview = false }) => {
  const { isDark } = useTheme();

  const culturalItems = [
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Seni Tari",
      description: "Ragam tarian tradisional dari berbagai daerah di Indonesia",
      image: "https://i.pinimg.com/736x/3b/59/cb/3b59cb66b6e360293692c79dd796b1c7.jpg",
      total: "1000+ Tarian",
      region: "34 Provinsi"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Musik Tradisional",
      description: "Alat musik dan komposisi khas Nusantara",
      image: "https://i.pinimg.com/736x/71/e6/29/71e62927e4c97040c7a7d182ca0be10b.jpg",
      total: "300+ Alat Musik",
      region: "Seluruh Nusantara"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Seni Rupa",
      description: "Keragaman seni rupa dan kerajinan tradisional",
      image: "https://i.pinimg.com/736x/c5/d6/8d/c5d68d31d242bb3b04bb1c8c17b09619.jpg",
      total: "500+ Teknik",
      region: "Berbagai Daerah"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Sastra & Cerita",
      description: "Kekayaan sastra dan cerita rakyat Nusantara",
      image: "https://i.pinimg.com/736x/5d/af/c5/5dafc5bf39a54e43161e6241be6ad5bd.jpg",
      total: "2000+ Cerita",
      region: "Seluruh Indonesia"
    }
  ];

  const displayedItems =culturalItems;

  return (
    <section className={`relative py-24 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50/50 via-white to-green-50/50'
    }`}>
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L50 100' stroke='%231E40AF' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }} />
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-javanese text-3xl text-primary mb-2">ꦧꦸꦢꦪ</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Budaya & Tradisi
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Menjelajahi kekayaan budaya dan tradisi Indonesia yang beragam dari Sabang hingga Merauke
          </p>
        </motion.div>

        {/* Culture Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                isDark 
                  ? 'bg-gray-800 shadow-gray-900/50' 
                  : 'bg-white/80 backdrop-blur-sm shadow-lg'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDark ? 'bg-gray-800/90' : 'bg-white/90'
                } backdrop-blur-sm`}>
                  <span className="text-primary">{item.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h4>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{item.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Globe size={16} className="inline mr-1" />
                    {item.total}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Globe size={16} className="inline mr-1" />
                    {item.region}
                  </div>
                </div>

                <button className="text-primary font-medium group-hover:text-primary/80 transition-colors inline-flex items-center">
                  Pelajari Lebih Lanjut
                  <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/culture"
            className={`inline-flex items-center px-8 py-4 rounded-full transition-all transform hover:scale-105 ${
              isDark 
                ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                : 'bg-primary text-white hover:bg-primary/90'
            } shadow-lg`}
          >
            <span>Jelajahi Semua Budaya Nusantara</span>
            <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Interactive Map Preview */}
        {!preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mt-20 rounded-2xl p-8 ${
              isDark 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white/50 backdrop-blur-sm shadow-lg'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h4 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Peta Budaya Nusantara
              </h4>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Jelajahi kekayaan budaya dari berbagai daerah di Indonesia melalui peta interaktif
              </p>
            </div>
            <div className={`aspect-[16/9] rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <span className={`${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Interactive Map Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CultureSection;