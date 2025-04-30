
import React, { useEffect } from 'react';
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
