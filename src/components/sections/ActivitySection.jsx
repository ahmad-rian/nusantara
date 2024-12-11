import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, Star, Ticket, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const ActivitySection = ({ preview = false }) => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const activities = [
    {
      id: 1,
      date: "20 December 2024",
      time: "12:00 - 24:00 WIB",
      title: "Dieng Cultru Festival",
      location: "Dieng, Wonosobo",
      participants: "5000+",
      image: "https://i.pinimg.com/736x/ba/dc/b6/badcb6d71a683f6e9604d390307be351.jpg",
      category: "festival",
      description: "Festival tahunan yang menampilkan keragaman budaya bahari Indonesia",
      features: ["Live Music", "Kuliner", "Workshop", "Pameran"],
      price: "Gratis",
      rating: 4.8,
      reviews: 120
    },
    {
      id: 2,
      date: "25 December 2024",
      time: "10:00 - 16:00 WIB",
      title: "Pameran Budaya Maritim",
      location: "Museum Nasional, Jakarta",
      participants: "1000+",
      image: "https://i.pinimg.com/736x/d5/69/8d/d5698dda317936e6bddc63ed2f0a5812.jpg",
      category: "exhibition",
      description: "Pameran seni dan artefak maritim dari berbagai daerah",
      features: ["Guided Tour", "Photo Session", "Workshop"],
      price: "Rp 50.000",
      rating: 4.6,
      reviews: 85
    },
    {
      id: 3,
      date: "1 January 2025",
      time: "15:00 - 22:00 WIB",
      title: "Karnaval Budaya Pesisir",
      location: "Pantai Losari, Makassar",
      participants: "3000+",
      image: "https://i.pinimg.com/736x/0b/ee/66/0bee663c30922ba3df41bed63d45e18d.jpg",
      category: "carnival",
      description: "Karnaval meriah yang menampilkan keunikan budaya pesisir",
      features: ["Parade", "Live Music", "Kuliner", "Fireworks"],
      price: "Gratis",
      rating: 4.9,
      reviews: 150
    },
    
  ];

  const filters = [
    { id: 'all', label: 'Semua', icon: <Globe size={18} /> },
    { id: 'festival', label: 'Festival', icon: <Star size={18} /> },
    { id: 'exhibition', label: 'Pameran', icon: <Globe size={18} /> },
    { id: 'carnival', label: 'Karnaval', icon: <Star size={18} /> },
    { id: 'workshop', label: 'Workshop', icon: <Globe size={18} /> }
  ];

  const filteredActivities = activities.filter(activity => 
    activeFilter === 'all' || activity.category === activeFilter
  );

  const displayedActivities = preview ? filteredActivities.slice(0, 3) : filteredActivities;

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
          <h2 className="font-javanese text-3xl text-primary mb-2">ꦏꦼꦒꦶꦪꦠꦤ꧀</h2>
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Kegiatan Nusantara
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Temukan berbagai kegiatan menarik yang menampilkan kekayaan budaya Indonesia
          </p>
        </motion.div>

        {/* Filters */}
        {!preview && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </motion.button>
            ))}
          </div>
        )}

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-56">
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-1" />
                        {activity.date}
                      </span>
                      <span className="flex items-center text-sm backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                        <Clock size={14} className="mr-1" />
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gray-800/90 text-white' 
                      : 'bg-white/90 text-primary'
                  } backdrop-blur-sm`}>
                    {activity.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activity.title}
                  </h4>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400" />
                    <span className={`ml-1 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {activity.rating} ({activity.reviews})
                    </span>
                  </div>
                </div>

                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {activity.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className={`flex items-center ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                  <div className={`flex items-center ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{activity.participants} peserta</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center group ${
                  isDark
                    ? 'bg-primary/20 text-primary hover:bg-primary/30'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}>
                  <Ticket className="mr-2" size={18} />
                  <span>Daftar Sekarang</span>
                  <ArrowRight 
                    size={16} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
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
    to="/activities"
    className={`inline-flex items-center px-8 py-4 rounded-full transition-all transform hover:scale-105 ${
      isDark 
        ? 'bg-primary/10 text-primary hover:bg-primary/20' 
        : 'bg-primary text-white hover:bg-primary/90'
    } shadow-lg`}
  >
    <span>Lihat Semua Kegiatan</span>
    <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
  </Link>
</motion.div>

{/* Calendar Preview */}
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
        Kalender Kegiatan
      </h4>
      <p className={`${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        Jelajahi jadwal lengkap kegiatan yang akan datang
      </p>
    </div>

    {/* Calendar Placeholder */}
    <div className={`aspect-[16/9] rounded-xl overflow-hidden ${
      isDark ? 'bg-gray-700/50' : 'bg-gray-100'
    }`}>
      <div className="w-full h-full flex items-center justify-center">
        <span className={`${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Calendar Component Coming Soon
        </span>
      </div>
    </div>

    {/* Upcoming Events Preview */}
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {activities.slice(0, 3).map((event, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            isDark 
              ? 'bg-gray-700/50' 
              : 'bg-white'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {event.date}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              isDark 
                ? 'bg-gray-600 text-gray-300' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {event.category}
            </span>
          </div>
          <h5 className={`font-medium mb-1 truncate ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {event.title}
          </h5>
          <div className="flex items-center text-sm">
            <MapPin size={14} className={`mr-1 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={`truncate ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {event.location}
            </span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
)}

      </div>
    </section>
  );
};

export default ActivitySection;