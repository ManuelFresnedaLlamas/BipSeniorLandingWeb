"use client";

import { motion } from "motion/react";
import { Bell, Calendar, MessageCircle, Shield, Camera, FileText } from "lucide-react";
import careImage from "figma:asset/e8324143d1eaa9da60644dec08da546dd636a6b4.png";

export function NewFeatures() {
  const features = [
    {
      icon: Camera,
      title: "Momentos que importan",
      description:
        "Recibe fotos de las actividades diarias, eventos especiales y momentos felices de tu familiar en la residencia. Mantente conectado visualmente cada día.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Bell,
      title: "Notificaciones en tiempo real",
      description:
        "Recibe notificaciones instantáneas sobre comidas, medicación, visitas médicas y cualquier cambio importante. Tranquilidad al instante, estés donde estés.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Calendar,
      title: "Gestión de citas y visitas",
      description:
        "Solicita citas médicas, servicios especiales y visitas al centro directamente desde la app. Todo el proceso simplificado en un solo lugar.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: MessageCircle,
      title: "Comunicación directa",
      description:
        "Chatea con el equipo de cuidadores, haz preguntas y recibe respuestas al instante. Una línea directa con quienes cuidan de tu ser querido.",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      icon: FileText,
      title: "Historial completo",
      description:
        "Accede al historial completo de actividades, medicación y cuidados. Toda la información organizada y disponible cuando la necesites.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Shield,
      title: "Privacidad garantizada",
      description:
        "Datos cifrados de extremo a extremo. Cumplimiento total con GDPR y normativas de protección de datos. Tu información siempre segura.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section id="caracteristicas" className="py-32 bg-gradient-to-b from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Diseñado para la{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              tranquilidad familiar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas las herramientas que necesitas para sentirte cerca, sin importar la distancia
          </p>
        </motion.div>

        {/* Care Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={careImage}
                alt="Cuidado profesional BipSenior"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
