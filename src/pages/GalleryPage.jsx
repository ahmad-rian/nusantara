import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,  Search, Heart, Share2, Download,
  MapPin, Eye, Tag, Info, 
   Globe, Loader
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GalleryPage = () => {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedImages, setLikedImages] = useState(() => {
    const saved = localStorage.getItem('likedImages');
    return new Set(saved ? JSON.parse(saved) : []);
  });

  const filters = [
    { id: 'all', label: 'Semua', icon: <Eye size={18} /> },
    { id: 'nature', label: 'Alam', icon: <Globe size={18} /> },
    { id: 'culture', label: 'Budaya', icon: <Tag size={18} /> },
    { id: 'architecture', label: 'Arsitektur', icon: <Tag size={18} /> },
    { id: 'maritime', label: 'Maritim', icon: <Tag size={18} /> },
    { id: 'tradition', label: 'Tradisi', icon: <Tag size={18} /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1724258235991-7dbb4d3154cc',
      title: 'Raja Ampat',
      description: 'Surga bawah laut Indonesia di Papua Barat',
      location: 'Papua Barat',
      photographer: 'Ahmad Syahid',
      date: '2024-01-15',
      views: 1200,
      tags: ['laut', 'wisata', 'diving'],
      details: [
        'Kedalaman: 10-30 meter',
        'Biodiversitas: 75% spesies karang dunia',
        'Status: Taman Nasional'
      ]
    },
    {
      id: 2,
      category: 'architecture',
      image: 'https://i.pinimg.com/736x/82/35/04/823504c09bc9d9477c97cb0de64e23f8.jpg',
      title: 'Candi Borobudur',
      description: 'Candi Buddha terbesar di dunia',
      location: 'Magelang, Jawa Tengah', 
      photographer: 'Budi Santoso',
      date: '2024-01-20',
      views: 2500,
      tags: ['candi', 'warisan', 'unesco'],
      details: [
        'Dibangun: Abad ke-9',
        'Gaya arsitektur: Buddha Mahayana',
        'Status: Warisan Dunia UNESCO'
      ]
    },
    {
      id: 3,
      category: 'culture',
      image: 'https://i.pinimg.com/736x/75/c3/83/75c3831cbd7304aa36b4d42d2ff1df76.jpg',
      title: 'Tari Pendet',
      description: 'Tarian tradisional yang mewakili keanggunan Bali',
      location: 'Bali',
      photographer: 'Made Wijaya',
      date: '2024-01-25',
      views: 1800,
      tags: ['tari', 'budaya', 'tradisi'],
      details: [
        'Jenis: Tarian selamat datang',
        'Jumlah penari: 5-7 orang',
        'Atribut: Bokor dengan bunga'
      ]
    },
    {
      id: 4,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1724258387142-eeaeae8e48df',
      title: 'Taman Nasional Komodo',
      description: 'Habitat alami komodo dan keindahan alam yang menakjubkan',
      location: 'Nusa Tenggara Timur',
      photographer: 'Andi Prasetyo',
      date: '2024-01-30',
      views: 2100,
      tags: ['komodo', 'alam', 'wisata'],
      details: [
        'Luas area: 1.733 km²',
        'Status: Warisan Dunia UNESCO',
        'Habitat: Komodo dan satwa laut'
      ]
    },
    {
      id: 5,
      category: 'culture',
      image: 'https://cdn.pixabay.com/photo/2023/03/04/14/09/gamelan-7829629_1280.jpg',
      title: 'Gamelan Jawa',
      description: 'Orkestra tradisional dengan harmonisasi yang khas',
      location: 'Yogyakarta',
      photographer: 'Sarah Lee',
      date: '2024-02-05',
      views: 1600,
      tags: ['musik', 'tradisi', 'budaya'],
      details: [
        'Jenis: Gamelan Jawa',
        'Jumlah instrumen: >20 buah',
        'Status: Warisan budaya'
      ]
    },
    {
      id: 6,
      category: 'maritime',
      image: 'https://images.unsplash.com/photo-1628413732934-95eff1b87770',
      title: 'Kapal Pinisi',
      description: 'Kapal tradisional kebanggaan Sulawesi Selatan',
      location: 'Sulawesi Selatan',
      photographer: 'David Kim',
      date: '2024-02-10',
      views: 1900,
      tags: ['kapal', 'bahari', 'tradisi'],
      details: [
        'Panjang: 30-50 meter',
        'Material: Kayu ulin',
        'Status: Warisan budaya'
      ]
    },
    {
      id: 7,
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1554481924-0eecea3f21de',
      title: 'Bali Swing',
      description: 'Wahana wisata modern dengan pemandangan alam',
      location: 'Bali',
      photographer: 'Wayan Sukma',
      date: '2024-02-15',
      views: 2200,
      tags: ['wisata', 'modern', 'alam'],
      details: [
        'Ketinggian: 78 meter',
        'Kapasitas: 2 orang',
        'Jaminan: Keamanan standar'
      ]
    },
    {
      id: 8,
      category: 'tradition',
      image: 'https://images.unsplash.com/photo-1681003564665-62848f8d481e',
      title: 'Batik Indonesia',
      description: 'Warisan budaya yang mendunia',
      location: 'Solo, Jawa Tengah',
      photographer: 'Linda Chen',
      date: '2024-02-20',
      views: 2000,
      tags: ['batik', 'unesco', 'budaya'],
      details: [
        'Teknik: Batik tulis',
        'Status: Warisan UNESCO',
        'Usia tradisi: >1000 tahun'
      ]
    }
  ];

  // Save liked images to localStorage
  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify([...likedImages]));
  }, [likedImages]);

  // Image Preloading
  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = "https://images.unsplash.com/photo-1721136690199-a42036f31b70";
    heroImage.onload = () => setIsLoading(false);
    heroImage.onerror = () => setIsLoading(false);

    const imagePromises = galleryItems.map(item => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsImagesLoaded(true);
    });
  }, []);

  const handleLikeImage = (id, e) => {
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

  const handleShare = (item, e) => {
    e.stopPropagation();
    console.log('Berbagi:', item.title);
  };

  const handleDownload = (item, e) => {
    e.stopPropagation();
    console.log('Mengunduh:', item.title);
  };

  const filteredGallery = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = 
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="flex flex-col items-center space-y-4">
          <Loader className="w-10 h-10 animate-spin text-blue-600" />
          <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Memuat Galeri...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1721136690199-a42036f31b70"
            alt="Galeri Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/30 via-transparent to-[#1E40AF]/30" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-javanese text-4xl text-white/90">ꦒꦭꦺꦫꦶ</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              Galeri Nusantara
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              Keindahan alam dan kekayaan budaya Indonesia dalam bingkai visual yang memukau
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className={`sticky top-20 z-30 ${
        isDark ? 'bg-gray-800/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDark ? 'text-gray-400' : 'text-gray-400'
                }`} size={20} />
                <input
                  type="text"
                  placeholder="Cari galeri..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full md:w-80 pl-10 pr-4 py-2.5 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-[#1E40AF]`}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              <div className="flex space-x-2 min-w-max">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-[#1E40AF] to-[#15803D] text-white shadow-md'
                        : isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{filter.icon}</span>
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={`relative py-20 overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 via-transparent to-[#15803D]/5" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isImagesLoaded ? (
            // Skeleton loading
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`rounded-xl aspect-[4/3] animate-pulse ${
                    isDark ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className={`relative overflow-hidden rounded-xl ${
                      isDark ? 'bg-gray-800' : 'bg-gray-200'
                    } shadow-lg`}>
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 p-6">
                          <h3 className="text-white text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 mb-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => handleLikeImage(item.id, e)}
                          className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                            likedImages.has(item.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                          }`}
                        >
                          <Heart size={20} />
                        </button>
                        <button 
                          onClick={(e) => handleShare(item, e)}
                          className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          <Share2 size={20} />
                        </button>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-600">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty State */}
          {filteredGallery.length === 0 && isImagesLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada galeri ditemukan
              </h3>
              <p className="text-gray-600">
                Coba gunakan kata kunci pencarian yang berbeda
              </p>
            </motion.div>
          )}
        </div>
      </section>

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
              className="relative max-w-5xl w-full rounded-xl overflow-hidden bg-white dark:bg-gray-900"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
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
                      {/* Action Buttons */}
                      <button 
                        onClick={(e) => handleLikeImage(selectedImage.id, e)}
                        className={`text-white hover:text-red-500 transition-colors ${
                          likedImages.has(selectedImage.id) ? 'text-red-500' : ''
                        }`}
                      >
                        <Heart size={20} />
                      </button>
                      <button 
                        onClick={(e) => handleShare(selectedImage, e)}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <Share2 size={20} />
                      </button>
                      <button 
                        onClick={(e) => handleDownload(selectedImage, e)}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedImage.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Details */}
                {selectedImage.details && (
                  <div className="space-y-2">
                    {selectedImage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                        <Info size={16} className="mr-2 text-primary" />
                        {detail}
                      </div>
                    ))}
                  </div>
                )}

                {/* Photographer Info */}
                <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
                  <span>Fotografer: {selectedImage.photographer}</span>
                  <span>Diambil: {selectedImage.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Error Boundary
class GalleryErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Terjadi Kesalahan
            </h2>
            <p className="text-gray-600 mb-4">
              Mohon muat ulang halaman
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Muat Ulang
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function GalleryPageWithErrorBoundary() {
  return (
    <GalleryErrorBoundary>
      <GalleryPage />
      </GalleryErrorBoundary>
  );
}