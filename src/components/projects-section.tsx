import { ExternalLink, Github, ShoppingCart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GreatMart",
      year: "2025",
      description: "Full-stack e-commerce platform featuring multi-item cart functionality and Cashfree payment integration. Implements Inngest for order queueing and stock management, fully Dockerized with Redis and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Inngest"],
      liveUrl: "https://greatmart.vercel.app",
      githubUrl: "#",
      icon: ShoppingCart,
      gradient: "from-blue-50 to-violet-50",
      iconGradient: "from-blue-600 to-violet-600"
    },
    {
      title: "Inventory Management System",
      year: "2024",
      description: "Comprehensive inventory dashboard with secure login, PDF invoice generation, and MongoDB backend. Features real-time inventory updates, low-stock alerts, and advanced filtering capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "jsPDF", "Express"],
      liveUrl: "https://stockwize.netlify.app",
      githubUrl: "#",
      icon: BarChart3,
      gradient: "from-emerald-50 to-blue-50",
      iconGradient: "from-emerald-600 to-blue-600"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-700",
      "Node.js": "bg-green-100 text-green-700",
      "MongoDB": "bg-purple-100 text-purple-700",
      "Redis": "bg-red-100 text-red-700",
      "Docker": "bg-gray-100 text-gray-700",
      "Inngest": "bg-yellow-100 text-yellow-700",
      "jsPDF": "bg-orange-100 text-orange-700",
      "Express": "bg-indigo-100 text-indigo-700"
    };
    return colors[tech] || "bg-slate-100 text-slate-700";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing full-stack applications with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => {
            const IconComponent = project.icon;
            
            return (
              <div 
                key={project.title}
                className={`project-card bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Project mockup */}
                <div className={`h-64 bg-gradient-to-br ${project.iconGradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <IconComponent className="h-16 w-16 mb-4 opacity-80 mx-auto" />
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <a href={project.githubUrl} className="flex items-center justify-center">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
