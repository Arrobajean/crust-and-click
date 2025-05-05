import { Product } from "@/lib/data";
import { LeafyGreen, WheatOff, Info } from "lucide-react";

export const getProductBadges = (product: Product) => {
  const badges = [];

  if (product.isEco) {
    badges.push({
      label: "Ecológico",
      color: "bg-green-100 text-green-800",
      icon: LeafyGreen,
    });
  }

  if (product.isGlutenFree) {
    badges.push({
      label: "Sin gluten",
      color: "bg-amber-100 text-amber-800",
      icon: WheatOff,
    });
  }

  if (product.nutritionalInfo) {
    badges.push({
      label: "Nutricional",
      color: "bg-blue-100 text-blue-800",
      icon: Info,
    });
  }

  if (product.allergens?.length) {
    badges.push({
      label: "Con alérgenos",
      color: "bg-red-100 text-red-800",
      icon: Info,
    });
  }

  if (product.packageOptions?.length) {
    badges.push({
      label: "Varios tamaños",
      color: "bg-purple-100 text-purple-800",
      icon: Info,
    });
  }

  return badges;
};
