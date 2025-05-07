import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Wheat, ChefHat, Timer, Flame, Truck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const HowWeWork: React.FC = () => {
  useEffect(() => {
    document.title = "Cómo trabajamos - Crust & Click";
  }, []);

  return (
    <div className="min-h-screen bg-bread-light py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-2xl md:text-3xl text-bread-dark uppercase tracking-wider mb-4">
          Cómo trabajamos
        </h1>
        <Separator className="max-w-[100px] mx-auto mb-12 bg-bread-accent/30" />

        <div className="space-y-20">
          {[
            {
              icon: <Wheat className="h-6 w-6 mr-2 text-bread-accent" />,
              title: "Selección de ingredientes",
              content: [
                "Trabajamos exclusivamente con ingredientes ecológicos certificados. Nuestras harinas provienen de molinos tradicionales que conservan todos los nutrientes del grano. Para nosotros, el origen y la calidad de la materia prima es el comienzo de un buen pan.",
                "Colaboramos con productores locales que comparten nuestra filosofía de respeto por la tierra y los métodos tradicionales de cultivo.",
              ],
            },
            {
              icon: <ChefHat className="h-6 w-6 mr-2 text-bread-accent" />,
              title: "Masa madre natural",
              content: [
                "Nuestra masa madre tiene más de cinco años y se alimenta diariamente con harina ecológica y agua filtrada. No utilizamos levaduras comerciales, lo que permite una fermentación lenta y natural que potencia los sabores y facilita la digestión.",
                "Cada fermento tiene su propio carácter, que cuidamos y preservamos para mantener esa identidad única en cada horneada.",
              ],
            },
            {
              icon: <Timer className="h-6 w-6 mr-2 text-bread-accent" />,
              title: "Tiempo y paciencia",
              content: [
                "Nuestras masas fermentan entre 16 y 24 horas. Este proceso lento permite desarrollar sabores complejos y texturas únicas que distinguen nuestro pan. La paciencia es esencial para que los almidones se transformen y las proteínas maduren adecuadamente.",
                "No tenemos prisa. El tiempo es nuestro aliado para conseguir un producto excepcional.",
              ],
            },
            {
              icon: <Flame className="h-6 w-6 mr-2 text-bread-accent" />,
              title: "Horneado tradicional",
              content: [
                "Cada pieza se hornea individualmente, prestando atención a su tiempo óptimo y temperatura ideal. Utilizamos hornos de piedra que distribuyen el calor homogéneamente, consiguiendo cortezas crujientes y migas alveoladas.",
                "El resultado es un pan con personalidad, donde cada pieza es única e irrepetible.",
              ],
            },
            {
              icon: <Truck className="h-6 w-6 mr-2 text-bread-accent" />,
              title: "Del obrador a tu mesa",
              content: [
                "Horneamos a diario para garantizar la máxima frescura. Nuestro sistema de pedidos online nos permite producir lo justo y necesario, minimizando el desperdicio y asegurando que cada cliente reciba un producto recién horneado.",
                "Creemos firmemente que el buen pan debe ser accesible a todos, por eso trabajamos para ofrecer un producto artesanal de la máxima calidad a un precio justo.",
              ],
            },
          ].map((section, i) => (
            <motion.section
              key={section.title}
              className="max-w-[800px] mx-auto text-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <h2 className="flex items-center font-serif uppercase text-lg md:text-xl mb-5 tracking-wide">
                {section.icon}
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="leading-relaxed text-bread-dark/80 mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </motion.section>
          ))}

          {/* Frase final y CTA */}
          <motion.div
            className="pt-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={5}
          >
            <p className="font-serif text-lg italic mb-10">
              "El pan es un alimento vivo que merece todo nuestro respeto y
              dedicación."
            </p>
            <Link
              to="/tienda"
              className="inline-block px-8 py-3 border border-bread-accent text-bread-accent hover:bg-bread-accent hover:text-white transition-colors rounded-md"
            >
              Ir a comprar
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
