
import React from "react";
import { Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

interface ProductGridViewProps {
  products: Product[];
}

const ProductGridView: React.FC<ProductGridViewProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      </div>
    );
  }

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

export default ProductGridView;
