import { Target, Users, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver nothing but the best, ensuring every project exceeds expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision combined with our expertise creates extraordinary results."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends to bring cutting-edge solutions to your business."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every deliverable undergoes rigorous testing and quality assurance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OmniDexC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a full-service digital agency committed to transforming businesses through 
            innovative technology solutions and creative excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between innovative ideas and digital reality, 
              OmniDexC has evolved into a trusted partner for businesses seeking comprehensive 
              digital solutions that drive real results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our multidisciplinary team of designers, developers, strategists, and creative professionals 
              combines technical expertise with innovative thinking to deliver solutions that not only 
              meet your requirements but exceed your expectations and drive your business forward.
            </p>
            
            {/* Key Differentiators */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">End-to-end digital solutions under one roof</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Proven track record with 100+ successful projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Dedicated support throughout your digital journey</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission */}
          <div className="card-professional p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To empower businesses with digital solutions that drive growth, enhance user experience, 
              and create lasting value in an ever-evolving digital world.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading digital agency that sets industry standards for innovation, 
              quality, and client satisfaction across all digital touchpoints.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="card-professional p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;