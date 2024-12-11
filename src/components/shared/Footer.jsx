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
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus('Email tidak valid');
      return;
    }

    // Simulate newsletter subscription (replace with actual API call)
    try {
      // Simulated API call
      console.log('Subscribing email:', email);
      setSubscriptionStatus('Berhasil berlangganan!');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('Gagal berlangganan. Silakan coba lagi.');
    }
  };

  return (
    <footer className={`relative overflow-hidden ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
        }`} />
        <div className={`absolute -bottom-12 -left-12 w-64 h-64 rounded-full blur-3xl ${
          isDark ? 'bg-green-500/10' : 'bg-green-500/5'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
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
              <span className="font-javanese text-3xl text-primary">ꦤꦸꦱꦤ꧀ꦠꦫ</span>
            </Link>
            <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Melestarikan dan mempromosikan kekayaan budaya dan maritim Indonesia untuk generasi mendatang.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-500 hover:text-primary'
                  } transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-bold text-primary mb-6">Tautan Cepat</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                >
                  <Link 
                    to={link.url}
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-primary'
                    } transition-colors inline-flex items-center group`}
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
            <h3 className="text-lg font-bold text-primary mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <motion.li variants={item} className="flex items-center text-gray-400">
                <Mail size={20} className="mr-3 text-primary" />
                info@nusantara.id
              </motion.li>
              <motion.li variants={item} className="flex items-center text-gray-400">
                <Phone size={20} className="mr-3 text-primary" />
                (021) 1234-5678
              </motion.li>
              <motion.li variants={item} className="flex items-start text-gray-400">
                <MapPin size={20} className="mr-3 mt-1 text-primary" />
                <span>
                  Jl. Sudirman No.123<br/>
                  Jakarta Pusat, 10220
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h3 className="text-lg font-bold text-primary mb-6">Newsletter</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Dapatkan informasi terbaru tentang kegiatan dan program kami.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat Email"
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
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
                className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors flex items-center justify-center group"
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
        <div className={`border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        } py-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Nusantara. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className={`text-sm ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-primary'
                } transition-colors`}
              >
                Kebijakan Privasi
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className={`text-sm ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-primary'
                } transition-colors`}
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