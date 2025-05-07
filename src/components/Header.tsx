import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuLinks = [
    { title: "Inicio", path: "/" },
    { title: "Nosotros", path: "/nuestra-filosofia" },
    { title: "Cómo Trabajamos", path: "/como-trabajamos" },
    { title: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bread-light/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        {isMobile ? (
          <>
            {/* Cart Button */}
            <button
              onClick={() => navigate("/checkout")}
              className="p-2 rounded-full bg-bread-accent/10 hover:bg-bread-accent/20 transition relative"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="h-5 w-5 text-bread-dark" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl font-medium text-bread-dark"
            >
              Crust & Click
            </Link>

            {/* Menu Icon */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-bread-accent/10 transition"
              aria-label="Abrir menú"
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-bread-dark" />
              ) : (
                <Menu className="h-6 w-6 text-bread-dark" />
              )}
            </motion.button>
          </>
        ) : (
          <>
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl font-medium text-bread-dark"
            >
              Crust & Click
            </Link>

            {/* Desktop Nav */}
            <nav className="flex items-center space-x-8">
              {menuLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="text-bread-dark hover:text-bread-accent transition font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Cart */}
            <button
              onClick={() => navigate("/checkout")}
              className="p-2 rounded-full bg-bread-accent/10 hover:bg-bread-accent/20 transition relative"
            >
              <ShoppingCart className="h-5 w-5 text-bread-dark" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </>
        )}
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white" // o bg-bread-light si es opaco
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-white shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X Button — ahora fijo, sin transición */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-bread-accent/10 transition"
                >
                  <X className="h-6 w-6 text-bread-dark" />
                </button>
              </div>

              <nav className="flex flex-col items-center space-y-6">
                {menuLinks.map((link) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-bread-dark hover:text-bread-accent transition block py-2 text-lg font-medium"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
