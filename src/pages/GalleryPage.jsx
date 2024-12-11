import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ZoomIn, Filter, Search, Heart, Share2, Download,
  MapPin, Camera, Calendar, Eye, Tag, ChevronDown
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedImages, setLikedImages] = useState(new Set());

  // Filter categories with icons
  const filters = [
    { id: 'all', label: 'All', icon: <Eye size={18} /> },
    { id: 'nature', label: 'Nature', icon: <Tag size={18} /> },
    { id: 'culture', label: 'Culture', icon: <Tag size={18} /> },
    { id: 'architecture', label: 'Architecture', icon: <Tag size={18} /> },
    { id: 'maritime', label: 'Maritime', icon: <Tag size={18} /> },
    { id: 'tradition', label: 'Tradition', icon: <Tag size={18} /> }
  ];

  // Gallery data with more detailed information
  const galleryItems = [
    {
      id: 1,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1724258235991-7dbb4d3154cc?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Raja Ampat',
      description: 'Indonesia\'s underwater paradise in West Papua',
      location: 'West Papua',
      photographer: 'John Doe',
      date: '2024-01-15',
      views: 1200,
      tags: ['sea', 'travel', 'diving'],
      details: [
        'Depth: 10-30 meters',
        'Biodiversity: 75% of the world\'s coral species',
        'Status: National Park'
      ]
    },
    {
      id: 2,
      category: 'culture',
      image: 'https://images.unsplash.com/photo-1643762618827-f2c7606f20af?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Borobudur',
      description: 'Majestic Buddhist temple in Java, Indonesia',
      location: 'Central Java',
      photographer: 'Jane Doe',
      date: '2023-08-20',
      views: 2500,
      tags: ['heritage', 'architecture', 'tourism'],
      details: [
        'Construction: 9th century',
        'Architectural style: Mahayana Buddhist',
        'UNESCO World Heritage Site'
      ]
    },
    {
      id: 3,
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1554481924-0eecea3f21de?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bali Swing',
      description: 'Unique swinging experience overlooking the jungle',
      location: 'Bali',
      photographer: 'John Smith',
      date: '2022-11-05',
      views: 1800,
      tags: ['adventure', 'nature', 'tourism'],
      details: [
        'Height: 78 meters',
        'Suspended over a valley',
        'Popular tourist attraction'
      ]
    },
    // ... add more gallery items with the same format
  ];

  const filteredGallery = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  }).filter(item => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
    // Implement share functionality
    console.log('Sharing:', item.title);
  };

  const handleDownload = (item, e) => {
    e.stopPropagation();
    // Implement download functionality
    console.log('Downloading:', item.title);
  };

  return (
    <div>
      {/* Hero Section with parallax effect */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1721136690199-a42036f31b70?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery Hero"
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
              <span className="font-javanese text-4xl text-primary">ꦒꦼꦭ꧀ꦭꦼꦫꦶ</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              Nusantara Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              
            >
              Discover the beauty of nature and cultural wealth of Indonesia through stunning visuals
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar with animation */}
            <motion.div 
              className="relative w-full md:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search galleries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </motion.div>
            
            {/* Filters with icons */}
            <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 scrollbar-hide">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#1E40AF] to-[#15803D] text-white shadow-md'
                      : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#15803D]/5" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
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
                  <div className="relative overflow-hidden rounded-xl bg-gray-200 shadow-lg">
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
                    {/* Additional Info Overlays */}
                    <div className="absolute top-4 right-4 flex space-x-2">
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
                    </div>
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-600">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">No galleries found</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;