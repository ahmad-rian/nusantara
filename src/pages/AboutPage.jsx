import React from 'react';
import { motion } from 'framer-motion';
import { 
    Anchor, 
    Ship, 
    Map, 
    Globe, 
    Navigation,
    Compass,
    Sailboat, 
    MapPin,
    Building
  } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutPage = () => {
  const { isDark } = useTheme();

  const maritimeStats = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "17.504",
      label: "Pulau",
      description: "Tersebar di Nusantara"
    },
    {
      icon: <Map className="w-8 h-8" />,
      value: "99.093",
      label: "KM Garis Pantai",
      description: "Terpanjang kedua di dunia"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      value: "6",
      label: "Laut Besar",
      description: "Mengelilingi kepulauan"
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: "300+",
      label: "Pelabuhan",
      description: "Jalur perdagangan aktif"
    }
];

  const timeline = [
    {
      year: "2000 SM - 200 M",
      era: "Pra-Sejarah",
      title: "Awal Peradaban Maritim",
      description: "Nenek moyang bangsa Indonesia mulai berlayar dengan perahu-perahu sederhana. Bukti arkeologis menunjukkan adanya jalur pelayaran aktif antar pulau di Nusantara.",
      details: [
        "Pengembangan teknologi perahu cadik",
        "Jalur perdagangan rempah awal",
        "Migrasi suku-suku Austronesia",
        "Pembentukan komunitas pesisir awal"
      ],
      image: "data:image/jpeg;base64,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",
      location: "Kepulauan Nusantara"
    },
    {
      year: "Abad 7-13",
      era: "Kejayaan Maritim Awal",
      title: "Kerajaan Sriwijaya",
      description: "Sriwijaya menjadi pusat perdagangan maritim terbesar di Asia Tenggara, menguasai Selat Malaka dan jalur perdagangan internasional.",
      details: [
        "Penguasaan Selat Malaka",
        "Pusat pembelajaran Buddhisme",
        "Hubungan diplomatik dengan Tiongkok",
        "Pengembangan teknologi pelayaran"
      ],
      image: "https://i.pinimg.com/736x/52/14/ca/5214ca5de5af692d97bc12cef57aa9a1.jpg",
      location: "Sumatera Selatan"
    },
    {
      year: "Abad 13-16",
      era: "Masa Keemasan",
      title: "Kejayaan Majapahit",
      description: "Majapahit mencapai puncak kejayaan sebagai kerajaan maritim. Wilayah kekuasaannya mencakup hampir seluruh Nusantara dan sebagian Asia Tenggara.",
      details: [
        "Armada laut terkuat di Nusantara",
        "Ekspansi wilayah melalui jalur maritim",
        "Perdagangan internasional yang pesat",
        "Pengembangan pelabuhan-pelabuhan besar"
      ],
      image: "https://i.pinimg.com/736x/94/90/bd/9490bde1e233387a4604d6426bfd316b.jpg",
      location: "Jawa Timur"
    },
    {
      year: "Abad 17-19",
      era: "Masa Kolonial",
      title: "Perjuangan Maritim",
      description: "Periode perjuangan mempertahankan kedaulatan maritim dari kolonialisme. Perlawanan dari berbagai kesultanan dan kerajaan lokal di Nusantara.",
      details: [
        "Perlawanan Sultan Hasanuddin",
        "Perang Malaka",
        "Perjuangan Sultan Baabullah",
        "Pengembangan armada tradisional"
      ],
      image: "https://d22gwcrfo2de51.cloudfront.net/wp-content/uploads/2024/09/20210522-Hari-Maritim-scaled.jpg",
      location: "Berbagai Wilayah Nusantara"
    },
    {
      year: "1945-1957",
      era: "Kemerdekaan",
      title: "Pembentukan Negara Maritim",
      description: "Pembentukan identitas Indonesia sebagai negara maritim modern. Deklarasi Djuanda menegaskan konsep negara kepulauan Indonesia.",
      details: [
        "Deklarasi Djuanda 1957",
        "Pembentukan armada nasional",
        "Nasionalisasi pelabuhan",
        "Pengembangan industri pelayaran"
      ],
      image: "https://i.pinimg.com/736x/77/7b/b5/777bb54fcff91b3f4180a8d536de81f6.jpg",
      location: "Indonesia"
    },
    {
      year: "1957-Sekarang",
      era: "Era Modern",
      title: "Visi Poros Maritim Dunia",
      description: "Indonesia bergerak menuju visi sebagai poros maritim dunia. Pengembangan infrastruktur dan konektivitas maritim untuk masa depan.",
      details: [
        "Pembangunan tol laut",
        "Modernisasi pelabuhan",
        "Pengembangan industri galangan kapal",
        "Konservasi laut dan pesisir"
      ],
      image: "https://images.pexels.com/photos/2126395/pexels-photo-2126395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Seluruh Indonesia"
    }
];

  return (
    <div className={`relative min-h-screen ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Kapal Pinisi"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50'
              : 'bg-gradient-to-b from-black/30 via-transparent to-black/30'
          }`} />
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-javanese text-4xl text-primary">ꦱꦼꦗꦫꦃ</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
            >
              Sejarah Maritim Indonesia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Menelusuri perjalanan panjang Indonesia sebagai negara maritim terbesar di dunia dari masa ke masa
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className={`relative py-24 overflow-hidden ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {maritimeStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-xl text-center transition-all hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700/50 backdrop-blur-sm' 
                    : 'bg-white shadow-lg'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDark ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <span className="text-primary">{stat.icon}</span>
                </div>
                <h4 className={`text-3xl font-bold mb-2 ${
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
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`relative py-24 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="absolute inset-0">
          <div className={`absolute inset-0 opacity-5 ${
            isDark ? 'bg-pattern-dark' : 'bg-pattern-light'
          }`} style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60' stroke='%231E40AF' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Perjalanan Sejarah Maritim
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Menelusuri jejak kejayaan maritim Indonesia dari masa ke masa
            </p>
          </motion.div>

          {/* Timeline Content */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ item, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col lg:flex-row gap-12 items-center"
  >
    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative rounded-xl overflow-hidden shadow-xl group"
      >
        <img 
          src={item.image}
          alt={item.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full inline-block mb-2">
            <p className="text-sm font-medium">{item.era}</p>
          </div>
          <h3 className="text-2xl font-bold">{item.year}</h3>
          <p className="text-sm text-gray-300 mt-1">{item.location}</p>
        </div>
      </motion.div>
    </div>
    
    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
      <div className={`relative pl-6 border-l-2 ${
        isDark ? 'border-primary/30' : 'border-primary/20'
      }`}>
        <h3 className={`text-3xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {item.title}
        </h3>
        <p className={`mb-6 leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {item.description}
        </p>
        <ul className="space-y-3">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                isDark ? 'bg-primary/20' : 'bg-primary/10'
              }`}>
                <Navigation size={12} className="text-primary" />
              </span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default AboutPage;