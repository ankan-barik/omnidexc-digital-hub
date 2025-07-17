import { Instagram, Linkedin, Mail, Phone, MapPin, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Video Production',
    'Social Media Management',
    'Branding Solutions'
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Portfolio',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Animated Diamond Logo - Same as Header */}
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                  <Diamond className="w-6 h-6 text-white fill-white/30 group-hover:rotate-180 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-indigo-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg scale-125" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-indigo-400 transition-all duration-500">OmniDexC</span>
                
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted digital partner for web development, mobile apps, UI/UX design, video production, 
              social media management, and comprehensive branding solutions that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">business.omnidexc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 9122372108</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">Contact</a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest insights on digital trends and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} OmniDexC. All rights reserved.
          </div>
          
          {/* Social Media Links - Enhanced with gradients */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <Instagram className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <a 
              href="https://linkedin.com/company/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              <Linkedin className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;