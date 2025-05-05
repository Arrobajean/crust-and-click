import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Card } from "./ui/card";


interface CartToastProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartToast: React.FC<CartToastProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
 <Card className="bg-white/95 backdrop-blur shadow-lg border-0 rounded-lg px-3 py-2 inline-flex items-center">
  <div className="flex items-center text-emerald-600">
    <CheckCircle2 className="h-4 w-4 mr-1" />
    <span className="font-medium text-sm">¡Producto añadido al carrito!</span>
  </div>
  <button 
    onClick={onClose}
    className="ml-2 p-1 hover:bg-gray-100 rounded-full"
  >
    <X className="h-4 w-4 text-gray-500" />
  </button>
</Card>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartToast;
