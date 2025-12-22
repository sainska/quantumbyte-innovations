const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "💚" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Go", icon: "🔵" },
    { name: "Java", icon: "☕" },
    { name: ".NET", icon: "🔷" },
  ],
  cloud: [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "GCP", icon: "🌐" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
  ],
  data: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "GraphQL", icon: "◈" },
  ],
};

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built With Modern Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage cutting-edge tools and frameworks to deliver robust, scalable solutions.
          </p>
        </div>
        
        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div
              key={category}
              className="group p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 5 + index) * 0.05}s` }}
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-foreground font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            And many more... We adapt our stack to your project's specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
