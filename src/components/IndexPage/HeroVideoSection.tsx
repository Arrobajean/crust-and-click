import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

interface Props {
  onScrollClick: () => void;
}

const HeroVideoSection: React.FC<Props> = ({ onScrollClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-bread-background">
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </Parallax>

      <div className="absolute inset-0 bg-bread-dark/60 z-10" />

      <div className="relative z-20 max-w-3xl text-center px-6">
        <motion.h1
          className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nuestro Pan Artesanal
        </motion.h1>
        <motion.p
          className="text-white/90 text-lg md:text-xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Elaborado con masa madre y fermentación lenta. El pan como antes,
          ahora.
        </motion.p>

        <motion.button
          onClick={onScrollClick}
          className="mt-12 mx-auto flex items-center justify-center w-12 h-12 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, 0, 20] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          aria-label="Ir a la tienda"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroVideoSection;
