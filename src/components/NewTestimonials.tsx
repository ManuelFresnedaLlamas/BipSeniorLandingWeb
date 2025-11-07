"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewTestimonials() {
  const testimonials = [
    {
      name: "Elena Rodríguez",
      role: "Hija de residente · Madrid",
      avatar: "https://images.unsplash.com/photo-1543190203-c7911e0bd972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMGZhbWlseXxlbnwxfHx8fDE3NjE2NDM3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "BipSenior ha transformado completamente mi relación con la residencia de mi padre. Antes llamaba constantemente preocupada. Ahora veo cada día cómo está, qué hace, y me siento muchísimo más tranquila.",
      rating: 5,
    },
    {
      name: "Dr. Javier Martín",
      role: "Director · Residencia Los Pinos",
      avatar: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0b2dldGhlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxNjQzNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "La plataforma ha mejorado radicalmente nuestra comunicación con las familias. Menos malentendidos, más confianza, y los familiares se sienten parte activa del día a día de sus mayores.",
      rating: 5,
    },
    {
      name: "Carmen López",
      role: "Nieta de residente · Barcelona",
      avatar: "https://images.unsplash.com/photo-1626457610369-14df89c09fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdyYW5kbW90aGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjQ0MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "Ver las fotos de mi abuela sonriendo en sus actividades es lo mejor de mi día. La app es súper fácil de usar y me mantiene conectada con ella aunque viva en otra ciudad.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Lo que dicen nuestras{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              familias
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de personas que han encontrado tranquilidad con BipSenior
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative bg-white border-2 border-border rounded-3xl p-8 h-full flex flex-col hover:border-transparent transition-colors duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
