import { ArrowRight, PlayCircle, X, Calendar, Clock, Users, MessageSquare, Mail, Phone, Briefcase, CheckCircle, Star, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  // Add CSS animations for glow effect
  const glowStyles = `
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(220, 38, 127, 0.3), 0 0 40px rgba(220, 38, 127, 0.1);
      }
      50% {
        box-shadow: 0 0 30px rgba(220, 38, 127, 0.5), 0 0 60px rgba(220, 38, 127, 0.2);
      }
    }
    
    @keyframes glow-pulse {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  // Inject styles
  if (typeof document !== 'undefined') {
    const existingStyle = document.getElementById('hero-glow-styles');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'hero-glow-styles';
      style.textContent = glowStyles;
      document.head.appendChild(style);
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Get day from the selected date
    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Create booking details
    const bookingDetails = {
      ...formData,
      day: dayOfWeek,
      submittedAt: new Date().toISOString()
    };
    
    // Here you would typically send this data to your backend
    console.log('Booking Details:', bookingDetails);
    alert('Consultation booked successfully! We will contact you shortly.');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
    setIsBookingModalOpen(false);
  };

  const serviceOptions = [
    'Web Development',
    'App Development', 
    'UI/UX Design',
    'Video Production',
    'Social Media',
    'Branding',
    'E-commerce Solutions',
    'Digital Marketing',
    'Other'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              <br />
              <span className="text-center">
                <span className="block text-9xl font- bg-gradient-to-r from-red-600 to-violet-600 text-transparent bg-clip-text mt-6">
                  OmniDexC
                </span>
                
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up">
              We transform your ideas into powerful digital solutions. From web development to branding, 
              we're your complete digital partner for success in the modern world.
            </p>

            {/* Key Services */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
              {[
                'Web Development', 
                'App Development', 
                'UI/UX Design', 
                'Video Production', 
                'Social Media', 
                'Branding'
              ].map((service, index) => (
                <span 
                  key={service}
                  className="px-4 py-2 bg-secondary/50 border border-border/50 rounded-full text-sm font-medium text-foreground"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center slide-in-right">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group flex items-center overflow-hidden"
               
              >
                {/* Animated glow overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    animation: 'shimmer 2s ease-in-out infinite'
                  }}
                />
                
                {/* Button content */}
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-75"
                  style={{
                    background: 'linear-gradient(45deg, rgba(220, 38, 127, 0.4), rgba(236, 72, 153, 0.4))',
                    filter: 'blur(8px)',
                    animation: 'glow-pulse 2s ease-in-out infinite'
                  }}
                />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group flex items-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 fade-in-up">
              <p className="text-sm text-muted-foreground mb-8">Trusted by startups and enterprises worldwide</p>
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">100+</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Projects Delivered</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-accent">50+</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Happy Clients</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">24/7</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-slate-700">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-t-3xl">
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Book Your Consultation</h2>
                <p className="text-blue-100 text-lg">Let's turn your vision into reality</p>
              </div>
              
              {/* Trust Badges */}
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center gap-2 text-white/90">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Star className="w-5 h-5" />
                  <span className="text-sm font-medium">Expert Consultation</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tell us about yourself</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Users className="w-4 h-4 inline mr-2 text-blue-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-blue-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4 inline mr-2 text-blue-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-blue-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Phone className="w-4 h-4 inline mr-2 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-blue-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details Section */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointment Details</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred time</p>
                  </div>
                </div>
                
                {/* Service Hours Info */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Service Hours: Monday - Saturday, 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        We'll confirm your appointment within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 inline mr-2 text-green-600" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-green-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Clock className="w-4 h-4 inline mr-2 text-green-600" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-green-300"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Selection Section */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">What can we help you with?</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Briefcase className="w-4 h-4 inline mr-2 text-purple-600" />
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-all duration-200 hover:border-purple-300"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      <MessageSquare className="w-4 h-4 inline mr-2 text-purple-600" />
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white resize-none transition-all duration-200 hover:border-purple-300"
                      placeholder="Tell us about your project requirements, goals, timeline, and any specific needs. The more details you provide, the better we can help you."
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 px-8 py-4 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Book Consultation
                </button>
              </div>
              
              {/* Footer Note */}
              <div className="text-center pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Your information is secure and will only be used to contact you about your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;