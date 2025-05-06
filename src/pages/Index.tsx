
import React from "react";
import { useProductFilter } from "@/hooks/userProductFilter";
import FilterBar from "@/components/IndexPage/FilterBar";
import ProductGridView from "@/components/IndexPage/ProductGridView";
import ProductListView from "@/components/IndexPage/ProductListView";

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

  return (
    <div className="bg-bread-background">
      <div className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
        <div className="py-8 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-medium mb-4">
            Nuestro Pan Artesanal
          </h1>
          <p className="max-w-2xl mx-auto text-bread-dark/80 mb-8">
            Elaborado con ingredientes orgánicos, masa madre natural y más de 16
            horas de fermentación. Descubre el auténtico sabor del pan como se
            hacía antiguamente.
          </p>
        </div>

        <FilterBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filteredCount={filteredCount}
        />

        {viewMode === "grid" ? (
          <ProductGridView products={sortedProducts} />
        ) : (
          <ProductListView products={sortedProducts} />
        )}
      </div>
    </div>
  );
};

export default Index;
