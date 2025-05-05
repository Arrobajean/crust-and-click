
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { Separator } from '@/components/ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, updateFormat, cartCount, cartTotal, getProductDetails } = useCart();
  
  const handleRemove = (index: number) => {
    setItemToDelete(index);
    setConfirmDialogOpen(true);
  };

  const confirmRemove = () => {
    if (itemToDelete !== null) {
      removeFromCart(itemToDelete);
    }
    setConfirmDialogOpen(false);
  };

  return (
    <>
      <Button 
        className="fixed bottom-6 right-6 rounded-full size-16 shadow-lg bg-bread-dark hover:bg-bread-dark/90 z-50"
        onClick={() => setIsOpen(true)}
      >
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
        <ShoppingCart className="h-6 w-6 text-white" />
      </Button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader className="mb-6">
            <SheetTitle className="font-serif text-2xl">Carrito de compra</SheetTitle>
          </SheetHeader>
          
          {items.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)]">
              <ShoppingCart className="h-12 w-12 text-gray-300" />
              <p className="text-gray-500 mt-4">Tu carrito está vacío</p>
              <Button 
                onClick={() => setIsOpen(false)} 
                className="mt-4 bg-bread-dark hover:bg-bread-dark/90"
              >
                Continuar comprando
              </Button>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto pb-4">
                {items.map((item, index) => {
                  const details = getProductDetails(item);
                  if (!details) return null;
                  
                  const { product, quantity, sliceOption, total } = details;
                  
                  return (
                    <div key={`${product.id}-${sliceOption}`} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex gap-3">
                        <img src={product.images[0]} alt={product.name} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{product.name}</h4>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6" 
                              onClick={() => handleRemove(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="mt-2">
                            <Select
                              value={sliceOption}
                              onValueChange={(value) => updateFormat(index, value)}
                            >
                              <SelectTrigger className="h-8 text-sm w-full">
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
                          
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6" 
                                onClick={() => {
                                  if (quantity === 1) {
                                    handleRemove(index);
                                  } else {
                                    updateQuantity(index, quantity - 1);
                                  }
                                }}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span>{quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6" 
                                onClick={() => updateQuantity(index, quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="font-medium">{total.toFixed(2)}€</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">Calculado en el checkout</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-medium">{cartTotal.toFixed(2)}€</span>
                </div>
                <Button className="w-full bg-[#807c5c] hover:bg-[#6a6749]">
                  Tramitar pedido
                </Button>
                <Button className="w-full mt-2" variant="outline">
                  Ver carrito
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
      
      <AlertDialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Deseas eliminar este producto del carrito? Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setConfirmDialogOpen(false)}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRemove} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CartButton;
