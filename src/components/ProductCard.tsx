
import React, { useState } from 'react';
import { Check, LeafyGreen, WheatOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/data';
import QuickViewModal from './QuickViewModal';
import DetailedProductView from './DetailedProductView';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const { name, price, image, isEco, isGlutenFree } = product;

  return (
    <>
      <div className="product-card aspect-[3/4] mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="product-overlay">
          <Button 
            variant="outline" 
            className="btn mb-3 text-white border-white hover:bg-white/20 hover:text-white"
            onClick={() => setIsQuickViewOpen(true)}
          >
            Vista rápida
          </Button>
          <Button 
            variant="outline" 
            className="btn text-white border-white hover:bg-white/20 hover:text-white"
            onClick={() => setIsDetailViewOpen(true)}
          >
            Detalles
          </Button>
        </div>
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {isEco && (
            <div className="badge badge-eco flex items-center gap-1">
              <LeafyGreen className="h-3 w-3" />
              <span>Eco</span>
            </div>
          )}
          {isGlutenFree && (
            <div className="badge badge-gluten-free flex items-center gap-1">
              <WheatOff className="h-3 w-3" />
              <span>Sin gluten</span>
            </div>
          )}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-serif text-lg font-medium mb-1">{name}</h3>
        <p className="text-sm font-medium">{price.toFixed(2)}€</p>
      </div>

      {isQuickViewOpen && (
        <QuickViewModal 
          product={product} 
          isOpen={isQuickViewOpen} 
          onClose={() => setIsQuickViewOpen(false)} 
        />
      )}

      {isDetailViewOpen && (
        <DetailedProductView
          product={product}
          isOpen={isDetailViewOpen}
          onClose={() => setIsDetailViewOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
