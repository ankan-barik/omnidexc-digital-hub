import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavItemClasses = (section: string) => {
    const isActive = activeSection === section;
    return `relative transition-all duration-300 font-medium px-4 py-2 rounded-full group overflow-hidden text-sm ${
      isActive 
        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
        : 'text-gray-700 hover:text-white'
    }`;
  };

  const getMobileNavItemClasses = (section: string) => {
    const isActive = activeSection === section;
    return `text-left transition-all duration-300 font-medium px-6 py-4 rounded-xl mx-2 group relative overflow-hidden ${
      isActive 
        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Text - No underline bar */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-12 h-12 relative group-hover:scale-110 transition-all duration-700 ease-out">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 group-hover:border-blue-500/80 transition-all duration-500 animate-spin" style={{animationDuration: '8s'}} />
                
                {/* Inner rotating ring - opposite direction */}
                <div className="absolute inset-1 rounded-full border border-purple-400/30 group-hover:border-purple-500/60 transition-all duration-500" 
                     style={{
                       animation: 'spin 6s linear infinite reverse'
                     }} />
                
                {/* Core logo */}
                <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500 relative overflow-hidden">
                  {/* Holographic letter */}
                  <span className="text-lg font-black text-white relative z-10 group-hover:scale-110 transition-transform duration-300">O</span>
                  
                  {/* Scanning light effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Pulsing core */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-400/30 rounded-full animate-pulse" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150" />
                
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-150" />
              </div>
            </div>
            
            {/* Company Name - No underline bar */}
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-indigo-600 transition-all duration-500 tracking-wide">
                OmniDexC
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Centered Smaller Rounded Pill Container */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="bg-gray-100/80 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-gray-200/50 shadow-sm">
              <div className="flex items-center space-x-0.5">
                <button
                  onClick={() => scrollToSection('hero')}
                  className={getNavItemClasses('hero')}
                >
                  <span className="relative z-10">Home</span>
                  {/* Hover background for non-active items */}
                  {activeSection !== 'hero' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12 rounded-full" />
                    </>
                  )}
                  {/* Active state glow */}
                  {activeSection === 'hero' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-100 rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className={getNavItemClasses('about')}
                >
                  <span className="relative z-10">About</span>
                  {/* Hover background for non-active items */}
                  {activeSection !== 'about' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12 rounded-full" />
                    </>
                  )}
                  {/* Active state glow */}
                  {activeSection === 'about' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-100 rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className={getNavItemClasses('services')}
                >
                  <span className="relative z-10">Services</span>
                  {/* Hover background for non-active items */}
                  {activeSection !== 'services' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12 rounded-full" />
                    </>
                  )}
                  {/* Active state glow */}
                  {activeSection === 'services' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-100 rounded-full" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Corner - Contact Button & Social Media */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 group overflow-hidden ${
                activeSection === 'contact'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-gradient-to-r from-green-600 to-green-600 text-white hover:from-green-500 hover:to-green-500 hover:shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              {/* Button content */}
              <span className="relative z-10">Contact Us</span>
             
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              
              {/* Scanning light */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 rounded-full" />
            </button>

            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com/omnidexc"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 hover:text-pink-600 transition-all duration-300 p-2.5 rounded-full hover:bg-pink-50 group border border-transparent hover:border-pink-200"
              >
                <Instagram className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://linkedin.com/company/omnidexc"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 p-2.5 rounded-full hover:bg-blue-50 group border border-transparent hover:border-blue-200"
              >
                <Linkedin className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-all duration-300 p-2.5 rounded-full hover:bg-blue-50 group border border-transparent hover:border-blue-200"
          >
            <div className="relative">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 bg-gray-50/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className={getMobileNavItemClasses('hero')}
              >
                <span className="relative z-10">Home</span>
                {activeSection !== 'hero' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                )}
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className={getMobileNavItemClasses('about')}
              >
                <span className="relative z-10">About</span>
                {activeSection !== 'about' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                )}
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className={getMobileNavItemClasses('services')}
              >
                <span className="relative z-10">Services</span>
                {activeSection !== 'services' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                )}
              </button>

              {/* Mobile CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-4 rounded-full font-semibold transition-all duration-300 mx-4 mt-6 flex items-center justify-center space-x-2 group relative overflow-hidden ${
                  activeSection === 'contact'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-gradient-to-r from-green-600 to-green-600 text-white hover:from-green-500 hover:to-green-500'
                }`}
              >
                <span className="relative z-10">Contact Us</span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </button>

              {/* Mobile Social Media Links */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200 mx-4">
                <span className="text-sm text-gray-600 font-medium">Follow Us:</span>
                <a
                  href="https://instagram.com/omnidexc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-all duration-300 p-2 rounded-full hover:bg-pink-50"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/omnidexc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50"
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