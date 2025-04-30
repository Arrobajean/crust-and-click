
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button 
        className="fixed bottom-6 right-6 rounded-full size-16 shadow-lg bg-bread-dark hover:bg-bread-dark/90 z-50"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart className="h-6 w-6 text-white" />
      </Button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-serif">Carrito de compra</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center items-center h-full">
            <ShoppingCart className="h-12 w-12 text-gray-300" />
            <p className="text-gray-500 mt-4">Tu carrito está vacío</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartButton;
