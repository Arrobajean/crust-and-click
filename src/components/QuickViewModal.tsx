
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/lib/data';
import { toast } from '@/components/ui/sonner';
import { LeafyGreen, Minus, Plus, ShoppingCart, WheatOff, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    toast(`${quantity} ${product.name} añadido al carrito`, {
      description: `Formato: ${sliceOption}`,
      action: {
        label: "Ver carrito",
        onClick: () => console.log("Ver carrito clicked"),
      },
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-bread-light p-0 rounded-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1"></div>
            <DialogTitle className="font-serif text-xl uppercase font-medium text-center flex-grow">
              {product.name}
            </DialogTitle>
            <div className="flex-1 flex justify-end">
              <DialogClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
                <X className="h-full w-full" />
              </DialogClose>
            </div>
          </div>

          <p className="text-bread-dark/70 italic mb-6">Made in Prim</p>
          
          <div className="aspect-square max-w-[200px] mx-auto mb-6 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-md"
            />

            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-bread-dark"></div>
              <div className="w-2 h-2 rounded-full bg-bread-dark/30"></div>
              <div className="w-2 h-2 rounded-full bg-bread-dark/30"></div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6 max-w-[300px] mx-auto">
            <div>
              <Select 
                value={sliceOption}
                onValueChange={setSliceOption}
              >
                <SelectTrigger className="w-full border-bread-dark/30">
                  <SelectValue placeholder="Selecciona formato" />
                </SelectTrigger>
                <SelectContent>
                  {product.sliceOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <div className="flex items-center border border-bread-dark/30 rounded-md">
                <button 
                  className="h-9 w-10 flex items-center justify-center"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <div className="flex-1 text-center">{quantity}</div>
                <button 
                  className="h-9 w-10 flex items-center justify-center"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full bg-[#807c5c] hover:bg-[#6a6749] border-none text-white mb-6 max-w-[300px]" 
            onClick={handleAddToCart}
          >
            {(product.price * quantity).toFixed(2)}€ – Añadir a la cesta
          </Button>
          
          <div className="text-center mb-4">
            <h4 className="uppercase text-xs font-medium tracking-wider mb-2 text-bread-dark/70">Saludable</h4>
            <p className="text-sm text-bread-dark/80 max-w-[300px] mx-auto">
              {product.nutritionalInfo}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {product.isEco && (
              <div className="badge badge-eco flex items-center gap-1">
                <LeafyGreen className="h-3 w-3" />
                <span>Ecológico</span>
              </div>
            )}
            {product.isGlutenFree && (
              <div className="badge badge-gluten-free flex items-center gap-1">
                <WheatOff className="h-3 w-3" />
                <span>Sin gluten</span>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
