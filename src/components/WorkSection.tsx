import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow Platform",
    category: "Fintech",
    description: "A comprehensive digital banking solution serving 500K+ users with real-time transactions and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "AWS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "HealthSync App",
    category: "Healthcare",
    description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers across 12 countries.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Python", "GCP"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "LogiTrack Enterprise",
    category: "Logistics",
    description: "Real-time fleet management and supply chain optimization system processing 1M+ shipments monthly.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Go", "Kubernetes"],
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
