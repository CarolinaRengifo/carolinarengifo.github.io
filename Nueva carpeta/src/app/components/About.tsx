import { Code2, Database, Globe, Smartphone } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript,  Bootstrap, Tailwind CSS, Next.js",
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB, MySQL",
    },
    {
      icon: <Globe size={32} />,
      title: "Full Stack",
      description: "API REST, GraphQL, Microservicios",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Design",
      description: "Mobile-first, UX/UI, Accesibilidad",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl mb-6 text-center text-gray-900">
          Sobre mí
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto text-center">
            Soy ingeniera en sistemas con experiencia en desarrollo full stack,
            especializada en la creación de aplicaciones web modernas, escalables y seguras.
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Trabajo con tecnologías actuales y buenas prácticas de desarrollo,
            enfocándome en la calidad del código y la experiencia del usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-indigo-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl mb-2 text-gray-900">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
