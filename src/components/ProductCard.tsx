
import React, { useState } from 'react';
import { LeafyGreen, WheatOff } from 'lucide-react';
import { Product } from '@/lib/data';
import QuickViewModal from './QuickViewModal';
import DetailedProductView from './DetailedProductView';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { name, price, image, isEco, isGlutenFree } = product;
  const { addToCart } = useCart();

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart(product.id, quantity, sliceOption);
  };

  // Prevent closing the overlay when interacting with selects
  const handleSelectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const openQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  // Track dropdown state to maintain hover
  const handleDropdownChange = (open: boolean) => {
    setDropdownOpen(open);
    if (open) {
      setIsHovered(true);
    }
  };

  return (
    <>
      <div 
        className="product-card aspect-[3/4] mb-6 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => !dropdownOpen && setIsHovered(false)}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div 
          className={`product-overlay ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsDetailViewOpen(true)}
        >
          <div className="text-center p-4 w-full max-w-[250px]">
            <button 
              onClick={openQuickView}
              className="text-xs tracking-wider text-white/70 uppercase mb-1 hover:text-white transition-colors cursor-pointer"
            >
              VISTA RÁPIDA
            </button>
            <h3 className="font-sans text-white text-lg uppercase font-medium mb-4">{name}</h3>
            
            <div className="space-y-3 mb-4" onClick={handleSelectClick}>
              <Select 
                value={sliceOption} 
                onValueChange={setSliceOption} 
                onOpenChange={handleDropdownChange}
              >
                <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Formato" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none shadow-lg">
                  {product.sliceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={quantity.toString()} 
                onValueChange={(val) => setQuantity(Number(val))}
                onOpenChange={handleDropdownChange}
              >
                <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Cantidad" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none shadow-lg">
                  {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleAddToCart}
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
