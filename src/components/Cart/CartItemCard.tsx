import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "@/lib/data";
import { shouldShowSliceSelector, shouldShowPackageSelector } from "@/lib/cartUtils";

interface Props {
  index: number;
  product: Product;
  quantity: number;
  sliceOption: string;
  total: number;
  handleRemove: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  updateFormat: (index: number, format: string) => void;
}

const CartItemCard: React.FC<Props> = ({
  index,
  product,
  quantity,
  sliceOption,
  total,
  handleRemove,
  updateQuantity,
  updateFormat,
}) => {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-medium">{product.name}</h4>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => handleRemove(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {shouldShowSliceSelector(product) && (
            <div className="mt-2">
              <Select value={sliceOption} onValueChange={(value) => updateFormat(index, value)}>
                <SelectTrigger className="h-8 text-sm w-full">
                  <SelectValue placeholder="Formato" />
                </SelectTrigger>
                <SelectContent>
                  {product.sliceOptions?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {shouldShowPackageSelector(product) && (
            <div className="mt-2">
              <Select value={sliceOption} onValueChange={(value) => updateFormat(index, value)}>
                <SelectTrigger className="h-8 text-sm w-full">
                  <SelectValue placeholder="Paquete" />
                </SelectTrigger>
                <SelectContent>
                  {product.packageOptions?.map((pkg) => (
                    <SelectItem key={pkg.label} value={pkg.label}>
                      {pkg.label} — {pkg.price.toFixed(2)}€
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={() => {
                  if (quantity === 1) {
                    handleRemove(index);
                  } else {
                    updateQuantity(index, quantity - 1);
                  }
                }}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                onClick={() => updateQuantity(index, quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <p className="font-medium">{total.toFixed(2)}€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
