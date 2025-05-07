import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCartButton } from "@/hooks/useCartButton";
import CartItemCard from "@/components/Cart/CartItemCard";

const CartButton: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    confirmDialogOpen,
    setConfirmDialogOpen,
    items,
    cartCount,
    cartTotal,
    getProductDetails,
    handleRemove,
    confirmRemove,
    updateQuantity,
    updateFormat,
    handleCheckout,
    handleViewCart,
  } = useCartButton();

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
            <SheetTitle className="font-serif text-2xl">
              Carrito de compra
            </SheetTitle>
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

                  return (
                    <CartItemCard
                      key={`${details.product.id}-${details.sliceOption}`}
                      index={index}
                      product={details.product}
                      quantity={details.quantity}
                      sliceOption={details.sliceOption}
                      total={details.total}
                      handleRemove={handleRemove}
                      updateQuantity={updateQuantity}
                      updateFormat={updateFormat}
                    />
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
                  <span className="text-lg font-medium">
                    {cartTotal.toFixed(2)}€
                  </span>
                </div>
                <Button
                  className="w-full bg-[#807c5c] hover:bg-[#6a6749]"
                  onClick={handleCheckout}
                >
                  Tramitar pedido
                </Button>
                <Button
                  className="w-full mt-2"
                  variant="outline"
                  onClick={handleViewCart}
                >
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
              ¿Deseas eliminar este producto del carrito? Esta acción no se
              puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setConfirmDialogOpen(false)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmRemove}
              className="bg-red-600 hover:bg-red-700"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CartButton;
