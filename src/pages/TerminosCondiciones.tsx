
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TerminosCondiciones = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones | Crust & Click";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bread-background flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">← Volver a la tienda</Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Términos y Condiciones</h1>
          
          <div className="space-y-6 text-bread-dark">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">1. Información General</h2>
              <p>
                Las presentes Condiciones Generales regulan la venta de productos ofrecidos en el sitio web www.crustandclick.com, del que es titular Crust & Click, con domicilio en Calle del Pan Artesano, 24, 28001 Madrid, España, y dirección de correo electrónico info@crustandclick.com.
              </p>
              <p className="mt-2">
                La formalización de pedidos a través de este sitio web implica la aceptación de las presentes Condiciones Generales.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">2. Productos</h2>
              <p>
                Los productos ofrecidos en nuestra web son elaborados artesanalmente. Las fotografías de los productos se corresponden con su apariencia real, si bien debido a la naturaleza artesanal de nuestros productos y a la configuración de los dispositivos puede haber ligeras variaciones en el color o aspecto.
              </p>
              <p className="mt-2">
                Todos nuestros productos incluyen la información de alérgenos y sus ingredientes principales. En caso de duda o necesidad de información adicional, puede contactarnos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">3. Proceso de Compra</h2>
              <p>
                Para realizar un pedido en nuestra tienda online, debe seguir los siguientes pasos:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>Seleccionar los productos deseados y añadirlos al carrito de compra.</li>
                <li>Revisar el carrito y proceder a la compra.</li>
                <li>Completar los datos de entrega y facturación.</li>
                <li>Seleccionar el método de pago y confirmar el pedido.</li>
              </ol>
              <p className="mt-2">
                Una vez recibido el pedido, le enviaremos un correo electrónico de confirmación con los detalles del mismo. El contrato de compraventa se entenderá formalizado cuando reciba dicha confirmación.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">4. Precios</h2>
              <p>
                Los precios que se indican en nuestra web incluyen el IVA aplicable. Los gastos de envío se mostrarán desglosados durante el proceso de compra, antes de la confirmación del pedido.
              </p>
              <p className="mt-2">
                Crust & Click se reserva el derecho a modificar los precios en cualquier momento. No obstante, los cambios no afectarán a los pedidos ya confirmados.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">5. Pago</h2>
              <p>
                Los métodos de pago disponibles son:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tarjeta de crédito o débito (Visa, MasterCard, American Express)</li>
                <li>PayPal</li>
                <li>Bizum</li>
                <li>Pago contra reembolso (con un recargo adicional)</li>
              </ul>
              <p className="mt-2">
                El cargo en su tarjeta o cuenta se efectuará en el momento de la confirmación del pedido.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">6. Entrega</h2>
              <p>
                Realizamos entregas en Madrid capital y determinadas localidades cercanas. Los plazos de entrega son:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pedidos realizados antes de las 20:00h: entrega al día siguiente.</li>
                <li>Pedidos realizados después de las 20:00h: entrega en un plazo de 48 horas.</li>
              </ul>
              <p className="mt-2">
                Los pedidos se entregan de lunes a sábado, en horario de 9:00 a 20:00h. No se realizan entregas los domingos ni festivos.
              </p>
              <p className="mt-2">
                En caso de ausencia, la empresa de transporte podría intentar una segunda entrega o dejar un aviso para recoger el pedido en el punto de recogida más cercano.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">7. Derecho de Desistimiento</h2>
              <p>
                Debido a la naturaleza perecedera de nuestros productos, y conforme a lo establecido en el artículo 103 de la Ley General para la Defensa de los Consumidores y Usuarios, no se aplica el derecho de desistimiento a la compra de pan, bollería y otros productos de panadería.
              </p>
              <p className="mt-2">
                No obstante, si recibe un producto en mal estado o que no corresponde con su pedido, por favor, contacte con nuestro servicio de atención al cliente en un plazo máximo de 24 horas tras la recepción.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">8. Garantía</h2>
              <p>
                En Crust & Click nos esforzamos por garantizar la máxima calidad de nuestros productos. Si alguno de ellos no cumple con los estándares esperados, le rogamos que nos lo comunique dentro de las 24 horas siguientes a la recepción para poder ofrecerle una solución adecuada.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">9. Protección de Datos</h2>
              <p>
                Los datos personales que nos facilite serán tratados conforme a lo establecido en nuestra Política de Privacidad, que puede consultar en este enlace.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">10. Propiedad Intelectual e Industrial</h2>
              <p>
                Todos los contenidos del sitio web (incluyendo, sin limitación, textos, gráficos, logos, iconos, imágenes, archivos de audio, descargas digitales y software) son propiedad de Crust & Click o de sus proveedores de contenido y están protegidos por las leyes nacionales e internacionales de propiedad intelectual e industrial.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">11. Comunicaciones Electrónicas</h2>
              <p>
                Al proporcionarnos su dirección de correo electrónico durante el proceso de compra, acepta recibir comunicaciones electrónicas relacionadas con su pedido. Si desea recibir comunicaciones comerciales, deberá marcar la casilla correspondiente durante el proceso de registro o compra.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">12. Modificación de las Condiciones</h2>
              <p>
                Crust & Click se reserva el derecho de modificar en cualquier momento las presentes Condiciones Generales. Las modificaciones no afectarán a los pedidos ya realizados.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">13. Legislación Aplicable y Jurisdicción</h2>
              <p>
                Las presentes Condiciones Generales se rigen por la legislación española. Cualquier controversia que pudiera derivarse de la compra de productos en nuestra tienda online se someterá a los Juzgados y Tribunales de la ciudad de Madrid, salvo que la normativa aplicable disponga imperativamente otra cosa.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">14. Solución de Conflictos</h2>
              <p>
                En caso de controversia, el cliente puede acudir a un procedimiento de resolución extrajudicial de conflictos, accediendo a la plataforma de resolución de litigios en línea de la Unión Europea a través del siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TerminosCondiciones;
