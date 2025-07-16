import { ArrowRight, PlayCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="text-foreground">Delivered</span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-right">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-hero group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-secondary group"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 fade-in-up">
            <p className="text-sm text-muted-foreground mb-6">Trusted by startups and enterprises worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary">100+</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-accent">50+</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary">24/7</span>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-8 mt-2 text-xs text-muted-foreground">
              <span>Projects</span>
              <span>Clients</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;