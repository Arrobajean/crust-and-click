
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  useEffect(() => {
    document.title = "Política de Cookies | Crust & Click";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bread-background flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">← Volver a la tienda</Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Política de Cookies</h1>
          
          <div className="space-y-6 text-bread-dark">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su ordenador. Se utilizan ampliamente para hacer que los sitios web funcionen o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">2. ¿Cómo utilizamos las cookies?</h2>
              <p>
                Utilizamos cookies para mejorar la experiencia de navegación del usuario, analizar la navegación de los usuarios en nuestro sitio web y personalizar el contenido y los anuncios.
              </p>
              <p className="mt-2">
                En Crust & Click utilizamos los siguientes tipos de cookies:
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">3. Tipos de cookies que utilizamos</h2>
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies propias</h3>
              <p>Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies de terceros</h3>
              <p>Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies de sesión</h3>
              <p>Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies persistentes</h3>
              <p>Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies técnicas</h3>
              <p>Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies de personalización</h3>
              <p>Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador o la configuración regional.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies de análisis</h3>
              <p>Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.</p>
              
              <h3 className="text-xl font-serif font-medium mt-4 mb-2">Cookies publicitarias</h3>
              <p>Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">4. Detalle de las cookies utilizadas</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 mt-2">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Proveedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis</td>
                      <td className="border border-gray-300 px-4 py-2">Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.</td>
                      <td className="border border-gray-300 px-4 py-2">2 años</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis</td>
                      <td className="border border-gray-300 px-4 py-2">Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.</td>
                      <td className="border border-gray-300 px-4 py-2">24 horas</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gat</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis</td>
                      <td className="border border-gray-300 px-4 py-2">Se utiliza para limitar el porcentaje de solicitudes.</td>
                      <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_fbp</td>
                      <td className="border border-gray-300 px-4 py-2">Marketing</td>
                      <td className="border border-gray-300 px-4 py-2">Utilizada por Facebook para proporcionar una serie de productos publicitarios como pujas en tiempo real de terceros anunciantes.</td>
                      <td className="border border-gray-300 px-4 py-2">3 meses</td>
                      <td className="border border-gray-300 px-4 py-2">Meta Pixel</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">cart_items</td>
                      <td className="border border-gray-300 px-4 py-2">Técnica</td>
                      <td className="border border-gray-300 px-4 py-2">Almacena los productos añadidos al carrito del usuario.</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">Crust & Click</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Técnica</td>
                      <td className="border border-gray-300 px-4 py-2">Identifica la sesión del usuario en el servidor.</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">Crust & Click</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">5. ¿Cómo puede gestionar las cookies?</h2>
              <p>
                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firefox</a></li>
                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
              </ul>
              <p className="mt-2">
                Si deshabilita las cookies, es posible que algunas de las funciones ofrecidas por nuestro sitio web no estén disponibles.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">6. Cambios en la Política de Cookies</h2>
              <p>
                Es posible que actualicemos nuestra Política de Cookies de vez en cuando. Le animamos a que revise esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-3">7. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Correo electrónico: info@crustandclick.com</li>
                <li>Dirección postal: Calle del Pan Artesano, 24, 28001 Madrid, España</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
