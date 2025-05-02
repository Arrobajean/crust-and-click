
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/lib/data';
import { toast } from '@/components/ui/sonner';
import { LeafyGreen, Minus, Plus, WheatOff, X } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      <DialogContent className="max-w-[600px] bg-white/95 backdrop-blur-md p-0 rounded-lg overflow-hidden border-0 shadow-xl">
        <div className="p-6 text-center">
          <div className="flex justify-between items-start">
            <div className="flex-1"></div>
            <DialogTitle className="font-sans text-xl uppercase font-medium text-center flex-grow">
              {product.name}
            </DialogTitle>
            <div className="flex-1 flex justify-end">
              <DialogClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
                <X className="h-full w-full" />
              </DialogClose>
            </div>
          </div>

          <p className="text-gray-500 italic mt-1 mb-6">Made in Prim</p>
          
          <div className="max-w-[400px] mx-auto mb-8 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full aspect-square object-cover rounded-md"
            />
            
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${activeImageIndex === index ? 'bg-[#807c5c]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto mb-6">
            <Select value={quantity.toString()} onValueChange={(val) => setQuantity(Number(val))}>
              <SelectTrigger className="border-[#807c5c]/30 bg-transparent">
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
            
            <Select value={sliceOption} onValueChange={setSliceOption}>
              <SelectTrigger className="border-[#807c5c]/30 bg-transparent">
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
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full max-w-[500px] bg-[#807c5c] hover:bg-[#6a6749] border-none text-white py-6 mb-8"
          >
            {(product.price * quantity).toFixed(2)}€/ud. - Añadir a la cesta
          </Button>
          
          <div className="text-center mb-4">
            <h4 className="uppercase text-sm font-medium tracking-wider mb-2">SALUDABLE</h4>
            <p className="text-sm text-gray-600 max-w-[80%] mx-auto">
              {product.nutritionalInfo || "Harina 100% integral = más fibra y nutrientes"}
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
