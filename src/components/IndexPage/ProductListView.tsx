import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import CartToast from "@/components/Cart/CartToast";

interface ProductListViewProps {
  products: Product[];
}

const ProductListView: React.FC<ProductListViewProps> = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);
  const [toastProductName, setToastProductName] = useState("");

  const handleAddToCart = (
    productId: string,
    option: string,
    name: string,
    quantity = 1
  ) => {
    const id = parseInt(productId);
    addToCart(id, quantity, option);
    setToastProductName(name);
    setShowToast(true);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex gap-6 border-b pb-6">
            <div className="w-40 h-40">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-medium">{product.name}</h3>
              <p className="text-lg font-medium mt-1">
                {product.price.toFixed(2)}€
              </p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() =>
                    handleAddToCart(
                      String(product.id),
                      product.packageOptions?.[0]?.label ||
                        product.sliceOptions[0],
                      product.name
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

      {/* Toast con nombre del producto */}
      <CartToast
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        productName={toastProductName}
      />
    </>
  );
};

export default ProductListView;
