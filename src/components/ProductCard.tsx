
import React, { useState } from 'react';
import { Check, LeafyGreen, WheatOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/data';
import QuickViewModal from './QuickViewModal';
import DetailedProductView from './DetailedProductView';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import '@/components/ui/hover-animation.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);
  const { name, price, image, isEco, isGlutenFree } = product;

  const handleAddToCart = () => {
    toast(`${quantity} ${product.name} añadido al carrito`, {
      description: `Formato: ${sliceOption}`,
    });
  };

  return (
    <>
      <div className="product-card aspect-[3/4] mb-6 relative">
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

        <div className="hover-card bg-white/90 p-4 rounded-md shadow-sm">
          <p className="uppercase text-gray-400 text-xs tracking-widest mb-2">VISTA RÁPIDA</p>
          <h3 className="uppercase font-sans font-bold text-bread-dark mb-4">{name}</h3>
          
          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-xs mb-1 text-gray-600">Cantidad</label>
              <select 
                className="quantity-selector"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs mb-1 text-gray-600">Formato</label>
              <select 
                className="format-selector"
                value={sliceOption}
                onChange={(e) => setSliceOption(e.target.value)}
              >
                {product.sliceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          
          <Button 
            className="w-full bg-[#807c5c] hover:bg-[#6a6849] text-white font-medium"
            onClick={handleAddToCart}
          >
            {price.toFixed(2)}€/ud. – Añadir a la cesta
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
