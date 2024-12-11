import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Youtube size={20} />, url: "#", label: "Youtube" }
  ];

  const quickLinks = [
    { label: "Tentang Kami", url: "/about" },
    { label: "Budaya & Tradisi", url: "/culture" },
    { label: "Galeri", url: "/gallery" },
    { label: "Kegiatan", url: "/activities" },
    { label: "Artikel", url: "/articles" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus('Email tidak valid');
      return;
    }
    try {
      console.log('Subscribing email:', email);
      setSubscriptionStatus('Berhasil berlangganan!');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('Gagal berlangganan. Silakan coba lagi.');
    }
  };

  return (
    <footer className={`relative overflow-hidden ${
      isDark 
        ? 'bg-[#0A1122]' // Dark navy blue matching your site
        : 'bg-white'
    }`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-blue-950/50 via-blue-900/30 to-emerald-900/20'
            : 'bg-gradient-to-br from-blue-50 via-blue-100/50 to-emerald-50'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={item}>
            <Link to="/" className="inline-block mb-6">
              <span className={`font-javanese text-3xl ${
                isDark ? 'text-white' : 'text-blue-900'
              }`}>ꦤꦸꦱꦤ꧀ꦠꦫ</span>
            </Link>
            <p className={`mb-6 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Melestarikan dan mempromosikan kekayaan budaya dan maritim Indonesia untuk generasi mendatang.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`transition-colors ${
                    isDark 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Tautan Cepat</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                >
                  <Link 
                    to={link.url}
                    className={`group inline-flex items-center ${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Hubungi Kami</h3>
            <ul className="space-y-4">
              <motion.li variants={item} className="flex items-center">
                <Mail size={20} className={`mr-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  info@nusantara.id
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <Phone size={20} className={`mr-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  (021) 1234-5678
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-start">
                <MapPin size={20} className={`mr-3 mt-1 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Jl. Sudirman No.123<br/>
                  Jakarta Pusat, 10220
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h3 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Newsletter</h3>
            <p className={`mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Dapatkan informasi terbaru tentang kegiatan dan program kami.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat Email"
                className={`w-full px-4 py-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {subscriptionStatus && (
                <p className={`text-sm ${
                  subscriptionStatus.includes('Berhasil') 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {subscriptionStatus}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-center group ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <span>Berlangganan</span>
                <ExternalLink 
                  size={16} 
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className={`border-t py-8 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 Nusantara. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className={`text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Kebijakan Privasi
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className={`text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Syarat & Ketentuan
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;