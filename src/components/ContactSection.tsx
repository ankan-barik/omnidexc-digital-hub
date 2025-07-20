import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Video, Smartphone, Users } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "e25fc0ac-254d-4787-af9c-23adf837d81c");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company", formData.company || 'Not specified');
      formDataToSend.append("service", formData.service);
      formDataToSend.append("budget", formData.budget || 'Not specified');
      formDataToSend.append("message", formData.message);
      formDataToSend.append("to", "business.omnidexc@gmail.com");

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Web Development',
    'App Development', 
    'UI/UX Design',
    'Video Editing & Production',
    'Social Media Management',
    'Branding Solutions',
    'Full Digital Package'
  ];

  const budgetRanges = [
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹100,000',
    '₹100,000+'
  ];

  // SVG Illustration Component - Responsive
  const ContactIllustration = () => (
    <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 600 400" className="w-full h-full max-w-lg">
        <defs>
          <linearGradient id="professionalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="deviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="professionalGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="subtleGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Professional Background Elements */}
        <circle cx="100" cy="80" r="30" fill="url(#professionalGrad)" opacity="0.1">
          <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="500" cy="320" r="25" fill="url(#accentGrad)" opacity="0.08">
          <animateTransform attributeName="transform" type="scale" values="1.05;1;1.05" dur="5s" repeatCount="indefinite"/>
        </circle>
        
        {/* Subtle Connection Lines */}
        <path d="M50 150 Q150 120 250 140" stroke="url(#professionalGrad)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M350 100 Q450 80 550 120" stroke="url(#accentGrad)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="2,4">
          <animate attributeName="stroke-dashoffset" values="0;-16;0" dur="6s" repeatCount="indefinite"/>
        </path>
        
        {/* Premium Smartphone Device */}
        <g transform="rotate(-5, 440, 240)">
          {/* Device Shadow */}
          <rect x="355" y="85" width="180" height="320" rx="30" fill="black" opacity="0.1" />
          
          {/* Main Device Body */}
          <rect x="350" y="80" width="180" height="320" rx="30" fill="url(#deviceGrad)" stroke="url(#professionalGrad)" strokeWidth="2" filter="url(#professionalGlow)" />
          
          {/* Screen Bezel */}
          <rect x="360" y="95" width="160" height="290" rx="20" fill="url(#screenGrad)" />
          
          {/* Active Screen Area */}
          <rect x="370" y="110" width="140" height="260" rx="15" fill="#000" />
          
          {/* Screen Content - Professional Dashboard */}
          <rect x="380" y="125" width="120" height="80" rx="8" fill="url(#professionalGrad)" opacity="0.1" />
          
          {/* Profile/Avatar Area */}
          <circle cx="410" cy="155" r="18" fill="url(#professionalGrad)" filter="url(#subtleGlow)" />
          <circle cx="410" cy="155" r="12" fill="white" opacity="0.9" />
          
          {/* Data Visualization Bars */}
          <rect x="440" y="140" width="45" height="4" rx="2" fill="url(#professionalGrad)" opacity="0.8" />
          <rect x="440" y="150" width="35" height="4" rx="2" fill="url(#accentGrad)" opacity="0.8" />
          <rect x="440" y="160" width="40" height="4" rx="2" fill="url(#professionalGrad)" opacity="0.6" />
          <rect x="440" y="170" width="50" height="4" rx="2" fill="url(#accentGrad)" opacity="0.6" />
          
          {/* App Grid - Professional Icons */}
          <rect x="385" y="220" width="30" height="30" rx="6" fill="url(#professionalGrad)" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="425" y="220" width="30" height="30" rx="6" fill="url(#accentGrad)" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1.02;1;1.02" dur="4s" repeatCount="indefinite"/>
          </rect>
          <rect x="465" y="220" width="30" height="30" rx="6" fill="#10b981" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1;1.03;1" dur="3.5s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="385" y="260" width="30" height="30" rx="6" fill="#f59e0b" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1.03;1;1.03" dur="2.8s" repeatCount="indefinite"/>
          </rect>
          <rect x="425" y="260" width="30" height="30" rx="6" fill="#ef4444" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1;1.01;1" dur="4.2s" repeatCount="indefinite"/>
          </rect>
          <rect x="465" y="260" width="30" height="30" rx="6" fill="#8b5cf6" opacity="0.9" filter="url(#subtleGlow)">
            <animateTransform attributeName="transform" type="scale" values="1.01;1;1.01" dur="3.3s" repeatCount="indefinite"/>
          </rect>
          
          {/* Professional Notification Badge */}
          <g transform="translate(485, 300)">
            <circle r="18" fill="url(#professionalGrad)" filter="url(#professionalGlow)" opacity="0.95" />
            <circle r="12" fill="white" />
            <text x="0" y="3" textAnchor="middle" fill="url(#professionalGrad)" fontSize="10" fontWeight="600">12</text>
          </g>
          
          {/* Status Bar */}
          <rect x="375" y="120" width="8" height="2" rx="1" fill="white" opacity="0.6" />
          <rect x="475" y="120" width="20" height="2" rx="1" fill="white" opacity="0.8" />
        </g>
        
        {/* Professional Character */}
        <g transform="translate(180, 250)">
          <ellipse cx="0" cy="100" rx="35" ry="8" fill="url(#professionalGrad)" opacity="0.2" />
          
          {/* Professional Attire */}
          <rect x="-22" y="30" width="44" height="75" rx="22" fill="url(#professionalGrad)" filter="url(#subtleGlow)" />
          
          {/* Head */}
          <circle cx="0" cy="0" r="20" fill="#fbbf24" filter="url(#subtleGlow)" />
          <path d="M-18 -8 Q0 -18 18 -8" fill="#1e293b" />
          
          {/* Professional Pose - Arms */}
          <rect x="-30" y="40" width="16" height="35" rx="8" fill="url(#professionalGrad)" transform="rotate(-20)" />
          <rect x="14" y="40" width="16" height="35" rx="8" fill="url(#professionalGrad)" transform="rotate(25)" />
          
          {/* Legs */}
          <rect x="-25" y="85" width="18" height="35" rx="9" fill="#1e293b" />
          <rect x="7" y="85" width="18" height="35" rx="9" fill="#1e293b" />
          
          {/* Professional Shoes */}
          <rect x="-22" y="115" width="12" height="8" rx="4" fill="#374151" />
          <rect x="10" y="115" width="12" height="8" rx="4" fill="#374151" />
          
          {/* Professional Device/Tablet */}
          <rect x="-28" y="35" width="20" height="12" rx="6" fill="url(#deviceGrad)" filter="url(#subtleGlow)" transform="rotate(-20)" />
          <rect x="-26" y="37" width="16" height="8" rx="4" fill="url(#accentGrad)" opacity="0.8" transform="rotate(-20)">
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
          </rect>
        </g>
        
        {/* Professional Connection Flow */}
        <path d="M210 290 Q280 260 350 285" stroke="url(#professionalGrad)" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="8,4">
          <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="4s" repeatCount="indefinite"/>
        </path>
        <path d="M210 300 Q270 320 350 305" stroke="url(#accentGrad)" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="6,6">
          <animate attributeName="stroke-dashoffset" values="0;-18;0" dur="5s" repeatCount="indefinite"/>
        </path>
        
        {/* Elegant Floating Elements */}
        <circle cx="120" cy="150" r="4" fill="url(#professionalGrad)" opacity="0.6" filter="url(#subtleGlow)">
          <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="480" cy="120" r="3" fill="url(#accentGrad)" opacity="0.6" filter="url(#subtleGlow)">
          <animateTransform attributeName="transform" type="scale" values="1.2;1;1.2" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="300" cy="180" r="3" fill="#10b981" opacity="0.5" filter="url(#subtleGlow)">
          <animateTransform attributeName="transform" type="scale" values="1;1.3;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        
        {/* Professional Communication Icons */}
        <g transform="translate(250, 100)">
          <circle r="16" fill="white" stroke="url(#professionalGrad)" strokeWidth="2" filter="url(#subtleGlow)" opacity="0.95">
            <animate attributeName="r" values="16;17;16" dur="3s" repeatCount="indefinite"/>
          </circle>
          <path d="M-6 -3 L6 -3 L6 3 L2 3 L0 6 L-2 3 L-6 3 Z" fill="url(#professionalGrad)" />
        </g>
        
        <g transform="translate(320, 60)">
          <circle r="14" fill="white" stroke="url(#accentGrad)" strokeWidth="2" filter="url(#subtleGlow)" opacity="0.95">
            <animate attributeName="r" values="14;15;14" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="-2" r="2" fill="url(#accentGrad)" />
          <path d="M-4 2 Q0 4 4 2" stroke="url(#accentGrad)" strokeWidth="1.5" fill="none" />
        </g>
        
        {/* Data Flow Visualization */}
        <g opacity="0.3">
          <circle cx="150" cy="200" r="2" fill="url(#professionalGrad)">
            <animateTransform attributeName="transform" type="translate" values="0,0;8,-8;0,0" dur="6s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="160" r="2" fill="url(#accentGrad)">
            <animateTransform attributeName="transform" type="translate" values="0,0;-6,10;0,0" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="280" cy="320" r="2" fill="#10b981">
            <animateTransform attributeName="transform" type="translate" values="0,0;12,-4;0,0" dur="5s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
  );

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 sm:mb-6">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Let's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to transform your digital presence? Get in touch with us for a free consultation 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Illustration and Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Professional Illustration with Sophisticated Animation */}
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden border border-blue-100 dark:border-gray-600">
              {/* Subtle Professional Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
              </div>
              <ContactIllustration />
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Email Us</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">business.omnidexc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Call Us</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+91 9122372108</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-600">
              <div className="flex items-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Why Choose OmniDexC?</h4>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Free initial consultation',
                  'Transparent pricing and timeline',
                  '24/7 dedicated support',
                  'Ongoing maintenance included'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-600 p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mb-3 sm:mb-4">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Start Your Project</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Let's create something amazing together</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                  placeholder="Your Company Name"
                />
              </div>

              {/* Service and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>

            {/* Status Messages - Below Form */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-400 rounded-xl sm:rounded-2xl shadow-lg animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 sm:mb-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Thank You!</h4>
                  <p className="text-sm sm:text-base text-green-800 dark:text-green-200 mb-2">Your message has been sent successfully!</p>
                  <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                    We've received your project details and our team will review your requirements. 
                    Expect a personalized response within 24 hours. We're excited to help bring your vision to life! 🚀
                  </p>
                  <div className="mt-3 sm:mt-4 text-xs text-green-600 dark:text-green-400">
                    This message will disappear automatically in a few seconds...
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950 border border-red-200 dark:border-red-400 rounded-xl sm:rounded-2xl shadow-lg animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-white font-bold">⚠️</div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Oops! Something went wrong</h4>
                  <p className="text-sm sm:text-base text-red-800 dark:text-red-200 mb-2">We couldn't send your message at the moment.</p>
                  <p className="text-xs sm:text-sm text-red-700 dark:text-red-300">
                    Please try again or reach us directly at{' '}
                    <a href="mailto:business.omnidexc@gmail.com" className="underline font-medium break-words">
                      business.omnidexc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;