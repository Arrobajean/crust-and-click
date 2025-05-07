import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const useCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    updateFormat,
    cartCount,
    cartTotal,
    getProductDetails,
  } = useCart();

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

  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  const handleViewCart = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  return {
    isOpen,
    setIsOpen,
    itemToDelete,
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
  };
};
