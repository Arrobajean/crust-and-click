
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '@/lib/data';
import { LeafyGreen, Minus, Plus, ShoppingCart, WheatOff, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

interface DetailedProductViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const DetailedProductView: React.FC<DetailedProductViewProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [sliceOption, setSliceOption] = useState(product.sliceOptions[0]);
  const { addToCart } = useCart();

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity, sliceOption);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg lg:max-w-xl bg-bread-light overflow-y-auto">
        <SheetHeader className="space-y-2">
          <div className="flex justify-between items-center">
            <SheetTitle className="font-serif text-2xl font-medium">
              {product.name}
            </SheetTitle>
            <SheetClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
              <X className="h-full w-full" />
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-medium">{product.price.toFixed(2)}€/Ud</h3>
              <div className="flex flex-wrap gap-2">
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
            
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="uppercase text-xs font-medium tracking-wider mb-2">Información nutricional</h4>
            <p className="text-sm text-gray-600">{product.nutritionalInfo}</p>
          </div>
          
          <div>
            <h4 className="uppercase text-xs font-medium tracking-wider mb-2">Ingredientes</h4>
            <p className="text-sm text-gray-600">{product.ingredients}</p>
          </div>

          {product.allergens && product.allergens.length > 0 && (
            <div>
              <h4 className="uppercase text-xs font-medium tracking-wider mb-2">Alérgenos</h4>
              <p className="text-sm text-gray-600">{product.allergens.join(', ')}</p>
            </div>
          )}

          {product.conservation && (
            <div>
              <h4 className="uppercase text-xs font-medium tracking-wider mb-2">Conservación</h4>
              <p className="text-sm text-gray-600">{product.conservation}</p>
            </div>
          )}
          
          <Separator />
          
          <div className="space-y-4">
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
            
            <Button 
              className="w-full bg-bread-dark hover:bg-bread-dark/90 text-white" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" /> 
              Añadir al carrito · {(product.price * quantity).toFixed(2)}€
            </Button>
          </div>

          {product.related && product.related.length > 0 && (
            <div className="pt-6">
              <h4 className="font-medium mb-4">También podría interesarte</h4>
              <div className="grid grid-cols-3 gap-2">
                {product.related.map(relatedId => {
                  const relatedProduct = products.find(p => p.id === relatedId);
                  if (!relatedProduct) return null;
                  
                  return (
                    <div key={relatedId} className="text-center">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="aspect-square w-full object-cover mb-2"
                      />
                      <p className="text-xs font-medium line-clamp-2">{relatedProduct.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DetailedProductView;
