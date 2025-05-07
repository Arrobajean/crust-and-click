import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product, products } from "@/lib/data";
import { toast } from "@/components/ui/sonner";

interface CartContextType {
  items: CartItem[];
  addToCart: (
    productId: number,
    quantity: number,
    sliceOption: string,
    variantId?: number
  ) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  updateFormat: (index: number, sliceOption: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  getProductDetails: (item: CartItem) => {
    product: Product;
    quantity: number;
    sliceOption: string;
    total: number;
  } | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Cargar carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart data:", error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Añadir un producto al carrito
  const addToCart = (
    productId: number,
    quantity: number,
    sliceOption: string,
    variantId?: number
  ) => {
    const existingItemIndex = items.findIndex(
      (item) =>
        item.productId === productId &&
        item.sliceOption === sliceOption &&
        item.variantId === variantId
    );

    if (existingItemIndex >= 0) {
      // Ya existe: sumamos la cantidad
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Nuevo ítem
      setItems([...items, { productId, quantity, sliceOption, variantId }]);
    }
  };

  // Eliminar un producto del carrito
  const removeFromCart = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Cambiar cantidad de un producto
  const updateQuantity = (index: number, quantity: number) => {
    const updatedItems = [...items];
    if (quantity <= 0) {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index].quantity = quantity;
    }
    setItems(updatedItems);
  };

  // Actualizar formato (rebanado, entero, paquete, etc.)
  const updateFormat = (index: number, sliceOption: string) => {
    const updatedItems = [...items];
    updatedItems[index].sliceOption = sliceOption;
    setItems(updatedItems);
  };

  // Vaciar el carrito
  const clearCart = () => {
    setItems([]);
  };

  // Total de ítems (sumando cantidades)
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  // Total del carrito (con precios dinámicos según opciones)
  const cartTotal = items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return total;

    // Por defecto usamos el precio base
    let price = product.price;

    // Si el sliceOption es un paquete válido, usamos su precio
    if (Array.isArray(product.packageOptions)) {
      const pkg = product.packageOptions.find(
        (p) => p.label === item.sliceOption
      );
      if (pkg) {
        price = pkg.price;
      }
    }

    return total + price * item.quantity;
  }, 0);

  // Detalles individuales del producto en el carrito
  const getProductDetails = (item: CartItem) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return null;

    // Por defecto usamos el precio base
    let price = product.price;

    // Si el sliceOption es un paquete válido, usamos su precio
    if (Array.isArray(product.packageOptions)) {
      const pkg = product.packageOptions.find(
        (p) => p.label === item.sliceOption
      );
      if (pkg) {
        price = pkg.price;
      }
    }

    return {
      product,
      quantity: item.quantity,
      sliceOption: item.sliceOption,
      total: price * item.quantity,
    };
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateFormat,
        clearCart,
        cartCount,
        cartTotal,
        getProductDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
