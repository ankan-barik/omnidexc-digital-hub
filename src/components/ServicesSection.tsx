import { Code, Smartphone, Palette, Video, Users, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies, responsive design, and optimal performance.",
      features: ["React/Next.js", "Node.js", "Cloud Deployment", "SEO Optimized"],
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-primary-light to-accent"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content creation from concept to final edit, including promotional videos and social media content.",
      features: ["Concept Development", "Professional Filming", "Post-Production", "Motion Graphics"],
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategies that build brand awareness and engage your target audience effectively.",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      gradient: "from-primary to-accent"
    },
    {
      icon: Star,
      title: "Branding Solutions",
      description: "Complete brand identity development that tells your story and connects with your audience on an emotional level.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
      gradient: "from-primary-glow to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your unique business needs 
            and drive measurable results across all channels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-professional p-8 group">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <button className="mt-6 text-primary font-semibold hover:text-accent transition-colors group-hover:translate-x-2 transition-transform duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Process</h3>
            <p className="text-lg text-muted-foreground">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Developing the perfect solution approach" },
              { step: "03", title: "Execution", description: "Bringing your vision to life" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;