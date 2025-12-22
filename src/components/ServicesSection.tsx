import { Code2, Smartphone, Cloud, Brain, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to match your unique business requirements and scale with your growth.",
    features: ["Full-stack development", "API integrations", "Legacy modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize performance and reduce operational costs.",
    features: ["AWS & Azure", "DevOps", "Microservices"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI to automate processes and unlock data-driven insights.",
    features: ["Predictive analytics", "NLP", "Computer vision"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security assessments and implementations to protect your digital assets and data.",
    features: ["Security audits", "Compliance", "Penetration testing"],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation to revolutionize your business operations.",
    features: ["Process automation", "Data integration", "Change management"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-subtle-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Software Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we deliver comprehensive services that transform your vision into reality.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
