import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/data";
import {
  LeafyGreen,
  WheatOff,
  Sparkles,
  ShieldCheck,
  Apple,
  Hand,
  X,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import ImageCarousel from "@/components/ImageCarousel";

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCartSuccess?: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCartSuccess,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(
    product.packageOptions?.[0]?.label || product.sliceOptions[0]
  );
  const { addToCart } = useCart();

  const selectedPrice =
    product.packageOptions?.find((opt) => opt.label === option)?.price ??
    product.price;

  const handleAddToCart = () => {
    addToCart(product.id, quantity, option);
    onClose();
    onAddToCartSuccess?.();
  };

  const renderBadges = () => {
    const badges = [];

    if (product.isEco) {
      badges.push({
        label: "100% Ecológico",
        icon: <LeafyGreen className="h-3 w-3" />,
        style: "bg-green-100 text-green-800",
      });
    }

    if (product.isGlutenFree) {
      badges.push({
        label: "Sin Gluten",
        icon: <WheatOff className="h-3 w-3" />,
        style: "bg-amber-100 text-amber-800",
      });
    }

    if (
      product.description?.toLowerCase().includes("hecho a mano") ||
      product.description?.toLowerCase().includes("artesanal")
    ) {
      badges.push({
        label: "Hecho a Mano",
        icon: <Hand className="h-3 w-3" />,
        style: "bg-yellow-100 text-yellow-800",
      });
    }

    if (
      product.description?.toLowerCase().includes("sin conservantes") ||
      product.nutritionalInfo?.toLowerCase().includes("sin conservantes")
    ) {
      badges.push({
        label: "Sin Conservantes",
        icon: <ShieldCheck className="h-3 w-3" />,
        style: "bg-blue-100 text-blue-800",
      });
    }

    if (
      product.nutritionalInfo?.toLowerCase().includes("rico en proteínas") ||
      product.nutritionalInfo?.toLowerCase().includes("rico en minerales")
    ) {
      badges.push({
        label: "Rico en Nutrientes",
        icon: <Apple className="h-3 w-3" />,
        style: "bg-lime-100 text-lime-800",
      });
    }

    return (
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 ${badge.style} text-xs px-2 py-1 rounded-full`}
          >
            {badge.icon}
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] bg-white/95 backdrop-blur-md p-0 rounded-lg overflow-hidden border-0 shadow-xl">
        <div className="p-6 text-center">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex-1" />
            <DialogTitle className="font-sans text-xl uppercase font-medium text-center flex-grow">
              {product.name}
            </DialogTitle>
            <div className="flex-1 flex justify-end">
              <DialogClose className="h-6 w-6 hover:bg-gray-100 rounded-full p-1">
                <X className="h-full w-full" />
              </DialogClose>
            </div>
          </div>

          <p className="text-gray-500 italic mt-1 mb-6">Made in Prim</p>

          {/* Galería */}
          {product.images && (
            <div className="max-w-[400px] mx-auto mb-6">
              <ImageCarousel images={product.images} />
            </div>
          )}

          {/* Selectores */}
          <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto mb-6">
            <Select
              value={quantity.toString()}
              onValueChange={(val) => setQuantity(Number(val))}
            >
              <SelectTrigger className="border-[#807c5c]/30 bg-transparent">
                <SelectValue placeholder="Cantidad" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={option} onValueChange={setOption}>
              <SelectTrigger className="border-[#807c5c]/30 bg-transparent">
                <SelectValue placeholder="Formato" />
              </SelectTrigger>
              <SelectContent>
                {product.packageOptions
                  ? product.packageOptions.map((opt) => (
                      <SelectItem key={opt.label} value={opt.label}>
                        {opt.label} - {opt.price.toFixed(2)}€
                      </SelectItem>
                    ))
                  : product.sliceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
              </SelectContent>
            </Select>
          </div>

          {/* Botón */}
          <Button
            onClick={handleAddToCart}
            className="w-full max-w-[500px] bg-[#807c5c] hover:bg-[#6a6749] border-none text-white py-6 mb-8"
          >
            {selectedPrice.toFixed(2)}€/ud - Añadir a la cesta
          </Button>

          {/* Descripción */}
          {product.description && (
            <p className="text-sm text-gray-600 mt-2 max-w-[90%] mx-auto mb-4">
              {product.description}
            </p>
          )}

          {renderBadges()}

          {/* Enlace a ficha completa */}
          <Link
            to={`/productos/${product.slug}`}
            className="block text-sm text-[#807c5c] hover:underline mt-3"
          >
            Ver ficha completa del producto →
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
