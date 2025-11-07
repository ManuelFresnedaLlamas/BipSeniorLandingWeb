"use client";

import { motion } from "motion/react";
import { Heart, Users, Star, Building2 } from "lucide-react";

export function NewStats() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Familias conectadas",
      description: "en toda España",
    },
    {
      icon: Building2,
      value: "200+",
      label: "Residencias activas",
      description: "y creciendo cada día",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Valoración media",
      description: "en App Store y Google Play",
    },
    {
      icon: Heart,
      value: "1M+",
      label: "Momentos compartidos",
      description: "entre familias y residencias",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Confianza que habla por sí sola
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Miles de familias ya están más tranquilas gracias a BipSenior
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl text-white mb-2">{stat.value}</div>
                <div className="text-xl text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
