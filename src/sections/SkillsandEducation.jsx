import { GraduationCap, Zap, X } from "lucide-react";

export default function SkillsEducation({ onClose }) {
  const education = [
    {
      year: "2023-2025",
      degree: "Masters in Computer Application",
      institution: "Guru Nanak Institite Of Technology",
    },
    {
      year: "2020 - 2023",
      degree: "Bachelor of Computer Applications",
      institution: "Techno India Hooghly Campus",
    },
    {
      year: "2019 - 2020",
      degree: "Higher Secondary",
      institution: "Kalyani Public School",
    },
  ];

  const skills = [
    { category: "Programming", items: ["JavaScript", "Python", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Express"] },
    { category: "Tools", items: ["Github", "Postman"] },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Communication"],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-auto">
      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80')",
        }}
      />
      <div className="fixed inset-0 bg-black/60 -z-10" />

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block max-w-6xl mx-auto p-6 md:p-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Skills & Education
              </h1>
              <p className="text-xl text-white">My learning journey & expertise</p>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-[#FF0000] transition-all duration-300 border border-white/30 flex items-center gap-2 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
              <Zap className="text-yellow-400" />
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={skill.category}
                  className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
              <GraduationCap className="text-green-400" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:translate-x-2 animate-slide-in-left"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-green-400 font-semibold sm:min-w-[120px]">
                    {edu.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE COMPACT VERSION */}
      <div className="lg:hidden flex flex-col justify-center items-center text-center px-4 py-10 relative min-h-screen z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-[#FF0000] transition-all duration-300 border border-white/30 text-white"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-slide-in-up">
          Skills & Education
        </h1>
        <p className="text-sm text-white mb-6 animate-slide-in-up delay-150">
          My learning journey & expertise
        </p>

        {/* Combined Card */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-4 animate-slide-in-up delay-300">
          {/* Skills */}
          <div>
            <h3 className="text-yellow-300 text-base font-semibold mb-2 flex items-center justify-center gap-2">
              <Zap size={16} /> Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-white">
              {skills.flatMap((s) => s.items).map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 rounded-full border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Education */}
          <div>
            <h3 className="text-green-300 text-base font-semibold mb-2 flex items-center justify-center gap-2">
              <GraduationCap size={16} /> Education
            </h3>
            <div className="space-y-2 text-white text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white/5 p-3 rounded-md border border-white/20">
                  <div className="text-green-400 font-semibold text-xs mb-1">{edu.year}</div>
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-gray-300 text-[0.75rem]">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out backwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out backwards;
        }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}
