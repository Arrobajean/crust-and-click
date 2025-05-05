import { useParams } from "react-router-dom";
import { products } from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return <p className="text-center py-20">Producto no encontrado</p>;

  return (
    <div className="py-12 px-4">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
