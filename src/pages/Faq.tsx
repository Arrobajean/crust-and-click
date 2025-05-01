
import React, { useEffect } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const Faq: React.FC = () => {
  useEffect(() => {
    document.title = 'Preguntas Frecuentes - Crust & Click';
  }, []);

  return (
    <div className="min-h-screen bg-bread-light py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-2xl md:text-3xl text-bread-dark uppercase tracking-wider mb-4">
          Preguntas Frecuentes
        </h1>
        <Separator className="max-w-[100px] mx-auto mb-12 bg-bread-accent/30" />

        <Accordion type="single" collapsible className="w-full text-left">
          <AccordionItem value="item-1" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Cuándo recibo mi pedido?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Realizamos entregas de lunes a viernes. Todos los pedidos recibidos antes de las 19:00h serán 
                procesados y entregados al día siguiente. Los pedidos realizados después de las 19:00h, 
                en fin de semana o festivos serán procesados el siguiente día laborable.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Cómo conservar el pan?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Para mantener tu pan artesanal lo más fresco posible, te recomendamos guardarlo en una bolsa 
                de papel o envuelto en un paño de algodón a temperatura ambiente. Si no lo vas a consumir
                en 2-3 días, puedes congelarlo envuelto en papel y luego en una bolsa hermética.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Qué ingredientes utilizáis?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Trabajamos exclusivamente con ingredientes ecológicos de primera calidad: harinas molidas 
                a piedra, masa madre natural, agua filtrada y sal marina. No utilizamos aditivos, 
                conservantes ni mejorantes artificiales en ninguno de nuestros productos.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Cómo realizar un pedido?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Para realizar un pedido, simplemente navega por nuestro catálogo, selecciona los productos 
                que deseas y añádelos al carrito. Una vez finalices tu selección, procede al checkout 
                donde podrás elegir la fecha de entrega y el método de pago. Recibirás una confirmación 
                por email una vez completado el proceso.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Ofrecéis productos sin gluten?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Sí, disponemos de una selección de productos elaborados sin gluten. Estos están claramente 
                etiquetados en nuestra tienda con el distintivo "Sin Gluten". Sin embargo, te informamos que 
                todos nuestros productos se elaboran en el mismo obrador, por lo que no podemos garantizar la 
                ausencia total de trazas para personas con celiaquía severa.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-bread-muted">
            <AccordionTrigger className="font-serif uppercase text-sm md:text-base text-center justify-center py-6">
              ¿Cuál es vuestra política de devoluciones?
            </AccordionTrigger>
            <AccordionContent className="text-center max-w-[600px] mx-auto">
              <p className="leading-relaxed text-bread-dark/80">
                Dado que nuestros productos son artesanales y perecederos, no aceptamos devoluciones por 
                cambio de opinión. No obstante, si recibes un producto defectuoso o incorrecto, 
                contáctanos inmediatamente y lo resolveremos, ya sea reemplazando el producto o 
                reembolsando su importe.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-16">
          <p className="text-bread-dark/70 text-sm md:text-base">
            ¿No encuentras tu respuesta? <Link to="/contacto" className="text-bread-accent hover:underline transition-colors">Contáctanos</Link> o visita nuestra página de <Link to="/como-trabajamos" className="text-bread-accent hover:underline transition-colors">Cómo Trabajamos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
