import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "QuantumByte transformed our legacy systems into a modern, scalable platform. Their technical expertise and strategic thinking exceeded our expectations.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
  },
  {
    quote: "Working with their team felt like having an extension of our own engineering department. They delivered on time, on budget, and with exceptional quality.",
    author: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "DataFlow Systems",
  },
  {
    quote: "The mobile app they built for us has become our primary customer touchpoint. User engagement increased by 300% within the first quarter.",
    author: "Emily Watson",
    role: "Product Director",
    company: "NextGen Retail",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-quantum-surface/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              {/* Quote Text */}
              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="font-display font-bold text-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
