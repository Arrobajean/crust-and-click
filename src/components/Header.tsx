import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Use our custom hook to handle clicks outside the menu
  useOnClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuLinks = [
    { title: "Inicio", path: "/" },
    { title: "Nosotros", path: "/nuestra-filosofia" },
    { title: "Cómo Trabajamos", path: "/como-trabajamos" },
    { title: "Contacto", path: "/contacto" },
  ];

  // Animation variants for staggered menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 bg-bread-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        {isMobile ? (
          <>
            {/* Mobile Layout: Cart (Left) - Logo (Center) - Menu (Right) */}
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
              className="font-serif text-xl font-medium text-bread-dark absolute left-1/2 -translate-x-1/2"
            >
              Crust & Click
            </Link>

            {/* Menu Icon */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-bread-accent/10 transition relative z-50"
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
            {/* Desktop Layout: Logo (Left) - Nav (Center) - Cart (Right) */}
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
              aria-label="Ver carrito"
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
      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-bread-light shadow-xl p-6"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Content */}
                <div className="flex-1 mt-12">
                  <motion.nav
                    className="flex flex-col items-center space-y-6 pt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {menuLinks.map((link) => (
                      <motion.div
                        key={link.title}
                        variants={itemVariants}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          className="text-bread-dark hover:text-bread-accent transition block py-2 text-lg font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>

                {/* Footer copyright (opcional) */}
                <footer className="pt-6 text-center md:text-left text-sm text-bread-dark/70">
                  © {new Date().getFullYear()} Crust & Click. Todos los derechos
                  reservados.
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
