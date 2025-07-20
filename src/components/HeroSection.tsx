import { ArrowRight, PlayCircle, X, Calendar, Clock, Users, MessageSquare, Mail, Phone, Briefcase, CheckCircle, Star, Shield, Zap, Sparkles, Code, Palette, Video, Share2, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    date?: string;
    time?: string;
    service?: string;
  }>({});
  const [bookedSlots, setBookedSlots] = useState(new Map()); // Track booked slots per date
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  // Auto-hide success message and handle modal closure
  useEffect(() => {
    if (submitStatus === 'success') {
      // Immediately scroll to top when booking is successful
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Close modal after 3 seconds
      const timer = setTimeout(() => {
        setIsBookingModalOpen(false);
        setSubmitStatus(null);
      }, 3000); // 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Load existing bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('omnidexc-bookings');
    if (savedBookings) {
      try {
        const bookings = JSON.parse(savedBookings);
        const slotsMap = new Map();
        bookings.forEach(booking => {
          const dateKey = booking.date;
          if (!slotsMap.has(dateKey)) {
            slotsMap.set(dateKey, new Set());
          }
          slotsMap.get(dateKey).add(booking.time);
        });
        setBookedSlots(slotsMap);
      } catch (error) {
        console.error('Error loading bookings:', error);
      }
    }
  }, []);

  // Typewriter effect for OmniDexC
  useEffect(() => {
    const text = 'OmniDexC';
    let currentIndex = 0;

    const typewriterInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }, 300);

    return () => clearInterval(typewriterInterval);
  }, []);
  
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

    @keyframes text-fade {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Function to check if date is Sunday
  const isSunday = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() === 0; // 0 = Sunday
  };

  // Function to check if a time slot is available
  const isTimeSlotAvailable = (date, time) => {
    if (!date || !time) return true;
    const dateSlots = bookedSlots.get(date);
    return !dateSlots || !dateSlots.has(time);
  };

  // Function to check if a date is fully booked
  const isDateFullyBooked = (date) => {
    if (!date) return false;
    const dateSlots = bookedSlots.get(date);
    return dateSlots && dateSlots.size >= timeSlots.length;
  };

  // Function to get available time slots for selected date
  const getAvailableTimeSlots = (date) => {
    if (!date) return timeSlots;
    const dateSlots = bookedSlots.get(date);
    if (!dateSlots) return timeSlots;
    return timeSlots.filter(time => !dateSlots.has(time));
  };

  // Function to save booking to localStorage
  const saveBooking = (bookingData) => {
    try {
      const existingBookings = JSON.parse(localStorage.getItem('omnidexc-bookings') || '[]');
      const newBooking = {
        id: Date.now(),
        ...bookingData,
        bookedAt: new Date().toISOString()
      };
      existingBookings.push(newBooking);
      localStorage.setItem('omnidexc-bookings', JSON.stringify(existingBookings));
      
      // Update bookedSlots state
      const newBookedSlots = new Map(bookedSlots);
      if (!newBookedSlots.has(bookingData.date)) {
        newBookedSlots.set(bookingData.date, new Set());
      }
      newBookedSlots.get(bookingData.date).add(bookingData.time);
      setBookedSlots(newBookedSlots);
      
      return true;
    } catch (error) {
      console.error('Error saving booking:', error);
      return false;
    }
  };

  // Function to get next Monday if Sunday is selected
  const getNextMonday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    if (day === 0) { // If Sunday
      date.setDate(date.getDate() + 1); // Move to Monday
    }
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = async () => {
    // Reset previous errors
    setFormErrors({});
    
    // Validation
    const errors: {
      name?: string;
      email?: string;
      date?: string;
      time?: string;
      service?: string;
    } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.date) {
      errors.date = 'Please select a preferred date';
    }
    
    if (!formData.time) {
      errors.time = 'Please select a preferred time slot';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    // If there are errors, show them and return
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Check if selected date is Sunday
    if (isSunday(formData.date)) {
      setFormErrors({ date: 'We are closed on Sundays. Please select Monday-Saturday.' });
      return;
    }

    // Check if date is fully booked
    if (isDateFullyBooked(formData.date)) {
      setFormErrors({ date: 'All time slots are booked for this date. Please select a different date.' });
      return;
    }

    // Check if time slot is still available
    if (!isTimeSlotAvailable(formData.date, formData.time)) {
      setFormErrors({ time: 'This time slot has been booked. Please select a different time.' });
      setFormData(prev => ({ ...prev, time: '' }));
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get day from the selected date
      const selectedDate = new Date(formData.date);
      const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
      
      // Save booking locally first (to prevent double booking)
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        date: formData.date,
        day: dayOfWeek,
        time: formData.time,
        service: formData.service,
        message: formData.message || 'No additional details provided'
      };

      const bookingSaved = saveBooking(bookingData);
      if (!bookingSaved) {
        throw new Error('Failed to save booking locally');
      }
      
      // Create FormData object for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "e25fc0ac-254d-4787-af9c-23adf837d81c");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || 'Not provided');
      formDataToSend.append("date", formData.date);
      formDataToSend.append("day", dayOfWeek);
      formDataToSend.append("time", formData.time);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message || 'No additional details provided');
      formDataToSend.append("to", "business.omnidexc@gmail.com");
      formDataToSend.append("subject", `New Consultation Booking - ${formData.service}`);

      // Send email using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to book consultation');
      }
    } catch (error) {
      console.error('Error booking consultation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Web Development',
    'App Development', 
    'UI/UX Design',
    'Video Editing & Production',
    'Social Media Management',
    'Branding Solutions',
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Responsive Enhanced Theme Toggle */}
        <div className="fixed top-24 right-6 z-40">
          <div className="relative group cursor-pointer">
            {/* Outer glow ring - GPU accelerated */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 will-change-transform pointer-events-none"></div>
            
            {/* Main button container with optimized transitions */}
            <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full p-1 shadow-lg hover:shadow-xl transform transition-all duration-200 ease-out hover:scale-105 group-hover:border-blue-400/60 dark:group-hover:border-purple-400/60 will-change-transform">
              
              {/* Optimized inner rotating ring */}
              <div className="absolute inset-1 border border-blue-400/20 dark:border-purple-400/20 rounded-full pointer-events-none will-change-transform" 
                   style={{
                     animation: 'spin 6s linear infinite',
                     animationPlayState: 'running'
                   }}>
              </div>
              
              {/* Theme Toggle Button - Highest z-index for instant clicks */}
              <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
                <ThemeToggle />
              </div>
              
              {/* Subtle pulse effect - optimized */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 dark:from-purple-400/5 dark:to-blue-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none will-change-transform"></div>
            </div>
            
            {/* Micro particles - lightweight */}
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none will-change-transform animate-pulse"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-purple-400 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none will-change-transform animate-pulse"></div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-primary/5 dark:from-background/80 dark:via-background/90 dark:to-primary/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
           {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-center">
                <span className="block relative group">
                  {/* Typewriter OmniDexC text - Responsive sizing */}
                  <span 
                    className="inline-block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider bg-gradient-to-r from-red-600 via-pink-600 to-violet-600 dark:from-red-400 dark:via-pink-400 dark:to-violet-400 text-transparent bg-clip-text relative mt-4 md:mt-6 px-2"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: '0.05em',
                      minHeight: '1em',
                      wordBreak: 'keep-all',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {displayText}
                  </span>
                  
                  {/* Tagline - Responsive */}
                  <div className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base font-bold text-foreground/200 tracking-widest uppercase opacity-80 px-2">
                    <span className="hidden sm:inline">Digital Excellence · Creative Solutions</span>
                    <span className="sm:hidden">Digital Excellence<br />Creative Solutions</span>
                  </div>
                </span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We transform your ideas into powerful digital solutions. From web development to branding, 
              we're your complete digital partner for success in the modern world.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { 
                  name: 'Web Development', 
                  icon: Code, 
                  iconColor: 'text-blue-600 dark:text-blue-300',
                  bgColor: 'bg-blue-50 dark:bg-blue-950/40',
                  borderColor: 'border-blue-200 dark:border-blue-700',
                  hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-600/20',
                  hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-400',
                  hoverText: 'hover:text-blue-700 dark:hover:text-blue-200',
                  iconBg: 'bg-blue-100 dark:bg-blue-800/50',
                  hoverIconBg: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-600/60'
                },
                { 
                  name: 'App Development', 
                  icon: Sparkles, 
                  iconColor: 'text-purple-600 dark:text-purple-300',
                  bgColor: 'bg-purple-50 dark:bg-purple-950/40',
                  borderColor: 'border-purple-200 dark:border-purple-700',
                  hoverBg: 'hover:bg-purple-100 dark:hover:bg-purple-600/20',
                  hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-400',
                  hoverText: 'hover:text-purple-700 dark:hover:text-purple-200',
                  iconBg: 'bg-purple-100 dark:bg-purple-800/50',
                  hoverIconBg: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-600/60'
                },
                { 
                  name: 'UI/UX Design', 
                  icon: Palette, 
                  iconColor: 'text-pink-600 dark:text-pink-300',
                  bgColor: 'bg-pink-50 dark:bg-pink-950/40',
                  borderColor: 'border-pink-200 dark:border-pink-700',
                  hoverBg: 'hover:bg-pink-100 dark:hover:bg-pink-600/20',
                  hoverBorder: 'hover:border-pink-400 dark:hover:border-pink-400',
                  hoverText: 'hover:text-pink-700 dark:hover:text-pink-200',
                  iconBg: 'bg-pink-100 dark:bg-pink-800/50',
                  hoverIconBg: 'group-hover:bg-pink-200 dark:group-hover:bg-pink-600/60'
                },
                 { 
                  name: 'Social Media Management', 
                  icon: Share2, 
                  iconColor: 'text-green-600 dark:text-green-300',
                  bgColor: 'bg-green-50 dark:bg-green-950/40',
                  borderColor: 'border-green-200 dark:border-green-700',
                  hoverBg: 'hover:bg-green-100 dark:hover:bg-green-600/20',
                  hoverBorder: 'hover:border-green-400 dark:hover:border-green-400',
                  hoverText: 'hover:text-green-700 dark:hover:text-green-200',
                  iconBg: 'bg-green-100 dark:bg-green-800/50',
                  hoverIconBg: 'group-hover:bg-green-200 dark:group-hover:bg-green-600/60'
                },
                { 
                  name: 'Video Production', 
                  icon: Video, 
                  iconColor: 'text-red-600 dark:text-red-300',
                  bgColor: 'bg-red-50 dark:bg-red-950/40',
                  borderColor: 'border-red-200 dark:border-red-700',
                  hoverBg: 'hover:bg-red-100 dark:hover:bg-red-600/20',
                  hoverBorder: 'hover:border-red-400 dark:hover:border-red-400',
                  hoverText: 'hover:text-red-700 dark:hover:text-red-200',
                  iconBg: 'bg-red-100 dark:bg-red-800/50',
                  hoverIconBg: 'group-hover:bg-red-200 dark:group-hover:bg-red-600/60'
                },
               
                { 
                  name: 'Branding Solutions', 
                  icon: Award, 
                  iconColor: 'text-yellow-600 dark:text-yellow-300',
                  bgColor: 'bg-yellow-50 dark:bg-yellow-950/40',
                  borderColor: 'border-yellow-200 dark:border-yellow-700',
                  hoverBg: 'hover:bg-yellow-100 dark:hover:bg-yellow-600/20',
                  hoverBorder: 'hover:border-yellow-400 dark:hover:border-yellow-400',
                  hoverText: 'hover:text-yellow-700 dark:hover:text-yellow-200',
                  iconBg: 'bg-yellow-100 dark:bg-yellow-800/50',
                  hoverIconBg: 'group-hover:bg-yellow-200 dark:group-hover:bg-yellow-600/60'
                }
              ].map((service, index) => (
                <div 
                  key={service.name}
                  className={`group relative px-4 py-2 ${service.bgColor} backdrop-blur-sm border ${service.borderColor} rounded-2xl text-xs font-semibold text-foreground ${service.hoverBg} ${service.hoverBorder} transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-lg`}
                >
                  <div className="relative flex items-center gap-3">
                    <div className={`p-2 rounded-full ${service.iconBg} ${service.hoverIconBg} transition-all duration-300`}>
                      <service.icon className={`w-3 h-3 ${service.iconColor} group-hover:rotate-12 transition-all duration-300`} />
                    </div>
                    <span className={`font-semibold tracking-wide ${service.hoverText} transition-colors duration-300`}>
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-600 dark:to-pink-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 dark:hover:from-red-600 dark:hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group flex items-center overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white transition-all duration-300 group flex items-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16">
              <p className="text-sm text-muted-foreground mb-8">Trusted by startups and enterprises worldwide</p>
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Projects Delivered</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border border-purple-200 dark:border-purple-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Happy Clients</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">24/7</span>
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-8 rounded-t-3xl">
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
              {/* Status Messages - At the bottom of modal */}
              {submitStatus === 'success' && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-400 rounded-2xl shadow-2xl max-w-md mx-auto animate-fade-in z-50">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Consultation Booked Successfully! 🎉</h4>
                    <p className="text-green-800 dark:text-green-200 mb-2">We've received your booking request!</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Our team will review your requirements and confirm your consultation within 24 hours. 
                      We're excited to help bring your vision to life! 🚀
                    </p>
                    <div className="mt-4 text-xs text-green-600 dark:text-green-400">
                      This window will close automatically in 3 seconds...
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-6 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950 border border-red-200 dark:border-red-400 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mb-4">
                      <div className="w-6 h-6 text-white font-bold">⚠️</div>
                    </div>
                    <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Oops! Something went wrong</h4>
                    <p className="text-red-800 dark:text-red-200 mb-2">We couldn't process your booking at the moment.</p>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Please try again or reach us directly at{' '}
                      <a href="mailto:business.omnidexc@gmail.com" className="underline font-medium text-red-600 dark:text-red-400">
                        business.omnidexc@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Personal Information Section */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Tell us about yourself</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Users className="w-4 h-4 inline mr-2 text-blue-600 dark:text-blue-300" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-400`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Mail className="w-4 h-4 inline mr-2 text-blue-600 dark:text-blue-300" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-400`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Phone className="w-4 h-4 inline mr-2 text-blue-600 dark:text-blue-300" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details Section */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointment Details</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Choose your preferred time</p>
                  </div>
                </div>
                
                {/* Service Hours Info */}
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-600 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-300" />
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Service Hours: Monday - Saturday, 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                        We're closed on Sundays. We'll confirm your appointment within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Calendar className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-300" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border ${formErrors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300 dark:hover:border-green-400`}
                    />
                    {formErrors.date && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {formErrors.date}
                      </p>
                    )}
                    {!formErrors.date && formData.date && isSunday(formData.date) && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        ⚠️ We're closed on Sundays. Please select Monday-Saturday.
                      </p>
                    )}
                    {!formErrors.date && formData.date && !isSunday(formData.date) && isDateFullyBooked(formData.date) && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        ⚠️ All time slots are booked for this date. Please select a different date.
                      </p>
                    )}
                    {!formErrors.date && formData.date && !isSunday(formData.date) && !isDateFullyBooked(formData.date) && (
                      <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                        ✅ {getAvailableTimeSlots(formData.date).length} time slots available for this date.
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Clock className="w-4 h-4 inline mr-2 text-green-600 dark:text-green-300" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.date || isSunday(formData.date) || isDateFullyBooked(formData.date)}
                      className={`w-full px-4 py-3 border ${formErrors.time ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300 dark:hover:border-green-400 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <option value="">
                        {!formData.date 
                          ? "Select date first" 
                          : isSunday(formData.date) 
                            ? "Closed on Sundays" 
                            : isDateFullyBooked(formData.date)
                              ? "No slots available"
                              : "Select time slot"
                        }
                      </option>
                      {formData.date && !isSunday(formData.date) && !isDateFullyBooked(formData.date) && 
                        getAvailableTimeSlots(formData.date).map(time => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))
                      }
                    </select>
                    {formErrors.time && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {formErrors.time}
                      </p>
                    )}
                    {!formErrors.time && formData.date && !isSunday(formData.date) && !isDateFullyBooked(formData.date) && formData.time && !isTimeSlotAvailable(formData.date, formData.time) && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        ⚠️ This time slot is no longer available. Please select a different time.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Selection Section */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">What can we help you with?</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <Briefcase className="w-4 h-4 inline mr-2 text-purple-600 dark:text-purple-300" />
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border ${formErrors.service ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-400`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {formErrors.service}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      <MessageSquare className="w-4 h-4 inline mr-2 text-purple-600 dark:text-purple-300" />
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-400"
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
                  className="flex-1 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.date || isSunday(formData.date) || isDateFullyBooked(formData.date) || !isTimeSlotAvailable(formData.date, formData.time)}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Booking Consultation...
                    </div>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Book Consultation
                    </>
                  )}
                </button>
              </div>
              
              {/* Footer Note */}
              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
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