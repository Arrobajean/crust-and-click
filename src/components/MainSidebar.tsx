
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ArrowRight, ShoppingCart } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetClose 
} from '@/components/ui/sheet';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerClose 
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CategoryProps = {
  title: string;
  items: string[];
  isActive?: boolean;
};

const Category: React.FC<CategoryProps> = ({ title, items, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(isActive);
  
  return (
    <div className="border-b border-bread-muted/50 py-3">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between font-serif text-left text-bread-dark"
      >
        {title}
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <ul className="mt-3 space-y-2 pl-2">
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
      )}
    </div>
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
          <div className="space-y-4 max-h-[40vh] overflow-y-auto">
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
                Ver cesta <ArrowRight className="h-4 w-4" />
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

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();

  const categories = [
    { title: 'Todos los productos', items: [], isActive: true },
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
  
  const sidebarContent = (
    <>
      <div className="bg-bread-muted/40 text-center py-2.5 text-xs font-serif">
        Seguimos amasando. Como siempre. Desde 2017
      </div>
      
      <div className="flex justify-between items-center py-5 px-4 relative">
        <SheetClose asChild>
          <Button variant="ghost" size="icon" className="absolute left-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar menú</span>
          </Button>
        </SheetClose>
        
        <div className="mx-auto">
          <h1 className="font-serif text-xl font-medium text-bread-dark">Crust & Click</h1>
        </div>
        
        <div className="absolute right-2">
          <span className="inline-flex items-center justify-center bg-bread-accent/10 text-bread-dark w-7 h-7 rounded-full text-sm">
            5
          </span>
        </div>
      </div>
      
      <div className="px-6 py-2 flex-1 overflow-auto">
        <div className="mb-8">
          {categories.map((category, index) => (
            <Category 
              key={index} 
              title={category.title} 
              items={category.items} 
              isActive={category.isActive} 
            />
          ))}
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
          
          <div className="mt-8 pt-6 border-t border-bread-muted/50 flex justify-center space-x-4">
            <Button variant="outline" size="sm" className="px-6">Iniciar sesión</Button>
            <Button variant="outline" size="sm" className="px-6">Registrarse</Button>
          </div>
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[85vh] overflow-auto">
          <DrawerHeader className="p-0 shadow-sm">
            {sidebarContent}
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md w-full p-0 overflow-auto">
        {sidebarContent}
      </SheetContent>
    </Sheet>
  );
};

export default MainSidebar;
