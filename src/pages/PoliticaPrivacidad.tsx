
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | Crust & Click";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bread-background flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">← Volver a la tienda</Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Política de Privacidad</h1>
          
          <div className="space-y-6 text-bread-dark">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">1. Responsable del Tratamiento</h2>
              <p>
                <strong>Identidad:</strong> Crust & Click<br />
                <strong>Dirección:</strong> Calle del Pan Artesano, 24, 28001 Madrid, España<br />
                <strong>Correo electrónico:</strong> info@crustandclick.com<br />
                <strong>Teléfono:</strong> +34 910 000 000
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">2. Finalidad del Tratamiento</h2>
              <p>
                En Crust & Click tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Gestionar pedidos y realizar la entrega de productos adquiridos a través de nuestra tienda online.</li>
                <li>Tramitar solicitudes, consultas o reclamaciones.</li>
                <li>Enviar comunicaciones comerciales sobre nuestros productos y servicios, siempre que el usuario haya consentido previamente.</li>
                <li>Mejorar la experiencia del usuario en nuestra web y analizar el comportamiento de navegación para optimizar nuestros servicios.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">3. Legitimación del Tratamiento</h2>
              <p>
                La base legal para el tratamiento de sus datos es:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>La ejecución de un contrato en el caso de compra de productos.</li>
                <li>El consentimiento del interesado para el envío de comunicaciones comerciales.</li>
                <li>El interés legítimo para la mejora de nuestros servicios y la experiencia del usuario.</li>
                <li>El cumplimiento de obligaciones legales para la gestión fiscal y contable.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">4. Categorías de Datos Tratados</h2>
              <p>
                Los datos que tratamos son:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Datos identificativos: nombre, apellidos, dirección postal, dirección de correo electrónico, teléfono.</li>
                <li>Datos económicos: información de pago (no almacenamos datos completos de tarjetas de crédito).</li>
                <li>Datos de navegación: dirección IP, tipo de navegador, idioma, fecha y hora de acceso, tiempo de permanencia en la web, páginas visitadas.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">5. Conservación de Datos</h2>
              <p>
                Los datos personales proporcionados se conservarán:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Mientras se mantenga la relación comercial.</li>
                <li>Hasta que solicite su supresión.</li>
                <li>Durante el tiempo necesario para cumplir con las obligaciones legales.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">6. Destinatarios de los Datos</h2>
              <p>
                Sus datos podrán ser comunicados a:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Proveedores de servicios necesarios para la ejecución del contrato (transporte, pago, etc.).</li>
                <li>Administraciones Públicas en los casos previstos por la ley.</li>
                <li>No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE) salvo obligación legal.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">7. Derechos de los Interesados</h2>
              <p>
                Cualquier persona tiene derecho a obtener confirmación sobre si en Crust & Click estamos tratando datos personales que les conciernan, o no.
              </p>
              <p className="mt-2">
                Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.
              </p>
              <p className="mt-2">
                En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
              </p>
              <p className="mt-2">
                En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. Crust & Click dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.
              </p>
              <p className="mt-2">
                Los interesados también tienen derecho a la portabilidad de sus datos.
              </p>
              <p className="mt-2">
                Para ejercer estos derechos, puede dirigirse a Crust & Click en la dirección postal o electrónica indicada anteriormente, aportando documentación que acredite su identidad.
              </p>
              <p className="mt-2">
                Si considera que el tratamiento no se ajusta a la normativa vigente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">8. Medidas de Seguridad</h2>
              <p>
                Crust & Click ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a los que están expuestos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">9. Modificación de la Política de Privacidad</h2>
              <p>
                Crust & Click se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, anunciaremos en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
