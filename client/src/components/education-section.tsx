import { GraduationCap, Code, Database, Globe, Smartphone } from "lucide-react";

export default function EducationSection() {
  const focusAreas = [
    { name: "Software Development", icon: Code },
    { name: "Database Systems", icon: Database },
    { name: "Web Technologies", icon: Globe },
    { name: "Mobile Development", icon: Smartphone },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-4 rounded-lg mr-6">
                <GraduationCap className="text-white h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Bachelor of Computer Application</h3>
                <p className="text-lg text-slate-600">Chandigarh University</p>
                <p className="text-slate-500">Jan 2022 – Jan 2025</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Focus Areas</h4>
                <ul className="space-y-2 text-slate-600">
                  {focusAreas.map((area) => {
                    const IconComponent = area.icon;
                    return (
                      <li key={area.name} className="flex items-center">
                        <IconComponent className="text-blue-600 h-4 w-4 mr-2" />
                        {area.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Languages</h4>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between">
                      <span className="text-slate-600">{language.name}</span>
                      <span className="text-sm text-slate-500">{language.level}</span>
                    </div>
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
