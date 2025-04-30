
import React from 'react';
import { products } from '@/lib/data';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
