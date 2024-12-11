import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Palette, 
  Theater, 
  Book, 
  ChevronRight, 
  MapPin, 
  GalleryHorizontal,
  Landmark,
  Utensils,
  Users
} from 'lucide-react';

const CulturePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua', icon: <GalleryHorizontal size={18} /> },
    { id: 'dance', label: 'Tarian', icon: <Theater size={18} /> },
    { id: 'music', label: 'Musik', icon: <Music size={18} /> },
    { id: 'craft', label: 'Kerajinan', icon: <Palette size={18} /> },
    { id: 'tradition', label: 'Tradisi', icon: <Landmark size={18} /> },
    { id: 'culinary', label: 'Kuliner', icon: <Utensils size={18} /> }
  ];

  const culturalItems = [
    {
      category: 'dance',
      title: 'Tari Pendet',
      location: 'Bali',
      image: 'https://i.pinimg.com/736x/75/c3/83/75c3831cbd7304aa36b4d42d2ff1df76.jpg',
      description: 'Tarian tradisional yang menggambarkan penyambutan',
      details: ['Tarian sakral', 'Gerakan anggun', 'Musik gamelan'],
      participants: '2-4 penari'
    },
    {
      category: 'music',
      title: 'Gamelan Jawa',
      location: 'Jawa Tengah',
      image: 'https://i.pinimg.com/736x/a2/36/4a/a2364a37dbdbfcd17d0bd1562d43f0cd.jpg',
      description: 'Ensembel musik tradisional dengan harmonisasi yang unik',
      details: ['Alat musik perunggu', 'Skala pelog & slendro', 'Filosofi keseimbangan'],
      participants: '15-20 pemusik'
    },
    {
      category: 'craft',
      title: 'Batik Pesisir',
      location: 'Pekalongan',
      image: 'https://i.pinimg.com/736x/92/7b/79/927b79ff5f3c281dbabe19056952f08f.jpg',
      description: 'Seni membatik dengan motif khas pesisiran',
      details: ['Motif flora fauna', 'Warna cerah', 'Pengaruh multikultural'],
      participants: 'Ratusan pengrajin'
    },
    {
      category: 'tradition',
      title: 'Upacara Kasada',
      location: 'Gunung Bromo',
      image: 'https://plus.unsplash.com/premium_photo-1674832821919-3715ea87ae7e?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Ritual tahunan suku Tengger',
      details: ['Persembahan hasil bumi', 'Ritual sakral', 'Tradisi turun temurun'],
      participants: 'Seluruh masyarakat Tengger'
    },
    {
      category: 'culinary',
      title: 'Rendang Padang',
      location: 'Sumatera Barat',
      image: 'https://i.pinimg.com/736x/f1/4c/ae/f14cae9ce5c82e465734e11bf271ed5a.jpg',
      description: 'Masakan tradisional dengan rempah khas',
      details: ['UNESCO World Heritage', 'Teknik memasak tradisional', '30+ rempah'],
      participants: 'Komunitas kuliner Minang'
    },
    {
      category: 'dance',
      title: 'Tari Saman',
      location: 'Aceh',
      image: 'https://i.pinimg.com/736x/72/f4/3e/72f43eca9c263d508e45c27713984239.jpg',
      description: 'Tarian dengan gerakan tangan dan tepukan yang dinamis',
      details: ['Gerakan sinkron', 'Syair pengiring', 'Warisan UNESCO'],
      participants: '10-20 penari'
    },
{
    category: 'tradition',
    title: 'Reog Ponorogo',
    location: 'Jawa Timur',
    image: 'https://i.pinimg.com/474x/6f/b6/b5/6fb6b511af876e548d37ac46888e484c.jpg',
    description: 'Kesenian tradisional yang menggabungkan tari dan musik',
    details: ['Topeng Dadak Merak', 'Koreografi kompleks', 'Musik gamelan'],
    participants: '20-30 penampil'
  },
  {
    category: 'culinary',
    title: 'Nasi Gudeg',
    location: 'Yogyakarta',
    image: 'https://i.pinimg.com/736x/04/c5/ae/04c5ae01f5ae97af44b4c4b5fe3fb460.jpg',
    description: 'Masakan khas Yogyakarta berbahan dasar nangka muda',
    details: ['Proses masak 12 jam', 'Bumbu rahasia', 'Teknik tradisional'],
    participants: 'Pengrajin Gudeg'
  },
  {
    category: 'craft',
    title: 'Tenun Songket',
    location: 'Sumatera Barat',
    image: 'https://i.pinimg.com/736x/80/2a/ec/802aecb66075bb66c051050b93693c95.jpg',
    description: 'Kain tenun mewah dengan benang emas dan perak',
    details: ['Motif geometris', 'Benang metalik', 'Teknik warisan'],
    participants: 'Penenun tradisional'
  },
  {
    category: 'music',
    title: 'Sasando',
    location: 'Nusa Tenggara Timur',
    image: 'https://i.pinimg.com/474x/f7/7a/f8/f77af8ef79e688b37f9c0ba035ee4851.jpg',
    description: 'Alat musik petik tradisional Rote',
    details: ['32 senar', 'Resonator daun lontar', 'Teknik petik unik'],
    participants: 'Pemusik tradisional'
  },
  {
    category: 'dance',
    title: 'Tari Legong',
    location: 'Bali',
    image: 'https://i.pinimg.com/474x/52/cc/3a/52cc3a2bcfbae868f7aaf3fa6347ad51.jpg',
    description: 'Tarian klasik Bali dengan gerakan halus dan rumit',
    details: ['Kostum mewah', 'Gerakan mata', 'Formasi kompleks'],
    participants: '2-3 penari'
  }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? culturalItems 
    : culturalItems.filter(item => item.category === activeCategory);

    const CulturalMap = () => {
        return (
          <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              style={{ background: '#f8fafc' }}
            >
              {/* Indonesia Map Outline - simplified */}
              <path
                d="M100,250 L200,200 L300,220 L400,210 L500,230 L600,220 L700,240 L800,230 L900,250"
                fill="none"
                stroke="#1E40AF"
                strokeWidth="2"
                className="animate-dash"
              />
              
              {/* Cultural Points */}
              {culturalItems.map((item, index) => (
                <g key={index} className="cursor-pointer transform transition-transform hover:scale-110">
                  <circle
                    cx={100 + (index * 100)}
                    cy={250}
                    r="8"
                    fill="#1E40AF"
                    className="animate-pulse"
                  />
                  <text
                    x={100 + (index * 100)}
                    y={280}
                    textAnchor="middle"
                    fill="#1E40AF"
                    className="text-xs"
                  >
                    {item.location}
                  </text>
                </g>
              ))}
            </svg>
            
            {/* Overlay Info */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Peta Budaya</h3>
              <p className="text-sm text-gray-600">Klik titik untuk melihat detail budaya</p>
            </div>
          </div>
        );
      };

    //   const CulturalModal = ({ item, onClose }) => (
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.9 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       exit={{ opacity: 0, scale: 0.9 }}
    //       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    //     >
    //       <div className="relative bg-white rounded-xl overflow-hidden max-w-2xl w-full">
    //         <button
    //           onClick={onClose}
    //           className="absolute top-4 right-4 z-10 text-white hover:text-gray-200"
    //         >
    //           <X size={24} />
    //         </button>
            
    //         <img
    //           src={item.image}
    //           alt={item.title}
    //           className="w-full h-48 object-cover"
    //         />
            
    //         <div className="p-6">
    //           <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
    //           <p className="text-gray-600 mb-4">{item.description}</p>
              
    //           <div className="flex items-center mb-4">
    //             <MapPin size={16} className="text-primary mr-2" />
    //             <span className="text-gray-600">{item.location}</span>
    //           </div>
              
    //           <div className="space-y-2">
    //             {item.details.map((detail, idx) => (
    //               <div key={idx} className="flex items-center text-gray-600">
    //                 <ChevronRight size={16} className="text-primary mr-2" />
    //                 <span>{detail}</span>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //   );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
      <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
        <img 
          src="https://images.pexels.com/photos/2912492/pexels-photo-2912492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Budaya Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/30 via-[#15803D]/20 to-[#1E40AF]/30" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-javanese text-4xl text-primary">ꦧꦸꦢꦪ</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              Budaya & Tradisi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              Keragaman budaya dan tradisi dari Sabang sampai Merauke yang memperkaya khazanah Nusantara
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

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#1E40AF] to-[#15803D] text-white shadow-md'
                    : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#15803D]/5" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <ChevronRight size={14} className="mr-2 text-[#1E40AF]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2" />
                      {item.participants}
                    </div>
                    <button className="text-[#1E40AF] font-medium inline-flex items-center group">
                      Pelajari
                      <ChevronRight 
                        className="ml-1 transition-transform group-hover:translate-x-1" 
                        size={16} 
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section dengan styling baru */}
      {/* <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-[#1E40AF]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="font-javanese text-3xl text-[#1E40AF]">ꦥꦼꦠ</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1E40AF] to-[#15803D] bg-clip-text text-transparent">
              Peta Budaya Nusantara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi keberagaman budaya Indonesia melalui peta interaktif kami
            </p>
          </div>
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#1E40AF]/5 to-[#15803D]/5 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-lg font-medium">Interactive Cultural Map Coming Soon</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CulturePage;