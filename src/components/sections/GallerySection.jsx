import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Share2, Download, MapPin, Tag, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const GallerySection = ({ preview = false }) => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const galleryItems = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/82/35/04/823504c09bc9d9477c97cb0de64e23f8.jpg",
      title: "Candi Borobudur",
      category: "Arsitektur",
      description: "Warisan budaya UNESCO yang megah",
      location: "Yogyakarta, Jawa Tengah",
      tags: ["candi", "unesco", "sejarah", "wisata"],
      photographer: "John Doe"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/75/c3/83/75c3831cbd7304aa36b4d42d2ff1df76.jpg",
      title: "Tarian Pendet",
      category: "Budaya",
      description: "Tarian tradisional Bali yang memukau",
      location: "Bali",
      tags: ["tari", "budaya", "tradisi"],
      photographer: "Jane Smith"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1724258387142-eeaeae8e48df?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Raja Ampat",
      category: "Alam",
      description: "Surga bawah laut Indonesia",
      location: "Papua Barat",
      tags: ["laut", "diving", "wisata"],
      photographer: "Mike Johnson"
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2023/03/04/14/09/gamelan-7829629_1280.jpg",
      title: "Gamelan Jawa",
      category: "Seni Musik",
      description: "Harmoni warisan leluhur",
      location: "Yogyakarta",
      tags: ["musik", "tradisi", "budaya"],
      photographer: "Sarah Lee"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1628413732934-95eff1b87770?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthcGFsJTIwcGluaXNpfGVufDB8fDB8fHww",
      title: "Kapal Pinisi",
      category: "Maritim",
      description: "Kejayaan bahari Nusantara",
      location: "Sulawesi Selatan",
      tags: ["kapal", "bahari", "tradisi"],
      photographer: "David Kim"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1681003564665-62848f8d481e?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Batik Indonesia",
      category: "Kerajinan",
      description: "Warisan budaya dunia",
      location: "Solo",
      tags: ["batik", "unesco", "budaya"],
      photographer: "Linda Chen"
    },
    
  ];

  const displayedItems = preview ? galleryItems.slice(0, 6) : galleryItems;

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className={`relative py-24 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50/50 via-white to-green-50/50'
    }`}>
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl`} />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
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
          <h2 className="font-javanese text-3xl text-primary mb-2">ꦒꦭꦺꦫꦶ</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Galeri Nusantara
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Keindahan alam dan kekayaan budaya Indonesia dalam bingkai visual yang memukau
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative cursor-pointer rounded-xl overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <MapPin size={14} className="mr-1" />
                      {item.location}
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => handleLike(item.id, e)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      likedImages.has(item.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-primary transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-primary transition-colors">
                    <Download size={16} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gray-800/90 text-white' 
                      : 'bg-white/90 text-gray-800'
                  } backdrop-blur-sm`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
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
            to="/gallery"
            className={`inline-flex items-center px-8 py-4 rounded-full transition-all transform hover:scale-105 ${
              isDark 
                ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                : 'bg-primary text-white hover:bg-primary/90'
            } shadow-lg`}
          >
            <span>Lihat Semua Galeri</span>
            <ZoomIn className="ml-2" size={20} />
          </Link>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-transparent rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>

                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full rounded-t-xl"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-1" />
                        {selectedImage.location}
                      </div>
                      <div className="flex space-x-4">
                        <button className="text-white hover:text-primary transition-colors">
                          <Heart size={20} />
                        </button>
                        <button className="text-white hover:text-primary transition-colors">
                          <Share2 size={20} />
                        </button>
                        <button className="text-white hover:text-primary transition-colors">
                          <Download size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-b-xl`}>
  <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-b-xl`}>
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {selectedImage.tags.map((tag, idx) => (
        <span
          key={idx}
          className={`text-xs px-3 py-1 rounded-full ${
            isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}
        >
          #{tag}
        </span>
      ))}
    </div>

    {/* Photographer Info */}
    <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      <Info size={16} className="mr-2" />
      <span>Photo by {selectedImage.photographer}</span>
    </div>
  </div>
</div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;