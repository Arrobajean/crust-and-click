
import React, { useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const HowWeWork: React.FC = () => {
  useEffect(() => {
    document.title = 'Cómo trabajamos - Crust & Click';
  }, []);

  return (
    <div className="min-h-screen bg-bread-light py-16 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-2xl md:text-3xl text-bread-dark uppercase tracking-wider mb-4">
          Cómo trabajamos
        </h1>
        <Separator className="max-w-[100px] mx-auto mb-12 bg-bread-accent/30" />

        <div className="space-y-20">
          <section className="max-w-[800px] mx-auto">
            <h2 className="font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">Selección de ingredientes</h2>
            <p className="leading-relaxed text-bread-dark/80 mb-4">
              Trabajamos exclusivamente con ingredientes ecológicos certificados. Nuestras harinas 
              provienen de molinos tradicionales que conservan todos los nutrientes del grano. 
              Para nosotros, el origen y la calidad de la materia prima es el comienzo de un buen pan.
            </p>
            <p className="leading-relaxed text-bread-dark/80">
              Colaboramos con productores locales que comparten nuestra filosofía de respeto 
              por la tierra y los métodos tradicionales de cultivo.
            </p>
          </section>

          <section className="max-w-[800px] mx-auto">
            <h2 className="font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">Masa madre natural</h2>
            <p className="leading-relaxed text-bread-dark/80 mb-4">
              Nuestra masa madre tiene más de cinco años y se alimenta diariamente con harina 
              ecológica y agua filtrada. No utilizamos levaduras comerciales, lo que permite una 
              fermentación lenta y natural que potencia los sabores y facilita la digestión.
            </p>
            <p className="leading-relaxed text-bread-dark/80">
              Cada fermento tiene su propio carácter, que cuidamos y preservamos para mantener 
              esa identidad única en cada horneada.
            </p>
          </section>

          <section className="max-w-[800px] mx-auto">
            <h2 className="font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">Tiempo y paciencia</h2>
            <p className="leading-relaxed text-bread-dark/80 mb-4">
              Nuestras masas fermentan entre 16 y 24 horas. Este proceso lento permite desarrollar
              sabores complejos y texturas únicas que distinguen nuestro pan. La paciencia es 
              esencial para que los almidones se transformen y las proteínas maduren adecuadamente.
            </p>
            <p className="leading-relaxed text-bread-dark/80">
              No tenemos prisa. El tiempo es nuestro aliado para conseguir un producto excepcional.
            </p>
          </section>

          <section className="max-w-[800px] mx-auto">
            <h2 className="font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">Horneado tradicional</h2>
            <p className="leading-relaxed text-bread-dark/80 mb-4">
              Cada pieza se hornea individualmente, prestando atención a su tiempo óptimo y 
              temperatura ideal. Utilizamos hornos de piedra que distribuyen el calor homogéneamente,
              consiguiendo cortezas crujientes y migas alveoladas.
            </p>
            <p className="leading-relaxed text-bread-dark/80">
              El resultado es un pan con personalidad, donde cada pieza es única e irrepetible.
            </p>
          </section>

          <section className="max-w-[800px] mx-auto">
            <h2 className="font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">Del obrador a tu mesa</h2>
            <p className="leading-relaxed text-bread-dark/80 mb-4">
              Horneamos a diario para garantizar la máxima frescura. Nuestro sistema de pedidos 
              online nos permite producir lo justo y necesario, minimizando el desperdicio y 
              asegurando que cada cliente reciba un producto recién horneado.
            </p>
            <p className="leading-relaxed text-bread-dark/80">
              Creemos firmemente que el buen pan debe ser accesible a todos, por eso trabajamos 
              para ofrecer un producto artesanal de la máxima calidad a un precio justo.
            </p>
          </section>

          <div className="pt-10">
            <p className="font-serif text-lg italic mb-10">
              "El pan es un alimento vivo que merece todo nuestro respeto y dedicación."
            </p>
            <Link 
              to="/contacto" 
              className="inline-block px-8 py-3 border border-bread-accent text-bread-accent hover:bg-bread-accent hover:text-white transition-colors rounded-md"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
