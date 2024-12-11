import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar,
  MapPin, 
  Users, 
  Clock, 
  Filter,
  ChevronRight,
  ArrowRight,
  Calendar as CalendarIcon,
  Star,
  Share2,
  Bookmark,
  Ticket,
  Music,
  Utensils,
  Camera,
  Info
} from 'lucide-react';

const ActivityPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event Categories with icons
  const filters = [
    { id: 'all', label: 'Semua', icon: <Filter size={18} /> },
    { id: 'festival', label: 'Festival', icon: <Music size={18} /> },
    { id: 'exhibition', label: 'Pameran', icon: <Camera size={18} /> },
    { id: 'performance', label: 'Pertunjukan', icon: <Star size={18} /> },
    { id: 'workshop', label: 'Workshop', icon: <Utensils size={18} /> }
  ];

  // Months with more options
  const months = [
    { id: 'all', label: 'Semua Kegiatan' },
    { id: '12', label: 'Desember 2024' },
    { id: '01', label: 'Januari 2025' },
    { id: '02', label: 'Februari 2025' },
    { id: '03', label: 'Maret 2025' },
    { id: '04', label: 'April 2025' }
  ];

  // Enhanced activities data
  const activities = [
    {
      id: 1,
      type: 'festival',
      month: '12',
      date: "20 December 2024",
      time: "09:00 - 17:00 WIB",
      title: "Festival Bahari Nusantara",
      location: "Pantai Ancol, Jakarta",
      participants: "5000+",
      image: "https://plus.unsplash.com/premium_photo-1673240845266-2f2c432cf194?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZlc3RpdmFsJTIwaW5kb25lc2lhfGVufDB8fDB8fHww",
      description: "Festival tahunan yang menampilkan keragaman budaya bahari Indonesia dengan berbagai pertunjukan seni dan pameran kerajinan.",
      price: "Gratis",
      features: ["Live Music", "Kuliner", "Workshop", "Pameran"],
      organizer: "Kementerian Kelautan dan Perikanan",
      contact: "info@festivalbahari.id",
      website: "www.festivalbahari.id",
      additionalInfo: [
        "Parkir tersedia",
        "Ramah anak",
        "Transportasi umum tersedia"
      ]
    },
    {
      id: 2,
      type: 'exhibition',
      month: '12',
      date: "25 December 2024",
      time: "10:00 - 16:00 WIB",
      title: "Pameran Budaya Maritim",
      location: "Museum Nasional, Jakarta",
      participants: "1000+",
      image: "https://i.pinimg.com/474x/22/21/6c/22216c00f5c0834615d8281ba06b8bd2.jpg",
      description: "Pameran yang menampilkan koleksi artefak maritim dan karya seni kontemporer bertema kelautan.",
      price: "Rp 50.000",
      features: ["Guided Tour", "Photo Session", "Workshop"],
      organizer: "Museum Nasional Indonesia",
      contact: "info@museum.id",
      website: "www.museum.id",
      additionalInfo: [
        "Audio guide tersedia",
        "Cafe di lokasi",
        "Toko suvenir"
      ]
    },
    {
      id: 3,
      type: 'performance',
      month: '01',
      date: "1 January 2025",
      time: "15:00 - 22:00 WIB",
      title: "Karnaval Budaya Pesisir",
      location: "Pantai Losari, Makassar",
      participants: "3000+",
      image: "https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_1280.jpg",
      description: "Karnaval meriah yang menampilkan keunikan budaya pesisir Indonesia dengan parade dan pertunjukan spektakuler.",
      price: "Gratis",
      features: ["Parade", "Live Music", "Kuliner", "Fireworks"],
      organizer: "Pemkot Makassar",
      contact: "info@makassar.go.id",
      website: "www.makassar.go.id",
      additionalInfo: [
        "Area kuliner",
        "Panggung hiburan",
        "Booth UMKM"
      ]
    }
  ];

  // Improved filter activities function
  const filteredActivities = activities.filter(activity => {
    const typeMatch = activeFilter === 'all' || activity.type === activeFilter;
    const monthMatch = selectedMonth === 'all' || activity.month === selectedMonth;
    return typeMatch && monthMatch;
  });

  // Improved bookmark toggle with optional animation
  const toggleBookmark = useCallback((id, e) => {
    e.stopPropagation();
    setBookmarkedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  // Share functionality placeholder
  const handleShare = useCallback((activity, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: activity.title,
        text: activity.description,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback for browsers not supporting Web Share API
      navigator.clipboard.writeText(`${activity.title}\n${activity.description}\n${window.location.href}`)
        .then(() => alert('Link copied to clipboard'))
        .catch(err => console.error('Could not copy text', err));
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1571984405176-5958bd9ac31d?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Festival Background"
            onError={(e) => {
              e.target.src = '/fallback-image.jpg';
              e.target.onerror = null;
            }}
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
              <span className="font-javanese text-4xl text-primary">ꦏꦼꦒꦶꦪꦠꦤ꧀</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              Kegiatan & Acara
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              Temukan berbagai kegiatan menarik yang menampilkan kekayaan budaya Indonesia
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
          aria-label="Scroll down"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex overflow-x-auto space-x-4 pb-2 md:pb-0 scrollbar-hide">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-label={`Filter ${filter.label}`}
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

            {/* Month Selector */}
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                aria-label="Select month"
                className="pl-4 pr-8 py-2.5 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] appearance-none cursor-pointer"
              >
                {months.map(month => (
                  <option key={month.id} value={month.id}>
                    {month.label}
                  </option>
                ))}
              </select>
              <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#15803D]/5" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      onError={(e) => {
                        e.target.src = '/fallback-image.jpg';
                        e.target.onerror = null;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
  <div className="absolute bottom-4 left-4 text-white">
    <div className="flex items-center space-x-4">
      <span className="flex items-center text-sm backdrop-blur-sm bg-white/10 px-2 py-1 rounded-full">
        <Calendar size={14} className="mr-1" />
        {activity.date}
      </span>
      <span className="flex items-center text-sm backdrop-blur-sm bg-white/10 px-2 py-1 rounded-full">
        <Clock size={14} className="mr-1" /> {/* Close the Clock component */}
        {activity.time} {/* Assuming you want to display the time here */}
      </span>
    </div>
  </div>
</div>

                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#1E40AF]">
                        {activity.price}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(activity.id, e)}
                        aria-label={`${bookmarkedEvents.has(activity.id) ? 'Remove from' : 'Add to'} bookmarks`}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                          bookmarkedEvents.has(activity.id)
                            ? 'bg-[#1E40AF] text-white'
                            : 'bg-white/90 text-gray-600 hover:bg-[#1E40AF] hover:text-white'
                        }`}
                      >
                        <Bookmark size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {activity.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1.5 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Info Section */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-[#1E40AF]" />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2 text-[#1E40AF]" />
                        <span className="text-sm">{activity.participants} peserta</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Info size={16} className="mr-2 text-[#1E40AF]" />
                        <span className="text-sm">Oleh: {activity.organizer}</span>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-2 mb-6 bg-gray-50 p-3 rounded-lg">
                      {activity.additionalInfo.map((info, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <ChevronRight size={14} className="mr-2 text-[#1E40AF]" />
                          {info}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button 
                        onClick={() => {/* Handle registration logic */}}
                        className="flex-1 bg-[#1E40AF] text-white py-3 rounded-lg hover:bg-[#1E40AF]/90 transition-colors flex items-center justify-center group"
                      >
                        <Ticket className="mr-2" size={18} />
                        <span>Daftar Sekarang</span>
                      </button>
                      <button 
                        onClick={(e) => handleShare(activity, e)}
                        aria-label={`Share ${activity.title}`}
                        className="px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Share2 size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredActivities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <Calendar size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak Ada Kegiatan</h3>
              <p className="text-gray-600">
                Tidak ada kegiatan yang ditemukan untuk filter yang dipilih
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Calendar Section */}
      
      {/* <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#1E40AF]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="font-javanese text-3xl text-[#1E40AF]">ꦏꦭꦺꦤ꧀ꦢꦼꦂ</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#15803D] bg-clip-text text-transparent">
              Kalender Kegiatan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat jadwal lengkap kegiatan yang akan datang dan rencanakan kunjungan Anda
            </p>
          </div>
          
          <div className="relative bg-white rounded-xl p-8 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 to-[#15803D]/5 opacity-30" />
            <div className="relative aspect-[16/9]">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <CalendarIcon size={48} className="mx-auto mb-4 text-[#1E40AF]/30" />
                  <p className="text-lg font-medium text-gray-600">
                    Calendar Component Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ActivityPage;