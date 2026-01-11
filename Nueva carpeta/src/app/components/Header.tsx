import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Carolina Rengifo</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
              >
                Contacto
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
