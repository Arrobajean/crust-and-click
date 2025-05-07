import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Props {
  product: Product;
  name: string;
  image: string;
  option: string;
  quantity: number;
  selectedPrice: number;
  isHovered: boolean;
  onOptionChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
  onAddToCart: (e?: React.MouseEvent) => void;
  onQuickView: () => void;
}

const ProductCardContent: React.FC<Props> = ({
  product,
  name,
  image,
  option,
  quantity,
  selectedPrice,
  isHovered,
  onOptionChange,
  onQuantityChange,
  onAddToCart,
  onQuickView,
}) => (
  <div className="product-card aspect-[3/4] mb-6 relative">
    <img src={image} alt={name} className="w-full h-full object-cover" />

    <div
      className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center p-4 w-full max-w-[250px]">
        <button
          onClick={onQuickView}
          className="text-xs tracking-wider text-white/70 uppercase mb-1 hover:text-white transition-colors cursor-pointer"
        >
          VISTA RÁPIDA
        </button>
        <h3 className="font-sans text-white text-lg uppercase font-medium mb-4">
          {name}
        </h3>

        <div className="space-y-3 mb-4">
          <Select value={option} onValueChange={onOptionChange}>
            <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
              <SelectValue placeholder="Formato" />
            </SelectTrigger>
            <SelectContent className="bg-white border-none shadow-lg z-50">
              {(product.packageOptions ?? product.sliceOptions).map(
                (opt: any) => (
                  <SelectItem key={opt.label ?? opt} value={opt.label ?? opt}>
                    {opt.label
                      ? `${opt.label} - ${opt.price.toFixed(2)}€`
                      : opt}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>

          <Select
            value={quantity.toString()}
            onValueChange={(val) => onQuantityChange(Number(val))}
          >
            <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
              <SelectValue placeholder="Cantidad" />
            </SelectTrigger>
            <SelectContent className="bg-white border-none shadow-lg z-50">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={onAddToCart}
          className="w-full bg-[#807c5c] hover:bg-[#6a6749] border-none text-white"
        >
          {(selectedPrice * quantity).toFixed(2)}€ - Añadir
        </Button>
      </div>
    </div>
  </div>
);

export default ProductCardContent;
