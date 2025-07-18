import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Disclaimer', path: '/disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Enhanced Red torn paper effect */}
      <div className="bg-red-500 h-20 relative overflow-hidden">
        {/* Multiple torn layers for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-red-600"
             style={{
               clipPath: 'polygon(0% 100%, 1% 75%, 3% 85%, 5% 70%, 7% 80%, 9% 65%, 11% 75%, 13% 60%, 15% 70%, 17% 55%, 19% 65%, 21% 50%, 23% 60%, 25% 45%, 27% 55%, 29% 40%, 31% 50%, 33% 35%, 35% 45%, 37% 30%, 39% 40%, 41% 25%, 43% 35%, 45% 20%, 47% 30%, 49% 15%, 51% 25%, 53% 10%, 55% 20%, 57% 5%, 59% 15%, 61% 0%, 63% 10%, 65% 5%, 67% 15%, 69% 10%, 71% 20%, 73% 15%, 75% 25%, 77% 20%, 79% 30%, 81% 25%, 83% 35%, 85% 30%, 87% 40%, 89% 35%, 91% 45%, 93% 40%, 95% 50%, 97% 45%, 99% 55%, 100% 50%, 100% 100%)'
             }}>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-800"
             style={{
               clipPath: 'polygon(0% 100%, 2% 80%, 4% 90%, 6% 75%, 8% 85%, 10% 70%, 12% 80%, 14% 65%, 16% 75%, 18% 60%, 20% 70%, 22% 55%, 24% 65%, 26% 50%, 28% 60%, 30% 45%, 32% 55%, 34% 40%, 36% 50%, 38% 35%, 40% 45%, 42% 30%, 44% 40%, 46% 25%, 48% 35%, 50% 20%, 52% 30%, 54% 15%, 56% 25%, 58% 10%, 60% 20%, 62% 5%, 64% 15%, 66% 0%, 68% 10%, 70% 5%, 72% 15%, 74% 10%, 76% 20%, 78% 15%, 80% 25%, 82% 20%, 84% 30%, 86% 25%, 88% 35%, 90% 30%, 92% 40%, 94% 35%, 96% 45%, 98% 40%, 100% 50%, 100% 100%)'
             }}>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-900"
             style={{
               clipPath: 'polygon(0% 100%, 3% 85%, 5% 95%, 7% 80%, 9% 90%, 11% 75%, 13% 85%, 15% 70%, 17% 80%, 19% 65%, 21% 75%, 23% 60%, 25% 70%, 27% 55%, 29% 65%, 31% 50%, 33% 60%, 35% 45%, 37% 55%, 39% 40%, 41% 50%, 43% 35%, 45% 45%, 47% 30%, 49% 40%, 51% 25%, 53% 35%, 55% 20%, 57% 30%, 59% 15%, 61% 25%, 63% 10%, 65% 20%, 67% 5%, 69% 15%, 71% 0%, 73% 10%, 75% 5%, 77% 15%, 79% 10%, 81% 20%, 83% 15%, 85% 25%, 87% 20%, 89% 30%, 91% 25%, 93% 35%, 95% 30%, 97% 40%, 99% 35%, 100% 45%, 100% 100%)'
             }}>
        </div>
        
        {/* Shadow effect for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            {/* Logo - Same as Header */}
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 relative group-hover:scale-110 transition-all duration-700 ease-out">
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-red-400/40 group-hover:border-red-300/80 transition-all duration-500 animate-spin" style={{animationDuration: '8s'}} />
                  
                  {/* Inner rotating ring - opposite direction */}
                  <div className="absolute inset-1 rounded-full border border-red-400/30 group-hover:border-red-300/60 transition-all duration-500" 
                       style={{
                         animation: 'spin 6s linear infinite reverse'
                       }} />
                  
                  {/* Core logo */}
                  <div className="absolute inset-2 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/30 transition-all duration-500 relative overflow-hidden">
                    <span className="text-lg font-black text-white relative z-10 group-hover:scale-110 transition-transform duration-300">O</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-300/30 to-red-500/30 rounded-full animate-pulse" />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150" />
                  
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-150" />
                </div>
              </div>
              
              {/* Company Name */}
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent group-hover:from-red-300 group-hover:via-white group-hover:to-red-300 transition-all duration-500 tracking-wide">
                  OmniDexC
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted digital partner for comprehensive branding solutions and cutting-edge technology services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">business.omnidexc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">+91 9122372108</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">SIGN UP FOR EMAILS</h3>
            <p className="text-gray-300 mb-4">
              Get first dibs on new arrivals and advance notice on everything we do.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
              <button className="px-6 py-3 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition-all">
                Sign Me Up
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links as Round Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 rounded-full font-medium text-sm hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} OmniDexC. All rights reserved.
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://linkedin.com/company/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;