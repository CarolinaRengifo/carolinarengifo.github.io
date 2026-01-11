import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl mb-2">Carolina Rengifo</h3>
            <p className="text-gray-400">Ingeniera en Sistemas Informáticos</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:carolina@example.com"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart size={16} className="text-red-500" /> por Carolina
            Rengifo © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
