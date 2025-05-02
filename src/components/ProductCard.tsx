
import React, { useState } from 'react';
import { LeafyGreen, WheatOff } from 'lucide-react';
import { Product } from '@/lib/data';
import QuickViewModal from './QuickViewModal';
import DetailedProductView from './DetailedProductView';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);
  const { name, price, image, isEco, isGlutenFree } = product;

  const handleAddToCart = () => {
    toast(`${quantity} ${product.name} añadido al carrito`, {
      description: `Formato: ${sliceOption}`,
      action: {
        label: "Ver carrito",
        onClick: () => console.log("Ver carrito clicked"),
      },
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
        <div 
          className="product-overlay"
          onClick={() => setIsDetailViewOpen(true)}
        >
          <div className="text-center p-4 w-full max-w-[250px]">
            <p className="text-xs tracking-wider text-white/70 uppercase mb-1">VISTA RÁPIDA</p>
            <h3 className="font-sans text-white text-lg uppercase font-medium mb-4">{name}</h3>
            
            <div className="space-y-3 mb-4">
              <Select defaultValue={sliceOption} onValueChange={setSliceOption}>
                <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Formato" />
                </SelectTrigger>
                <SelectContent>
                  {product.sliceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="1" onValueChange={(val) => setQuantity(Number(val))}>
                <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Cantidad" />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              className="w-full bg-[#807c5c] hover:bg-[#6a6749] border-none text-white"
            >
              {price.toFixed(2)}€/ud - Añadir a la cesta
            </Button>
          </div>
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
