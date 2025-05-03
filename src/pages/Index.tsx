
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import CartButton from '@/components/CartButton';
import { Button } from '@/components/ui/button';
import { categories, products, Product } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid3X3, Grid2X2 } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  useEffect(() => {
    document.title = 'Crust & Click - Panadería Artesanal';
  }, []);

  // Filter products by category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-bread-background">
      <header className="py-8 md:py-10 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-2xl md:text-4xl font-medium mb-3">Crust & Click</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
            Pan artesanal elaborado con ingredientes ecológicos, masa madre natural y tiempo.
          </p>
          <nav className="mt-6">
            <ul className="flex justify-center space-x-6">
              <li className="text-sm md:text-base">
                <Link to="/" className="text-bread-dark hover:text-bread-accent transition-colors font-medium">
                  Productos
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/como-trabajamos" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Cómo Trabajamos
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/nuestra-filosofia" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Nuestra Filosofía
                </Link>
              </li>
              <li className="text-sm md:text-base">
                <Link to="/faq" className="text-bread-dark hover:text-bread-accent transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-bread-dark/90 to-bread-dark/70 overflow-hidden rounded-lg mb-16">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
              alt="Pan artesanal" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-16 md:py-24 px-6 md:px-10 text-white text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">Nuestro Pan Artesanal</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8">
              Elaborado con ingredientes orgánicos, masa madre natural y más de 16 horas de fermentación.
              Descubre el auténtico sabor del pan como se hacía antiguamente.
            </p>
            <Button className="bg-bread-accent hover:bg-bread-accent/90 text-white border-none">
              Descubrir nuestra historia
            </Button>
          </div>
        </div>
      </header>
      
      <main className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
        {/* Store Controls */}
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
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" /> Filtrar
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Categorías</p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Button 
                          key={category.id} 
                          variant={selectedCategory === category.id ? "default" : "outline"} 
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
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
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
              {filteredProducts.length} productos
            </p>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
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
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium">{product.name}</h3>
                  <p className="text-lg font-medium mt-1">{product.price.toFixed(2)}€</p>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      onClick={() => {}} 
                      className="bg-[#807c5c] hover:bg-[#6a6749] border-none text-white"
                    >
                      Añadir a la cesta
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {}}
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
    </div>
  );
};

export default Index;
