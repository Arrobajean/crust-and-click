
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/lib/data';
import { toast } from '@/components/ui/sonner';
import { Check, LeafyGreen, Minus, Plus, ShoppingCart, WheatOff, X } from 'lucide-react';

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
      <DialogContent className="sm:max-w-md md:max-w-lg bg-bread-light p-0 rounded-lg overflow-hidden animate-slide-in">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <DialogTitle className="font-serif text-xl md:text-2xl font-medium">
                  {product.name}
                </DialogTitle>
                <DialogClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
                  <X className="h-full w-full" />
                </DialogClose>
              </div>
              <p className="text-lg font-medium mt-1">{product.price.toFixed(2)}€/Ud</p>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
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
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Formato</label>
                  <Select
                    value={sliceOption}
                    onValueChange={setSliceOption}
                  >
                    <SelectTrigger className="w-full">
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
                  <label className="block text-sm font-medium mb-1">Cantidad</label>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8" 
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8" 
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-bread-dark hover:bg-bread-dark/90 text-white" 
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" /> 
                Añadir al carrito · {(product.price * quantity).toFixed(2)}€
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
