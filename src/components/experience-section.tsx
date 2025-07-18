import { Briefcase, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hands-on experience in full-stack development and backend systems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                <Briefcase className="text-white h-6 w-6" />
              </div>
              <div className="ml-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">Software Development Engineer (Intern)</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">1-month Internship</span>
                </div>
                <p className="text-lg text-slate-700 font-medium mb-4">Avtechfin - Full Stack Developer (Backend-focused)</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-emerald-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">Developed backend features and REST APIs for a WhatsApp categorization system</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-emerald-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">Built secure authentication and multiple API routes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-emerald-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">Fixed frontend UX bugs like category select update logic</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "React"].map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
