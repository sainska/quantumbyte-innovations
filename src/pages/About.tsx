import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Users, Target, Lightbulb, Award, Globe, Zap, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries, exploring cutting-edge technologies to deliver solutions that set new industry standards."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We build lasting relationships, treating every project as a collaborative journey toward shared success."
  },
  {
    icon: Shield,
    title: "Quality & Security",
    description: "Enterprise-grade security and rigorous quality assurance are embedded in everything we build."
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description: "Our agile methodology ensures rapid delivery, continuous improvement, and adaptability to changing needs."
  }
];

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "15+ years leading digital transformation at Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Former Google engineer with expertise in AI/ML and cloud architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Kim",
    role: "Head of Design",
    bio: "Award-winning UX designer passionate about human-centered design.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "David Okonkwo",
    role: "VP of Engineering",
    bio: "Built and scaled engineering teams at multiple successful startups.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
  }
];

const milestones = [
  { year: "2018", title: "Founded", description: "QuantumByte Innovations was born in San Francisco" },
  { year: "2019", title: "First Enterprise Client", description: "Landed our first Fortune 500 partnership" },
  { year: "2020", title: "Global Expansion", description: "Opened offices in London and Singapore" },
  { year: "2022", title: "AI Division Launch", description: "Established dedicated AI/ML practice" },
  { year: "2024", title: "500+ Projects", description: "Delivered over 500 successful projects worldwide" },
];

const About = () => {
  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" /> Our Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Building the Future,
                <span className="quantum-gradient-text block">One Line of Code at a Time</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We're a team of passionate technologists, designers, and strategists united by a single mission: 
                to transform ambitious ideas into powerful digital realities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl quantum-gradient flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At QuantumByte Innovations, we believe technology should empower, not complicate. Our mission 
                  is to deliver transformative software solutions that help businesses navigate the digital 
                  landscape with confidence and clarity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine deep technical expertise with a genuine understanding of business challenges 
                  to create solutions that don't just work—they excel.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 quantum-gradient rounded-3xl opacity-20 blur-xl" />
                <div className="relative glass-card rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-background/50 rounded-2xl">
                      <div className="text-4xl font-display font-bold quantum-gradient-text mb-2">500+</div>
                      <div className="text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-2xl">
                      <div className="text-4xl font-display font-bold quantum-gradient-text mb-2">50+</div>
                      <div className="text-muted-foreground">Countries Served</div>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-2xl">
                      <div className="text-4xl font-display font-bold quantum-gradient-text mb-2">98%</div>
                      <div className="text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-2xl">
                      <div className="text-4xl font-display font-bold quantum-gradient-text mb-2">150+</div>
                      <div className="text-muted-foreground">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every solution we build.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl quantum-gradient flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones that shaped QuantumByte Innovations into what it is today.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                      <div className="glass-card rounded-xl p-6">
                        <span className="text-primary font-display font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-display text-xl font-semibold text-foreground mt-2">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full quantum-gradient -translate-x-1/2 border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The experienced team driving innovation and excellence at QuantumByte.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-3xl p-12 text-center">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Global Presence, Local Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                With offices in San Francisco, London, and Singapore, we deliver world-class solutions 
                with an understanding of local markets and cultures.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["San Francisco", "London", "Singapore", "Berlin", "Toronto"].map((city) => (
                  <span key={city} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
