"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import estadoFamiliarImage from "figma:asset/c1d9c6e8d863ea278b82e4b2e34c4817001f85f4.png";

export function NewHero() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-sm text-foreground">Disponible próximamente</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
              Conecta con tus{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                seres queridos
              </span>
              {" "}cada día
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              La plataforma que une familias, residencias y cuidadores. Fotos, actualizaciones y tranquilidad al instante.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full px-8 h-14 gap-3 shadow-xl shadow-primary/25"
              >
                <span>Solicitar información</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-[380px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl"></div>
              
              {/* App screenshot - already includes phone mockup */}
              <div className="relative">
                <img
                  src={estadoFamiliarImage}
                  alt="BipSenior App - Estado Familiar"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating notification cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-4 lg:-left-16 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-border max-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Nueva foto</div>
                    <div className="text-sm text-foreground">Actividad matutina</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 lg:-right-16 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 border border-border max-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0"></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Actualización</div>
                    <div className="text-sm text-foreground">Todo va genial 💚</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}