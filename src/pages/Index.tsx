
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '@/components/ProductGrid';
import CartButton from '@/components/CartButton';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Crust & Click - Panadería Artesanal';
  }, []);

  return (
    <div className="min-h-screen bg-bread-background">
      <header className="py-8 md:py-10 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-2xl md:text-4xl font-medium mb-3">Crust & Click</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
            Pan artesanal elaborado con ingredientes ecológicos, masa madre natural y tiempo.
          </p>
          <nav className="mt-6">
            <ul className="flex justify-center space-x-6">
              <li className="text-sm md:text-base">
                <Link to="/" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Productos
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/como-trabajamos" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Cómo Trabajamos
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/nuestra-filosofia" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Nuestra Filosofía
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/faq" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
        <ProductGrid />
      </main>
      
      <CartButton />
    </div>
  );
};

export default Index;
