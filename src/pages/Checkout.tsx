
import React from "react";
import { useCart } from "@/contexts/CartContext";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderSummary from "@/components/Checkout/OrderSummary";

const Checkout = () => {
  const { items, cartTotal } = useCart();

  return (
    <div className="bg-bread-background py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-bread-dark mb-8 text-center">Finalizar Compra</h1>
        
        {items.length === 0 ? (
          <div className="max-w-lg mx-auto text-center py-12">
            <h2 className="text-xl font-medium mb-4">Tu carrito está vacío</h2>
            <p className="text-bread-dark/80 mb-6">No tienes productos en tu carrito de compra.</p>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-bread-accent text-white rounded-md hover:bg-bread-accent/90 transition-colors"
            >
              Volver a la tienda
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CheckoutForm />
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
