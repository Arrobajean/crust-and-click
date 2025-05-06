
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";

const OrderSummary = () => {
  const { items, cartTotal, getProductDetails } = useCart();
  
  // Calculate shipping costs
  const shippingCost = cartTotal > 50 ? 0 : 4.99;
  const totalWithShipping = cartTotal + shippingCost;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl md:text-2xl font-serif font-semibold mb-6">Resumen del Pedido</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => {
          const details = getProductDetails(item);
          if (!details) return null;
          
          return (
            <div key={`${item.productId}-${index}`} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden mr-4">
                  <img 
                    src={details.product.images[0]} 
                    alt={details.product.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{details.product.name}</h3>
                  <p className="text-sm text-bread-dark/70">
                    Cantidad: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="font-medium">
                {formatPrice(details.product.price * item.quantity)}
              </p>
            </div>
          );
        })}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-bread-dark/80">Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-bread-dark/80">Gastos de envío</span>
          <span className="font-medium">
            {shippingCost === 0 ? "Gratis" : formatPrice(shippingCost)}
          </span>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="flex justify-between text-xl font-semibold">
        <span>Total</span>
        <span>{formatPrice(totalWithShipping)}</span>
      </div>
      
      <div className="mt-6 p-4 bg-bread-accent/10 rounded-md">
        <p className="text-sm">
          <span className="font-medium">Envío Gratuito</span> en pedidos superiores a 50€. Entrega en 24/48h en Madrid capital.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
