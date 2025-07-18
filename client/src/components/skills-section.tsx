import { Code, Layers, Database } from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiDocker, 
  SiReact, 
  SiNextdotjs, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiRedis
} from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: Code,
      color: "blue",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "violet",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      ]
    },
    {
      title: "Database & Queues",
      icon: Database,
      color: "emerald",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        border: "border-blue-200",
        icon: "bg-blue-600",
        dot: "bg-blue-600",
        dotLight: "bg-blue-300"
      },
      violet: {
        bg: "bg-gradient-to-br from-violet-50 to-violet-100",
        border: "border-violet-200",
        icon: "bg-violet-600",
        dot: "bg-violet-600",
        dotLight: "bg-violet-300"
      },
      emerald: {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        border: "border-emerald-200",
        icon: "bg-emerald-600",
        dot: "bg-emerald-600",
        dotLight: "bg-emerald-300"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.title}
                className={`skill-card ${colors.bg} p-8 rounded-xl border ${colors.border} transition-transform hover:scale-105 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${colors.icon} p-3 rounded-lg mr-4`}>
                    <IconComponent className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <div className="flex items-center">
                          <SkillIcon 
                            className="w-6 h-6" 
                            style={{ color: skill.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
