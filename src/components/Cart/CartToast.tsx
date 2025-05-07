import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CartToastProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const CartToast: React.FC<CartToastProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed 
            bottom-[7.5rem] sm:bottom-6 
            inset-x-0 
            z-50 
            flex 
            justify-center 
            px-4
          "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Card className="bg-white/95 backdrop-blur shadow-lg border-0 rounded-lg px-4 py-3 flex items-center justify-between w-full max-w-xs sm:max-w-sm">
            <div className="flex items-center text-emerald-600">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">
                ¡{productName ?? "Producto"} añadido al carrito!
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
              aria-label="Cerrar notificación"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CartToast;
