
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
      <DialogContent className="sm:max-w-md md:max-w-lg bg-[#f1f0fb] p-0 rounded-lg overflow-hidden animate-fade-in">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 p-1">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover shadow-sm rounded-md"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div>
                  <DialogTitle className="uppercase font-sans text-xl md:text-2xl font-bold">
                    {product.name}
                  </DialogTitle>
                  <p className="text-sm font-medium italic text-gray-500 mt-1">Made in Prim</p>
                </div>
                <DialogClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
                  <X className="h-full w-full" />
                </DialogClose>
              </div>
            </DialogHeader>
            
            <div className="mt-6 space-y-5">
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
                  <label className="block text-sm font-medium mb-2">Cantidad</label>
                  <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                    <button 
                      className="p-2 bg-white hover:bg-gray-50"
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="flex-1 text-center py-2 bg-white">{quantity}</span>
                    <button 
                      className="p-2 bg-white hover:bg-gray-50"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Formato</label>
                  <Select
                    value={sliceOption}
                    onValueChange={setSliceOption}
                  >
                    <SelectTrigger className="w-full border-gray-200 bg-white">
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
              </div>
              
              <Button 
                className="w-full bg-[#807c5c] hover:bg-[#6a6849] text-white font-medium border-2 border-[#807c5c] py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" /> 
                {product.price.toFixed(2)}€/ud. – Añadir a la cesta
              </Button>
              
              <div className="mt-6 text-center text-gray-600">
                <p className="text-sm">
                  <span className="font-bold">Producto artesanal.</span> Elaborado con ingredientes ecológicos, 
                  masa madre natural y tiempo. Nuestro pan se hornea diariamente para garantizar 
                  la máxima frescura y sabor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
