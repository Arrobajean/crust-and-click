
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isEco?: boolean;
  isGlutenFree?: boolean;
  nutritionalInfo: string;
  ingredients: string;
  allergens?: string[];
  conservation?: string;
  recommendations?: string;
  sliceOptions: string[];
  inStock: boolean;
  stockQuantity?: number;
  variants?: ProductVariant[];
  related?: number[];
}

export interface ProductVariant {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  productId: number;
  quantity: number;
  sliceOption: string;
  variantId?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pan de Masa Madre",
    description: "Pan artesanal elaborado con masa madre natural y fermentado durante 24 horas para obtener un sabor y aroma únicos.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
    category: "Tradicional",
    isEco: true,
    nutritionalInfo: "Rico en antioxidantes y con un índice glucémico más bajo que el pan convencional.",
    ingredients: "Harina de trigo ecológica, agua, masa madre natural, sal marina.",
    allergens: ["Gluten"],
    conservation: "Conservar en lugar fresco y seco. Consumir preferentemente en 3-4 días.",
    recommendations: "Ideal para acompañar quesos, embutidos o solo con un buen aceite de oliva.",
    sliceOptions: ["Entero", "Rebanado"],
    inStock: true,
    stockQuantity: 15,
    related: [2, 3, 6]
  },
  {
    id: 2,
    name: "Hogaza Integral",
    description: "Hogaza de trigo integral con semillas de sésamo y girasol. Perfecto para acompañar quesos.",
    price: 5.35,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&q=80&w=1000",
    category: "Integral",
    isEco: true,
    nutritionalInfo: "Alto contenido en fibra y proteínas vegetales. Excelente fuente de minerales.",
    ingredients: "Harina integral ecológica, agua, masa madre, semillas de sésamo y girasol, sal marina.",
    allergens: ["Gluten", "Sésamo"],
    conservation: "Conservar en lugar fresco y seco. Consumir preferentemente en 3-4 días.",
    recommendations: "Ideal para tostadas con aguacate o hummus.",
    sliceOptions: ["Entero", "Rebanado"],
    inStock: true,
    stockQuantity: 10,
    related: [1, 4]
  },
  {
    id: 3,
    name: "Baguette Tradicional",
    description: "Baguette tradicional de corteza crujiente y miga alveolada. Horneada en horno de piedra.",
    price: 3.20,
    image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&q=80&w=1000",
    category: "Tradicional",
    nutritionalInfo: "Pan ligero y de fácil digestión gracias a su larga fermentación.",
    ingredients: "Harina de trigo, agua, levadura, sal.",
    allergens: ["Gluten"],
    conservation: "Consumir preferentemente en el día.",
    recommendations: "Perfecto para bocadillos o para acompañar comidas.",
    sliceOptions: ["Entero"],
    inStock: true,
    stockQuantity: 20,
    related: [1]
  },
  {
    id: 4,
    name: "Pan de Centeno",
    description: "Pan rústico elaborado principalmente con harina de centeno. Denso y sabroso.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&q=80&w=1000",
    category: "Especial",
    nutritionalInfo: "Bajo índice glucémico y alto contenido en fibra soluble.",
    ingredients: "Harina de centeno ecológica, agua, masa madre de centeno, sal marina.",
    allergens: ["Gluten"],
    conservation: "Conservar envuelto en un paño de algodón. Consumir preferentemente en 5-7 días.",
    recommendations: "Ideal para acompañar platos fuertes o carnes.",
    sliceOptions: ["Entero", "Rebanado"],
    inStock: true,
    stockQuantity: 8,
    related: [2, 6]
  },
  {
    id: 5,
    name: "Pan Sin Gluten",
    description: "Pan especial elaborado con harinas naturales sin gluten. Esponjoso y con excelente sabor.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&q=80&w=1000",
    category: "Sin Gluten",
    isGlutenFree: true,
    nutritionalInfo: "Apto para celíacos. Elaborado en obrador independiente para evitar contaminación cruzada.",
    ingredients: "Mezcla de harinas sin gluten (arroz, maíz), agua, levadura, fibras vegetales, sal.",
    allergens: [],
    conservation: "Conservar en refrigerador. Consumir preferentemente en 2-3 días.",
    recommendations: "Ideal para tostadas o para acompañar comidas.",
    sliceOptions: ["Entero", "Rebanado"],
    inStock: true,
    stockQuantity: 5,
    related: []
  },
  {
    id: 6,
    name: "Pan de Espelta",
    description: "Elaborado con espelta ecológica, un cereal antiguo más digestivo y nutritivo que el trigo moderno.",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1565181917578-a87bdd95af0a?auto=format&fit=crop&q=80&w=1000",
    category: "Antiguo",
    isEco: true,
    nutritionalInfo: "Rico en proteínas y minerales. Más fácil de digerir que el pan de trigo común.",
    ingredients: "Harina de espelta ecológica, agua, masa madre de espelta, sal marina.",
    allergens: ["Gluten"],
    conservation: "Conservar en lugar fresco y seco. Consumir preferentemente en 3-4 días.",
    recommendations: "Perfecto para tostadas y acompañar con mermeladas caseras.",
    sliceOptions: ["Entero", "Rebanado"],
    inStock: true,
    stockQuantity: 12,
    related: [1, 4]
  }
];

export const categories = [
  { id: "all", name: "Todos" },
  { id: "Tradicional", name: "Tradicional" },
  { id: "Integral", name: "Integral" },
  { id: "Especial", name: "Especial" },
  { id: "Sin Gluten", name: "Sin Gluten" },
  { id: "Antiguo", name: "Antiguos" }
];
