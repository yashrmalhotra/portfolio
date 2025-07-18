import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss how we can work together to build something amazing
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
              <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:yashrmalhotra11@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                yashrmalhotra11@gmail.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
              <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-slate-300">Delhi, India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all md:col-span-2 lg:col-span-1">
              <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-slate-300">Usually within 24 hours</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                <a href="mailto:yashrmalhotra11@gmail.com" className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                <a href="#" className="flex items-center justify-center">
                  <SiLinkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                <a href="#" className="flex items-center justify-center">
                  <SiGithub className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
