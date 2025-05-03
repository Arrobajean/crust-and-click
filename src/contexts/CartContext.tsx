
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, products } from '@/lib/data';
import { toast } from '@/components/ui/sonner';

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number, quantity: number, sliceOption: string, variantId?: number) => void;
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

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showCartToast, setShowCartToast] = useState(false);
  
  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart data:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: number, quantity: number, sliceOption: string, variantId?: number) => {
    const existingItemIndex = items.findIndex(
      item => item.productId === productId && 
              item.sliceOption === sliceOption && 
              item.variantId === variantId
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Add new item
      setItems([...items, { productId, quantity, sliceOption, variantId }]);
    }

    // Show toast notification
    setShowCartToast(true);
    setTimeout(() => setShowCartToast(false), 5000);
    
    const product = products.find(p => p.id === productId);
    if (product) {
      toast(`${quantity} ${product.name} añadido al carrito`, {
        description: `Formato: ${sliceOption}`,
        action: {
          label: "Ver carrito",
          onClick: () => console.log("Ver carrito clicked"),
        },
      });
    }
  };

  const removeFromCart = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    const updatedItems = [...items];
    if (quantity <= 0) {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index].quantity = quantity;
    }
    setItems(updatedItems);
  };
  
  const updateFormat = (index: number, sliceOption: string) => {
    const updatedItems = [...items];
    updatedItems[index].sliceOption = sliceOption;
    setItems(updatedItems);
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = items.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      return total + (product.price * item.quantity);
    }
    return total;
  }, 0);

  const getProductDetails = (item: CartItem) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return null;
    
    return {
      product,
      quantity: item.quantity,
      sliceOption: item.sliceOption,
      total: product.price * item.quantity
    };
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateFormat,
      clearCart,
      cartCount,
      cartTotal,
      getProductDetails
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
