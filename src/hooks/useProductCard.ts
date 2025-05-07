import { useState } from "react";
import { Product } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";

export function useProductCard(product: Product) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(
    product.packageOptions?.[0]?.label || product.sliceOptions[0]
  );
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartToastOpen, setCartToastOpen] = useState(false);

  const { addToCart } = useCart();
  const selectedPrice =
    product.packageOptions?.find((p) => p.label === option)?.price ??
    product.price;

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart(product.id, quantity, option);
    setCartToastOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget as HTMLElement | null;
    if (
      related?.closest(".radix-select-content") ||
      related?.closest(".radix-select-trigger")
    )
      return;
    if (!dropdownOpen) setIsHovered(false);
  };

  return {
    isQuickViewOpen,
    setIsQuickViewOpen,
    quantity,
    setQuantity,
    option,
    setOption,
    isHovered,
    setIsHovered,
    dropdownOpen,
    setDropdownOpen,
    cartToastOpen,
    setCartToastOpen,
    selectedPrice,
    handleAddToCart,
    handleMouseLeave,
  };
}
