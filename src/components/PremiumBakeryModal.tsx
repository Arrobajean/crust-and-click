
import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from '@/components/ui/dialog';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

type BakeryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CategoryProps = {
  title: string;
  items: string[];
};

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <AccordionItem value={title} className="border-b border-bread-muted/50 py-1">
      <AccordionTrigger className="font-serif text-bread-dark py-2 hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <ul className="mt-1 space-y-2 pl-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm">
              <Link 
                to="#" 
                className="block py-1.5 hover:text-bread-accent transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

const CartSummary = () => {
  const cartItems = [
    { id: 1, name: 'Pan de masa madre', description: 'Trigo ecológico', quantity: 2, price: 5.50 },
    { id: 2, name: 'Croissant artesanal', description: 'Mantequilla francesa', quantity: 3, price: 2.75 }
  ];
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  
  return (
    <div className="mt-6">
      <h3 className="font-serif text-lg mb-4">Tu carrito</h3>
      
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4 max-h-[30vh] overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="bg-bread-muted/30 w-16 h-16 rounded-md shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm">{item.quantity} x {item.price.toFixed(2)}€</span>
                    <span className="font-medium">{(item.quantity * item.price).toFixed(2)}€</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-bread-muted/50">
            <div className="flex justify-between mb-6">
              <span className="font-medium">Total</span>
              <span className="font-serif text-lg">{totalPrice.toFixed(2)}€</span>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between border-bread-dark text-bread-dark hover:bg-bread-muted/20">
                Ver cesta
              </Button>
              <Button className="w-full bg-bread-dark hover:bg-bread-dark/90">
                Tramitar pedido
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <ShoppingCart className="mx-auto h-12 w-12 text-gray-300 mb-3" />
          <p className="text-gray-500">Tu carrito está vacío</p>
        </div>
      )}
    </div>
  );
};

const PremiumBakeryModal: React.FC<BakeryModalProps> = ({ isOpen, onClose }) => {
  const categories = [
    { title: 'Todos los productos', items: [] },
    { title: 'Pan', items: ['Pan de masa madre', 'Pan integral', 'Pan de centeno', 'Pan sin gluten'] },
    { title: 'Bollería', items: ['Croissants', 'Napolitanas', 'Ensaimadas', 'Magdalenas'] },
    { title: 'Salado', items: ['Empanadas', 'Quiches', 'Pizzas', 'Bocadillos'] }
  ];
  
  const navigationLinks = [
    { title: 'Cómo trabajamos', path: '#' },
    { title: 'Nuestra filosofía', path: '/nuestra-filosofia' },
    { title: 'Visítanos', path: '#' },
    { title: 'FAQ', path: '#' },
    { title: 'Contacto', path: '#' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-[95%] p-0 max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:duration-300">
        <div className="bg-bread-muted/40 text-center py-2.5 text-xs font-serif text-bread-dark sticky top-0 z-10">
          SEGUIMOS AMASANDO. COMO SIEMPRE. DESDE 2017
        </div>
        
        <div className="flex justify-between items-center py-5 px-4 relative">
          <DialogClose className="absolute left-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </DialogClose>
          
          <div className="mx-auto">
            <h1 className="font-serif text-xl font-medium text-bread-dark">Crust & Click</h1>
          </div>
          
          <div className="absolute right-2">
            <span className="inline-flex items-center justify-center bg-bread-accent/10 text-bread-dark w-7 h-7 rounded-full text-sm">
              5
            </span>
          </div>
        </div>
        
        <div className="px-6 py-2">
          <div className="mb-8">
            <Accordion type="single" collapsible className="w-full">
              {categories.map((category, index) => (
                <Category 
                  key={index} 
                  title={category.title} 
                  items={category.items} 
                />
              ))}
            </Accordion>
          </div>
          
          <CartSummary />
          
          <div className="mt-8 pt-6 border-t border-bread-muted/50">
            <nav className="text-sm">
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="block text-gray-600 hover:text-bread-dark transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-bread-muted/50 flex justify-center space-x-4 pb-6">
              <Button variant="outline" size="sm" className="px-6">Iniciar sesión</Button>
              <Button variant="outline" size="sm" className="px-6">Registrarse</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumBakeryModal;
