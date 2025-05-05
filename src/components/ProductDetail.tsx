import { Product } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { getProductBadges } from "@/lib/getProductBadges";

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  const badges = getProductBadges(product);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState(
    product.packageOptions?.[0]?.label || product.sliceOptions[0]
  );

  const selectedPrice =
    product.packageOptions?.find((opt) => opt.label === option)?.price ??
    product.price;

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Nombre */}
      <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
      <p className="text-center text-sm text-gray-500 italic mb-6">
        Made in Prim
      </p>

      {/* Galería */}
      {product.images && product.images.length > 0 && (
        <div className="max-w-[500px] mx-auto mb-6">
          <ImageCarousel images={product.images} />
        </div>
      )}

      {/* Descripción */}
      {product.description && (
        <p className="text-gray-700 text-sm text-center max-w-[600px] mx-auto mb-6">
          {product.description}
        </p>
      )}

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-2 text-xs mb-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 ${badge.color} px-3 py-1 rounded-full border shadow-sm`}
          >
            <badge.icon className="h-3 w-3" />
            <span>{badge.label}</span>
          </div>
        ))}
      </div>

      {/* Acordeones */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[600px] mx-auto text-sm text-gray-800 mb-6"
      >
        {product.ingredients && (
          <AccordionItem value="ingredients">
            <AccordionTrigger>Ingredientes</AccordionTrigger>
            <AccordionContent>{product.ingredients}</AccordionContent>
          </AccordionItem>
        )}
        {product.allergens && product.allergens.length > 0 && (
          <AccordionItem value="allergens">
            <AccordionTrigger>Alérgenos</AccordionTrigger>
            <AccordionContent>{product.allergens.join(", ")}</AccordionContent>
          </AccordionItem>
        )}
        {product.conservation && (
          <AccordionItem value="conservation">
            <AccordionTrigger>Conservación</AccordionTrigger>
            <AccordionContent>{product.conservation}</AccordionContent>
          </AccordionItem>
        )}
        {product.recommendations && (
          <AccordionItem value="recommendations">
            <AccordionTrigger>Recomendaciones</AccordionTrigger>
            <AccordionContent>{product.recommendations}</AccordionContent>
          </AccordionItem>
        )}
        {product.nutritionalInfo && (
          <AccordionItem value="nutritional">
            <AccordionTrigger>Información nutricional</AccordionTrigger>
            <AccordionContent>{product.nutritionalInfo}</AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      {/* Selector y botón */}
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-6">
        <select
          className="border px-3 py-2 rounded"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {product.packageOptions
            ? product.packageOptions.map((opt) => (
                <option key={opt.label} value={opt.label}>
                  {opt.label} - {opt.price.toFixed(2)}€
                </option>
              ))
            : product.sliceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
        </select>

        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 border px-3 py-2 rounded text-center"
        />

        <Button
          onClick={() => addToCart(product.id, quantity, option)}
          className="bg-[#807c5c] hover:bg-[#6a6749] text-white"
        >
          Añadir {quantity} x {selectedPrice.toFixed(2)}€ a la cesta
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
