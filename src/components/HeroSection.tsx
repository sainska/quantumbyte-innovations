import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 radial-fade" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 200+ companies worldwide</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">We Build </span>
            <span className="quantum-gradient-text">Digital Solutions</span>
            <br />
            <span className="text-foreground">That Drive Growth</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            QuantumByte Innovations transforms ideas into powerful software. 
            From startups to enterprises, we deliver custom solutions that scale.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-border/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-8">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["TechCorp", "Innovate", "DataFlow", "CloudSync", "NextGen"].map((company) => (
                <div key={company} className="font-display font-semibold text-lg md:text-xl text-muted-foreground/70 hover:text-foreground transition-colors cursor-default">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
