
import React from "react";
import { Filter, Search, Grid3X3, Grid2X2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { categories } from "@/lib/data";

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  filteredCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  filteredCount,
}) => {
  return (
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

          <Select 
            value={sortBy} 
            onValueChange={(value) => setSortBy(value)}
          >
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
  );
};

export default FilterBar;
