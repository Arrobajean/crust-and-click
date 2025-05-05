
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  useEffect(() => {
    document.title = "Aviso Legal | Crust & Click";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bread-background flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">← Volver a la tienda</Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Aviso Legal</h1>
          
          <div className="space-y-6 text-bread-dark">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">1. Datos Identificativos</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Razón social: Crust & Click</li>
                <li>NIF: B12345678</li>
                <li>Domicilio: Calle del Pan Artesano, 24, 28001 Madrid, España</li>
                <li>Correo electrónico: info@crustandclick.com</li>
                <li>Teléfono: +34 910 000 000</li>
                <li>Nombre de dominio: www.crustandclick.com</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">2. Objeto</h2>
              <p>
                El presente documento tiene por objeto establecer las Condiciones Generales de Uso del sitio web www.crustandclick.com, del que es titular Crust & Click.
              </p>
              <p className="mt-2">
                La navegación por el sitio web de Crust & Click atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">3. Condiciones de Acceso y Utilización</h2>
              <p>
                El sitio web y sus servicios son de acceso libre y gratuito. No obstante, Crust & Click puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario.
              </p>
              <p className="mt-2">
                El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a Crust & Click y será el único responsable de las manifestaciones falsas o inexactas que realice.
              </p>
              <p className="mt-2">
                El usuario se compromete expresamente a hacer un uso adecuado de los contenidos y servicios de Crust & Click y a no emplearlos para, entre otros:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobos, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
                <li>Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas físicos y lógicos de Crust & Click o de terceras personas.</li>
                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">4. Propiedad Intelectual e Industrial</h2>
              <p>
                Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Crust & Click, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
              </p>
              <p className="mt-2">
                Las marcas, nombres comerciales o signos distintivos son titularidad de Crust & Click, sin que pueda entenderse que el acceso al sitio web atribuya ningún derecho sobre las citadas marcas, nombres comerciales y/o signos distintivos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">5. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                Crust & Click no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">6. Modificaciones</h2>
              <p>
                Crust & Click se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso previo, en el contenido de su sitio web. Tanto en lo referente a los contenidos del sitio web, como en las condiciones de uso del mismo, o en las condiciones generales de contratación. Dichas modificaciones podrán realizarse a través de su sitio web por cualquier forma admisible en derecho y serán de obligado cumplimiento durante el tiempo en que se encuentren publicadas en la web y hasta que no sean modificadas válidamente por otras posteriores.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">7. Legislación Aplicable y Jurisdicción</h2>
              <p>
                La relación entre Crust & Click y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid, salvo que la normativa aplicable determine de forma imperativa otro fuero o legislación distinta.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
