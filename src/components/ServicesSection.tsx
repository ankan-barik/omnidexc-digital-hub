import React, { useState } from 'react';
import { Code, Smartphone, Palette, Video, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies, responsive design, and optimal performance.",
      features: ["React/Next.js", "Node.js", "Cloud Deployment", "SEO Optimized"],
      iconBg: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
      glowColor: "shadow-cyan-500/50",
      titleColor: "text-cyan-600",
      accentColor: "bg-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      iconBg: "bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600",
      glowColor: "shadow-lime-500/50",
      titleColor: "text-lime-600",
      accentColor: "bg-lime-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      iconBg: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-600",
      glowColor: "shadow-pink-500/50",
      titleColor: "text-pink-600",
      accentColor: "bg-pink-500",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content creation from concept to final edit, including promotional videos and social media content.",
      features: ["Concept Development", "Professional Filming", "Post-Production", "Motion Graphics"],
      iconBg: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
      glowColor: "shadow-violet-500/50",
      titleColor: "text-violet-600",
      accentColor: "bg-violet-500",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategies that build brand awareness and engage your target audience effectively.",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      iconBg: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600",
      glowColor: "shadow-orange-500/50",
      titleColor: "text-orange-600",
      accentColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Star,
      title: "Branding Solutions",
      description: "Complete brand identity development that tells your story and connects with your audience on an emotional level.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
      iconBg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
      glowColor: "shadow-emerald-500/50",
      titleColor: "text-emerald-600",
      accentColor: "bg-emerald-500",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(services.length / 2)) % Math.ceil(services.length / 2));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleServices = services.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
           Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions tailored to meet your unique business needs 
            and drive measurable results across all channels.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Services Cards */}
          <div className="mx-16 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(services.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8">
                    {services.slice(slideIndex * 2, slideIndex * 2 + 2).map((service, index) => (
                      <div key={index} className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border-0 hover:border-gray-100 transform hover:-translate-y-2">
                        {/* Background Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        {/* Image with enhanced overlay */}
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                          
                          {/* Floating Icon */}
                          <div className="absolute top-6 right-6">
                            <div className={`${service.iconBg} p-3 rounded-xl shadow-lg ${service.glowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative p-8 z-10">
                          {/* Content */}
                          <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-2xl font-bold ${service.titleColor} group-hover:text-gray-800 transition-colors duration-300`}>
                              {service.title}
                            </h3>
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                          </div>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300">
                            {service.description}
                          </p>
                          
                          {/* Features with enhanced styling */}
                          <div className="space-y-3 mb-8">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                                <div className="relative mr-3">
                                  <div className={`w-2 h-2 ${service.accentColor} rounded-full`} />
                                  <div className={`absolute inset-0 w-2 h-2 ${service.accentColor} rounded-full animate-ping opacity-20`} />
                                </div>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Enhanced CTA Button */}
                          <div className="relative overflow-hidden">
                            <button className={`${service.titleColor} font-semibold hover:text-white transition-all duration-500 group/btn px-6 py-3 rounded-xl border-2 border-current hover:border-transparent relative z-10 flex items-center text-sm uppercase tracking-wide group-hover:translate-x-1`}>
                              <span className="relative z-10">See Project</span>
                              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                              <div className={`absolute inset-0 ${service.iconBg} transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 rounded-xl`}></div>
                            </button>
                          </div>
                        </div>
                        
                        {/* Subtle border glow effect */}
                        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-gray-200 transition-all duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-4">
  {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`relative w-6 h-2 transition-all duration-500 ${
        index === currentIndex 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_#a855f7]' 
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 0 100%, 4px 50%)'
      }}
    >
      {index === currentIndex && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse opacity-50"
             style={{
               clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 0 100%, 4px 50%)'
             }}
        ></div>
      )}
    </button>
  ))}
</div>

        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h3>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals", color: "from-cyan-400 to-blue-600" },
              { step: "02", title: "Strategy", description: "Developing the perfect solution approach", color: "from-purple-400 to-pink-600" },
              { step: "03", title: "Execution", description: "Bringing your vision to life", color: "from-orange-400 to-red-600" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success", color: "from-green-400 to-emerald-600" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{phase.title}</h4>
                <p className="text-gray-600 text-sm font-medium">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;