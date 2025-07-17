import { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Building2, ArrowRight, Layers, Zap, Target, Hexagon, Globe, Diamond, Sparkles, Atom } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Attractive Professional Logo Options */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              
              {/* Logo Option 1: Animated Diamond */}
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                <Diamond className="w-6 h-6 text-white fill-white/30 group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              {/* Logo Option 2: Glowing Orb (uncomment to use)
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative">
                <Globe className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/50 to-purple-600/50 blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              */}
              
              {/* Logo Option 3: Sparkle Magic (uncomment to use)
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative">
                <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75 group-hover:opacity-100" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              </div>
              */}
              
              {/* Logo Option 4: Atomic Energy (uncomment to use)
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative">
                <Atom className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-teal-600/30 rounded-2xl animate-pulse" />
              </div>
              */}
              
              {/* Logo Option 5: 3D Cube Effect (uncomment to use)
              <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-700 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <span className="text-xl font-bold text-white">O</span>
                </div>
              </div>
              */}
              
              {/* Logo Option 6: Holographic Effect (uncomment to use)
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                <span className="text-xl font-bold text-white bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">O</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-white/30 to-cyan-400/0 skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-cyan-500/20 rounded-2xl animate-pulse" />
              </div>
              */}
              
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-indigo-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg scale-125" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-indigo-600 transition-all duration-500">OmniDexC</span>
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('hero')}
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
            
            {/* Professional CTA Button */}
            <div className="flex items-center space-x-4 ml-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group"
              >
                <span>Contact Us</span>
                
              </button>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
                <a 
                  href="https://instagram.com/omnidexc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-all duration-200 p-2 rounded-lg hover:bg-pink-50 group"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/omnidexc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50 group"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Services
              </button>
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-800 mx-4 mt-4 flex items-center justify-center space-x-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              {/* Mobile Social Media Links */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 mx-4">
                <span className="text-sm text-gray-500 font-medium">Follow Us:</span>
                <a 
                  href="https://instagram.com/omnidexc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-all duration-200 p-2 rounded-lg hover:bg-pink-50"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/omnidexc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;