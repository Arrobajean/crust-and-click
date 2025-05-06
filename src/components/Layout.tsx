
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartButton from "@/components/CartButton";
import CartToast from "@/components/CartToast";
import CookieBanner from "@/components/CookieBanner";
import { useAddToCartWithToast } from "@/hooks/useAddToCartWithToast";

const Layout: React.FC = () => {
  const { toastVisible, setToastVisible } = useAddToCartWithToast();

  return (
    <div className="flex flex-col min-h-screen bg-bread-background">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      <CartButton />
      <CartToast isOpen={toastVisible} onClose={() => setToastVisible(false)} />
      <CookieBanner />
    </div>
  );
};

export default Layout;
