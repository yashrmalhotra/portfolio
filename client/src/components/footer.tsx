import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text mb-4">
            Yash Ram Malhotra
          </h3>
          <p className="text-slate-400 mb-6">Full Stack Developer | Building the future, one line of code at a time</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:yashrmalhotra11@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <SiLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <SiGithub className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2025 Yash Ram Malhotra. All rights reserved. Built with ❤️ and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
