import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import CartButton from "@/components/CartButton";
import CartToast from "@/components/CartToast";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";
import HomeHeader from "@/components/ui/homeHeader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid3X3, Grid2X2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCart } from "@/contexts/CartContext";
import { useProductFilter } from "@/hooks/userProductFilter";

const Index: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    sortedProducts,
    filteredCount,
  } = useProductFilter();

  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    document.title = "Crust & Click - Panadería Artesanal";
  }, []);

  const handleAddToCart = (productId: string, option: string) => {
    addToCart(productId, 1, option);
    setToastVisible(true);
  };

  return (
    <div className="min-h-screen bg-bread-background">
      <HomeHeader />

      <main className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
        {/* Controles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" /> Filtrar
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Categorías</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={
                            selectedCategory === category.id
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Destacados</SelectItem>
                  <SelectItem value="price-low">
                    Precio: Menor a Mayor
                  </SelectItem>
                  <SelectItem value="price-high">
                    Precio: Mayor a Menor
                  </SelectItem>
                  <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                  <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="h-9 w-9"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="h-9 w-9"
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>

            <p className="text-sm text-gray-500 ml-2">
              {filteredCount} productos
            </p>
          </div>
        </div>

        {/* Productos */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="flex gap-6 border-b pb-6">
                <div className="w-40 h-40">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium">
                    {product.name}
                  </h3>
                  <p className="text-lg font-medium mt-1">
                    {product.price.toFixed(2)}€
                  </p>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={() =>
                        handleAddToCart(
                          product.id,
                          product.packageOptions?.[0]?.label ||
                            product.sliceOptions[0]
                        )
                      }
                      className="bg-[#807c5c] hover:bg-[#6a6749] border-none text-white"
                    >
                      Añadir a la cesta
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/productos/${product.slug}`)}
                    >
                      Ver detalle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <CartButton />
      <CartToast isOpen={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
};

export default Index;