import React, { useRef } from "react";
import { useProductFilter } from "@/hooks/userProductFilter";
import FilterBar from "@/components/IndexPage/FilterBar";
import ProductGridView from "@/components/IndexPage/ProductGridView";
import ProductListView from "@/components/IndexPage/ProductListView";
import HeroVideoSection from "@/components/IndexPage/HeroVideoSection";

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

  const tiendaRef = useRef<HTMLDivElement | null>(null);

  const scrollToTienda = () => {
    tiendaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bread-background">
      <HeroVideoSection onScrollClick={scrollToTienda} />

      {/* ⬇ Sección tienda */}
      <div
        ref={tiendaRef}
        className="px-6 md:px-10 max-w-7xl mx-auto pt-20 pb-20"
      >
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
