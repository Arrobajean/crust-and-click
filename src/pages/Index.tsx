
import React, { useState } from "react";
import HomeHeader from "@/components/ui/homeHeader";
import Footer from "@/components/Footer";
import CartButton from "@/components/CartButton";
import CartToast from "@/components/CartToast";
import { useProductFilter } from "@/hooks/userProductFilter";
import { useAddToCartWithToast } from "@/hooks/useAddToCartWithToast";
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

  const { toastVisible, setToastVisible } = useAddToCartWithToast();

  return (
    <div className="min-h-screen bg-bread-background">
      <HomeHeader />

      <main className="px-6 md:px-10 max-w-7xl mx-auto pb-20">
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
      </main>

      <Footer />
      <CartButton />
      <CartToast isOpen={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
};

export default Index;
