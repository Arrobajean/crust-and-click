
// src/hooks/useAddToCartWithToast.ts
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export const useAddToCartWithToast = () => {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = (productId: string, option: string) => {
    // Convert the productId string to a number
    addToCart(Number(productId), 1, option);
    setToastVisible(true);
  };

  return { handleAddToCart, toastVisible, setToastVisible };
};
