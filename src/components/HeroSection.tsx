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
            
            <br />
<span className="text-center">
  <span className="block text-7xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 text-transparent bg-clip-text mt-6">
    DOMINATE
  </span>
  <span className="block text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mt-6">
    The Digital
  </span>
  <span className="block text-8xl font-extrabold bg-gradient-to-r from-green-600 to-lime-600 text-transparent bg-clip-text mt-6">
    BATTLEFIELD
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
  onClick={() => scrollToSection('contact')}
  className="btn-hero group flex items-center"
>
  Start Your Project
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</button>

            
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-secondary group flex items-center"
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
  );
};

export default HeroSection;