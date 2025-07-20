import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver nothing but the best, ensuring every project exceeds expectations.",
      iconBg: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
      glowColor: "shadow-cyan-500/50",
      titleColor: "text-cyan-600",
      borderColor: "border-cyan-200"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision combined with our expertise creates extraordinary results.",
      iconBg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
      glowColor: "shadow-emerald-500/50",
      titleColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends to bring cutting-edge solutions to your business.",
      iconBg: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600",
      glowColor: "shadow-orange-500/50",
      titleColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every deliverable undergoes rigorous testing and quality assurance.",
      iconBg: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
      glowColor: "shadow-violet-500/50",
      titleColor: "text-violet-600",
      borderColor: "border-violet-200"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">OmniDexC</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            We are a full-service digital agency committed to transforming businesses through 
            innovative technology solutions and creative excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Our Story
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Founded with a vision to bridge the gap between innovative ideas and digital reality, 
              OmniDexC has evolved into a trusted partner for businesses seeking comprehensive 
              digital solutions that drive real results.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Our multidisciplinary team of designers, developers, strategists, and creative professionals 
              combines technical expertise with innovative thinking to deliver solutions that not only 
              meet your requirements but exceed your expectations and drive your business forward.
            </p>
            
            {/* Key Differentiators */}
            <div className="space-y-3 sm:space-y-4 pt-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-blue-100 dark:border-blue-800">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">End-to-end digital solutions under one roof</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-100 dark:border-purple-800">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Proven track record with 10+ successful projects</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-cyan-100 dark:border-cyan-800">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">Dedicated support throughout your digital journey</span>
              </div>
            </div>
            
            {/* Stats - Mobile Optimized */}
            <div className="pt-6">
              {/* Mobile: Single column layout */}
              <div className="grid grid-cols-1 gap-4 sm:hidden">
                <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-100 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-cyan-100 dark:border-cyan-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Expert Support</div>
                </div>
              </div>

              {/* Tablet and up: 3-column layout */}
              <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    10+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Projects Completed</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-100 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    20+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Happy Clients</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-cyan-100 dark:border-cyan-800 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">Expert Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                To empower businesses with digital solutions that drive growth, enhance user experience, 
                and create lasting value in an ever-evolving digital world.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                To become the leading digital agency that sets industry standards for innovation, 
                quality, and client satisfaction across all digital touchpoints.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center group hover:shadow-2xl transition-all duration-300 border ${value.borderColor} dark:border-opacity-50 shadow-lg`}>
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${value.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${value.glowColor} group-hover:shadow-xl`}>
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${value.titleColor} group-hover:text-opacity-80 transition-colors duration-300`}>
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;