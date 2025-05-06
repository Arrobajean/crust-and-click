
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const menuLinks = [
    { title: "Inicio", path: "/" },
    { title: "Productos", path: "/" },
    { title: "Nosotros", path: "/nuestra-filosofia" },
    { title: "Contacto", path: "/como-trabajamos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bread-light/90 backdrop-blur-sm shadow-sm py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl font-medium text-bread-dark">
          Crust & Click
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="text-bread-dark hover:text-bread-accent transition-colors duration-200 font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* Cart Icon (always visible) */}
        <div className="relative">
          <Link to="/" className="p-2 rounded-full bg-bread-accent/10 hover:bg-bread-accent/20 transition-colors duration-200">
            <ShoppingCart className="h-5 w-5 text-bread-dark" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-bread-accent/10 transition-colors duration-200 ml-4"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-bread-dark" /> : <Menu className="h-6 w-6 text-bread-dark" />}
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bread-dark/50 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-bread-light shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-bread-accent/10 transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-bread-dark" />
                </button>
              </div>

              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col items-center space-y-6"
              >
                {menuLinks.map((link) => (
                  <motion.div key={link.title} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className="text-bread-dark hover:text-bread-accent transition-colors duration-200 block py-2 text-lg font-medium"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
