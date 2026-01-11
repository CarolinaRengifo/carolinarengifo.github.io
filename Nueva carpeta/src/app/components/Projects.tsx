import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


export function Projects() {
  const projects = [
    {
      title: "ConectArte",
      description:
        "ConectArte es una plataforma web desarrollada para promover el cine comunitario como herramienta educativa, social y cultural, fomentando la participación juvenil y la inclusión social a través del acceso a talleres, producciones audiovisuales y funciones de cine comunitario en distintos espacios barriales.",
      image:
        "./src/img/ConectArte.png",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/CarolinaRengifo/ConectArte-main-proyect.git",
      demo: "https://conectarte-kappa.vercel.app",
    },
    {
      title: "Playlist Manager",
      description: "Playlist Manager es una aplicación web que permite crear, organizar y administrar playlists de música de forma sencilla e intuitiva. Los usuarios pueden agregar canciones, editar listas, eliminar contenidos y gestionar sus playlists personalizadas desde una interfaz moderna y amigable.",
      image:
        "../src/img/Playlist.png",
      technologies: ["JavaScript", "React", "Next.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com/CarolinaRengifo/mern_user_cliente.git",
      demo: "https://mern-user-cliente2.vercel.app",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "App móvil para seguimiento de ejercicios, nutrición y objetivos de fitness con análisis de datos.",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4MTI2NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "App Mind Mate",
      description:
        "Aplicacion para la salud mental.",
      image:
        "../src/img/MindMate.png",
      technologies: ["Python", "FastAPI", "OpenAI", "React"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real Estate Portal",
      description:
        "Portal inmobiliario con búsqueda avanzada, mapas interactivos, tours virtuales y sistema de gestión.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODA2MjM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Express", "MySQL", "Mapbox"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard para gestión de múltiples redes sociales con análisis de métricas y programación de publicaciones.",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4MTI2NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "GraphQL", "Node.js", "Redis"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl mb-6 text-center text-gray-900">
          Proyectos
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
