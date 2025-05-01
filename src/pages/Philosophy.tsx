
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Wheat, Clock } from 'lucide-react';

const Philosophy: React.FC = () => {
  useEffect(() => {
    document.title = 'Nuestra Filosofía - Crust & Click';
    window.scrollTo(0, 0);
  }, []);

  // Animation variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-bread-light">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-bread-dark/30 z-10" />
        <div className="relative z-20 max-w-3xl text-center px-6">
          <motion.h1 
            className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            El pan como poesía diaria
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg md:text-xl italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "En cada miga, un universo de sabor y tradición. En cada corteza, el tiempo y el amor convertidos en arte."
          </motion.p>
        </div>
      </section>

      {/* Philosophy Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Section 1: Time */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-6">
            <Clock className="h-6 w-6 mr-2 text-bread-accent" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">El tiempo como ingrediente</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <p className="text-lg mb-6 leading-relaxed">
                En Crust & Click, el tiempo no es algo que ahorramos, sino que invertimos. Nuestras masas fermentan entre 24 y 48 horas, un proceso lento que permite desarrollar aromas complejos y sabores profundos que no se pueden conseguir con métodos industriales.
              </p>
              <p className="text-lg leading-relaxed">
                Esta paciencia es esencial en nuestra filosofía. Dejamos que la naturaleza haga su trabajo, que las enzimas transformen los almidones y que las levaduras silvestres aporten su carácter único a cada pieza que sale de nuestro horno.
              </p>
              
              <blockquote className="border-l-4 border-bread-accent pl-6 italic my-8 text-xl text-gray-700">
                "La prisa es enemiga del buen pan. El tiempo es nuestro aliado más valioso."
              </blockquote>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="md:col-span-2 h-[400px] md:h-auto relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Proceso de fermentación del pan" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 2: Mother Dough */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-6">
            <Wheat className="h-6 w-6 mr-2 text-bread-accent" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Nuestra masa madre</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <motion.div 
              variants={fadeInUp} 
              className="md:col-span-2 md:order-2 h-[400px] md:h-auto relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Nuestra masa madre" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-3 md:order-1">
              <p className="text-lg mb-6 leading-relaxed">
                La base de nuestro pan es una masa madre cultivada naturalmente, alimentada diariamente y cuidada como un tesoro familiar. Tiene más de diez años de historia y contiene microorganismos únicos de nuestro entorno que le dan al pan ese sabor característico que no encontrarás en otro lugar.
              </p>
              <p className="text-lg leading-relaxed">
                Rechazamos el uso de levaduras comerciales y aditivos artificiales. Nuestra masa madre, harina de origen ecológico, agua, sal marina y tiempo son los únicos ingredientes que necesitamos para crear pan excepcional.
              </p>
              <blockquote className="border-l-4 border-bread-accent pl-6 italic my-8 text-xl text-gray-700">
                "Una masa madre es un ser vivo con personalidad propia, que evoluciona y madura con los años."
              </blockquote>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 3: Hands */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={fadeInUp} className="flex items-center mb-6">
            <ChefHat className="h-6 w-6 mr-2 text-bread-accent" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Manos que amasan historia</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <p className="text-lg mb-6 leading-relaxed">
                Cada pieza de pan es formada a mano por nuestros maestros panaderos, respetando los ritmos naturales de la masa. Esta atención artesanal permite ajustar el proceso según las condiciones del día: temperatura, humedad, comportamiento de la masa madre.
              </p>
              <p className="text-lg leading-relaxed">
                Somos artesanos que combinan conocimientos antiguos con técnicas modernas, siempre priorizando la calidad y el respeto por la tradición panadera que ha alimentado a generaciones.
              </p>
              <p className="text-lg mt-6 leading-relaxed">
                Porque para nosotros, el pan no es solo un alimento, es una forma de vida y una conexión con nuestra historia colectiva como seres humanos.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="md:col-span-2 h-[400px] md:h-auto relative overflow-hidden rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Manos amasando pan" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Philosophy;
