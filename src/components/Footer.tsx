import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import omnidexcLogo from '@/assets/omnidexc-logo.png';

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold">OmniDexC</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Your trusted digital partner for web development, mobile apps, UI/UX design, video production, 
              social media management, and comprehensive branding solutions that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">hello@omnidexc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">123 Digital Avenue, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-accent">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4">
              Get the latest insights on digital trends and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 mb-4 md:mb-0">
            © {currentYear} OmniDexC. All rights reserved.
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/company/omnidexc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;