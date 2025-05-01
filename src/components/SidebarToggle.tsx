
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainSidebar from './MainSidebar';

const SidebarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        className="fixed top-6 right-6 z-40 bg-bread-light/80 backdrop-blur-sm shadow-sm hover:bg-bread-light"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Abrir menú</span>
      </Button>
      
      <MainSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SidebarToggle;
