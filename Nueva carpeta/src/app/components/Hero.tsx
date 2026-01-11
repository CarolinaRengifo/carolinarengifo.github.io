import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-4 pt-24 bg-gradient-to-br from-slate-50 to-indigo-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Hola, soy <br />
              <span className="text-indigo-600">Carolina Rengifo</span>
            </h2>

            <p className="text-xl font-medium text-slate-700 mb-4">
              Ingeniera en Sistemas Informáticos · Full Stack Developer
            </p>

            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Desarrollo aplicaciones web modernas, escalables y centradas en el usuario,
              combinando diseño, rendimiento y buenas prácticas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/CarolinaRengifo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/carolina-rengifo-macias-59a131195/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto: anitacarolina97@hotmail.com"
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl">
              <img
                src="../src/img/Carolina.png"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
