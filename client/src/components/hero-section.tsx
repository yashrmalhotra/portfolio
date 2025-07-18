import { ChevronDown, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234f46e5%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 p-1 animate-float">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="text-4xl text-white font-bold">YM</div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Yash Ram <span className="text-transparent bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text">Malhotra</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer specializing in modern web technologies and scalable applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
              asChild
            >
              <a href="/api/resume.pdf" download="Yash_Ram_Malhotra_Resume.pdf">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-6 flex-wrap gap-4 pl-[0px] pr-[0px] pt-[17px] pb-[17px]">
            <a 
              href="mailto:yashrmalhotra11@gmail.com" 
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 transform"
            >
              <SiLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 transform"
            >
              <SiGithub className="h-6 w-6" />
            </a>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Delhi, India
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={() => scrollToSection("skills")} 
          className="text-white text-2xl bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
