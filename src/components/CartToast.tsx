
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Trash2, ChevronDown, ChevronUp, ShoppingCart, X } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useCart } from '@/contexts/CartContext';

interface CartToastProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartToast: React.FC<CartToastProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, updateFormat, cartTotal, getProductDetails } = useCart();
  const [itemToDelete, setItemToDelete] = React.useState<number | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  
  useEffect(() => {
    if (isOpen) {
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);
  
  const handleRemove = (index: number) => {
    setItemToDelete(index);
    setConfirmDialogOpen(true);
  };

  const confirmRemove = () => {
    if (itemToDelete !== null) {
      removeFromCart(itemToDelete);
    }
    setConfirmDialogOpen(false);
    setItemToDelete(null);
  };

  const cancelRemove = () => {
    setConfirmDialogOpen(false);
    setItemToDelete(null);
  };
  
  const decreaseQuantity = (index: number, currentQty: number) => {
    if (currentQty === 1) {
      handleRemove(index);
    } else {
      updateQuantity(index, currentQty - 1);
    }
  };

  if (!isOpen || items.length === 0) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="bg-white/95 backdrop-blur shadow-lg border-0 overflow-hidden rounded-lg">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">¡Producto añadido al carrito!</span>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                
                <div className="max-h-60 overflow-y-auto py-2">
                  {items.slice(0, 3).map((item, index) => {
                    const details = getProductDetails(item);
                    if (!details) return null;
                    
                    const { product, quantity, sliceOption, total } = details;
                    
                    return (
                      <div 
                        key={`${product.id}-${sliceOption}-${index}`} 
                        className="flex items-center gap-3 py-2 border-b last:border-b-0"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        
                        <div className="flex-1">
                          <p className="font-medium text-sm">{product.name}</p>
                          
                          <div className="flex items-center gap-2 mt-1">
                            <Select
                              value={sliceOption}
                              onValueChange={(value) => updateFormat(index, value)}
                            >
                              <SelectTrigger className="w-28 h-7 text-xs border-gray-200">
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
                            
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() => decreaseQuantity(index, quantity)}
                                className="px-1 py-0.5 text-gray-500 hover:bg-gray-50"
                              >
                                <ChevronDown className="h-3 w-3" />
                              </button>
                              <span className="px-2 text-xs font-medium">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(index, quantity + 1)}
                                className="px-1 py-0.5 text-gray-500 hover:bg-gray-50"
                              >
                                <ChevronUp className="h-3 w-3" />
                              </button>
                            </div>
                            
                            <p className="text-xs font-medium ml-auto">{total.toFixed(2)}€</p>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-gray-400 hover:text-red-500"
                              onClick={() => handleRemove(index)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {items.length > 3 && (
                    <p className="text-xs text-center text-gray-500 mt-2">
                      +{items.length - 3} productos más en tu carrito
                    </p>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-3 pt-3 border-t">
                  <p className="text-sm font-medium">
                    Total: <span className="text-bread-dark">{cartTotal.toFixed(2)}€</span>
                  </p>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={onClose}
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" /> Ver carrito
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs bg-bread-dark hover:bg-bread-dark/90"
                    >
                      Tramitar pedido
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Deseas eliminar este producto del carrito? Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelRemove}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRemove} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CartToast;
