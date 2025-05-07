import React from "react";
import { Product } from "@/lib/data";
import QuickViewModal from "./QuickViewModal";
import CartToast from "@/components/Cart/CartToast";
import { motion, AnimatePresence } from "framer-motion";
import { useProductCard } from "@/hooks/useProductCard";
import ProductCardContent from "./ProductCardContent";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
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
  } = useProductCard(product);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <ProductCardContent
          product={product}
          name={product.name}
          image={product.images[0]}
          option={option}
          quantity={quantity}
          selectedPrice={selectedPrice}
          isHovered={isHovered}
          onOptionChange={setOption}
          onQuantityChange={setQuantity}
          onAddToCart={handleAddToCart}
          onQuickView={() => setIsQuickViewOpen(true)}
        />

        {/* Badges */}
        {product.badges?.length > 0 && (
          <>
            {/* Mobile: visibles siempre */}
            <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2 sm:hidden px-2">
              {product.badges.map((badge, i) => (
                <div
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full ${badge.style}`}
                >
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Desktop: visibles en hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute bottom-2 inset-x-0 hidden sm:flex justify-center gap-2 px-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.badges.map((badge, i) => (
                    <motion.div
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full ${badge.style}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {badge.label}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {isQuickViewOpen && (
        <QuickViewModal
          product={product}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          onAddToCartSuccess={() => setCartToastOpen(true)}
        />
      )}

      <CartToast
        isOpen={cartToastOpen}
        onClose={() => setCartToastOpen(false)}
        productName={product.name}
      />
    </>
  );
};

export default ProductCard;
