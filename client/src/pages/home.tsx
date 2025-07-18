import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

// Simple navigation component inline to avoid constructor error
function SimpleNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text cursor-pointer"
               onClick={() => scrollToSection("home")}>
            Yash Ram Malhotra
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Skills", "Experience", "Projects", "Contact"].map((label) => (
              <button
                key={label}
                onClick={() => scrollToSection(label.toLowerCase())}
                className="font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SimpleNavigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
