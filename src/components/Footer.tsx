
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bread-dark text-bread-light py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-bread-accent mb-4">
              Crust & Click
            </h3>
            <p className="text-gray-300 mb-4">
              Panadería artesanal con los mejores ingredientes y procesos tradicionales.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-bread-accent" />
                <span className="text-sm">
                  C/ del Pan Artesano, 24, 28001 Madrid
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-bread-accent" />
                <span className="text-sm">+34 910 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-bread-accent" />
                <span className="text-sm">info@crustandclick.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Nuestra Tienda</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/nuestra-filosofia" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Nuestra Filosofía
                  </Link>
                </li>
                <li>
                  <Link to="/como-trabajamos" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Cómo Trabajamos
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Información Legal</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/aviso-legal" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidad" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/politica-cookies" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/terminos-condiciones" className="text-gray-300 hover:text-bread-accent transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            <p>© {currentYear} Crust & Click. Todos los derechos reservados.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Diseñado por Crust & Click</p>
            <p>Desarrollado por Jean Paul Castañeda – 404 Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
