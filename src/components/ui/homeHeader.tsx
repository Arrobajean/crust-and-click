// src/components/HomeHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeHeader: React.FC = () => {
  return (
    <header className="py-8 md:py-10 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-serif text-2xl md:text-4xl font-medium mb-3">
          Crust & Click
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
          Pan artesanal elaborado con ingredientes ecológicos, masa madre
          natural y tiempo.
        </p>
        <nav className="mt-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-bread-dark hover:text-bread-accent font-medium"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/como-trabajamos"
                className="text-bread-dark hover:text-bread-accent"
              >
                Cómo Trabajamos
              </Link>
            </li>
            <li>
              <Link
                to="/nuestra-filosofia"
                className="text-bread-dark hover:text-bread-accent"
              >
                Nuestra Filosofía
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-bread-dark hover:text-bread-accent"
              >
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative bg-gradient-to-r from-bread-dark/90 to-bread-dark/70 overflow-hidden rounded-lg mb-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Pan artesanal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 py-16 md:py-24 px-6 md:px-10 text-white text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
            Nuestro Pan Artesanal
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            Elaborado con ingredientes orgánicos, masa madre natural y más de 16
            horas de fermentación. Descubre el auténtico sabor del pan como se
            hacía antiguamente.
          </p>
          <Button className="bg-bread-accent hover:bg-bread-accent/90 text-white border-none">
            Descubrir nuestra historia
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
