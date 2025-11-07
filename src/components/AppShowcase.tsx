"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function AppShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screens = [
    {
      image: "/images/c1d9c6e8d863ea278b82e4b2e34c4817001f85f4.png",
      title: "Menú Principal",
      description:
        "El corazón de BipSenior. Desde aquí puedes acceder a todas las funcionalidades: ver el estado de tu familiar, solicitar citas médicas, gestionar visitas, consultar el historial de actividades, y mucho más. Todo diseñado para una navegación intuitiva y rápida.",
    },
    {
      image: "/images/01030fc46e306ecd07d471cac919879bc41178d8.png",
      title: "Menú de Residencia",
      description:
        "Accede fácilmente a todas las funcionalidades: solicita citas médicas, servicios, visitas y consulta el historial de actividades de tu familiar.",
    },
    {
      image: "/images/774c68a073e0855bccd53be93ce8b3960cc83968.png",
      title: "Perfil del Familiar",
      description:
        "Toda la información importante en un solo lugar. Datos de contacto, dirección, y detalles actualizados siempre a tu alcance.",
    },
    {
      image: "/images/913aa48669ad0b2c902524bd82a6e7719f5a213c.png",
      title: "Historial de Citas Médicas",
      description:
        "Consulta el calendario completo de citas médicas y asistencias. Visualiza las fechas programadas y mantén un control total de la atención sanitaria.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Descubre{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              BipSenior
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una experiencia intuitiva y cercana para estar siempre conectado
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone mockup with carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative max-w-[380px]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl"></div>

                {/* App screenshot - already includes phone mockup */}
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={screens[currentSlide].image}
                    alt={screens[currentSlide].title}
                    width={380}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Navigation buttons */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full bg-white shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full bg-white shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-3xl sm:text-4xl text-foreground">
                  {screens[currentSlide].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {screens[currentSlide].description}
                </p>
              </motion.div>

              {/* Slide indicators */}
              <div className="flex gap-2 pt-4">
                {screens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-primary to-accent"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}