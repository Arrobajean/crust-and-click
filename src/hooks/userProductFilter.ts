import { useEffect, useState, useMemo } from "react";
import { Product, products } from "@/lib/data";

export const useProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("price-low");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [ecoOnly, setEcoOnly] = useState<boolean>(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Crust & Click - Panadería Artesanal";
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      if (ecoOnly && !product.isEco) return false;
      if (glutenFreeOnly && !product.isGlutenFree) return false;
      const q = searchQuery.toLowerCase();
      if (
        !product.name.toLowerCase().includes(q) &&
        !product.description.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, ecoOnly, glutenFreeOnly, searchQuery]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  return {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    ecoOnly,
    setEcoOnly,
    glutenFreeOnly,
    setGlutenFreeOnly,
    sortedProducts,
    filteredCount: filteredProducts.length,
  };
};
