import {
  Code2,
  ExternalLink,
  Github,
  X,
  Layers,
  Sparkles,
  Rocket,
} from "lucide-react";

export default function Projects({ onClose }) {
  const projects = [
    {
      title: "Movie Ticket Booking Website",
      description:
        "A full-featured movie ticket booking platform with user authentication, seat selection, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "RazorPay"],
      image: "images/ticketflix.png",
      github: "https://github.com/Antarikh-02/TicketFlix-Frontend",
      live: "https://ticketflix-official.netlify.app/",
      featured: true,
    },
    {
      title: "Food Delivery Website",
      description:
        "A responsive food delivery application with real-time order tracking, restaurant listings, and user reviews.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind"],
      image:
        "https://i.pinimg.com/736x/42/a0/7e/42a07ea2ef5575eaaa33e25c0257c4a7.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      featured: true,
    },
    {
      title: "Social Media (In Progress)",
      description:
        "Analytics platform for tracking social media metrics across multiple platforms.",
      tech: ["React", "Express", "Tailwind CSS", "REST APIs"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      featured: false,
    },
    {
      title: "AeroCast (Weather Forecast)",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      image: "images/weather.png",
      github: "https://github.com/Antarikh-02/AeroCast",
      live: "https://aerocast-one.vercel.app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen relative overflow-auto">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop')",
        }}
      />
      <div className="fixed inset-0 bg-black/60 -z-10" />

      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-5 sm:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="animate-slide-in-left">
              <h1 className="text-3xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Projects
              </h1>
              <p className="text-base sm:text-xl text-white">
                A showcase of my recent work and experiments
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 rounded-lg hover:bg-[#FF0000] border border-white/30 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Featured Projects */}
          <section className="mb-10">
  <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
    <Sparkles className="text-yellow-400" />
    Featured Projects
  </h2>
  <div className="space-y-5">
    {featuredProjects.map((project, idx) => (
      <div
        key={project.title}
        className="group bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden animate-slide-in-up"
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="w-full sm:w-1/2 h-40 sm:h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full sm:w-1/2 p-4 sm:p-5 flex flex-col justify-between text-sm">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-100 text-xs mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] border border-white/20 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap text-xs">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded hover:bg-white/20 border border-white/30 text-white"
              >
                <Github size={14} />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 bg-purple-500/80 rounded hover:bg-purple-600 border border-purple-400/30 text-white"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

          {/* Other Projects */}
         <section>
  <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
    <Layers className="text-blue-400" />
    More Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {otherProjects.map((project, idx) => (
      <div
        key={project.title}
        className="group bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-36 sm:h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 text-sm">
          <h3 className="text-base font-semibold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-gray-100 text-xs mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] border border-white/20 text-white"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] border border-white/20 text-white">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2 flex-wrap text-xs">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded hover:bg-white/20 border border-white/30 text-white"
            >
              <Github size={14} />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-blue-500/80 rounded hover:bg-blue-600 border border-blue-400/30 text-white"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out backwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
