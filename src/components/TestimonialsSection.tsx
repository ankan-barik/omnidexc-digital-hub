import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "OmniDexC transformed our brand identity completely. Their attention to detail and creative approach exceeded our expectations. The team delivered exceptional results on time and within budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c006?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      content: "Working with OmniDexC was a game-changer for our digital presence. Their web development skills and branding expertise helped us achieve a 300% increase in online engagement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      content: "The team at OmniDexC understood our vision perfectly. They created a stunning website and brand identity that truly represents our creative spirit. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with OmniDexC.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary/20"
                />
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's work together to create something amazing for your business.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;