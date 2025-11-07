"use client";

import { motion } from "motion/react";
import { Calendar, Newspaper, Award, Users, Presentation, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

export function NewsSection() {
  const news = [
    {
      icon: Sparkles,
      date: "13-14 Noviembre 2025",
      title: "BipSenior en WaykUp 2025",
      description:
        "¡Nos vemos en WaykUp 2025! BipSenior estará presente los días 13 y 14 de noviembre en Murcia. Ven a descubrir cómo estamos transformando la conexión entre familias y residencias.",
      image: "/images/a6d6952897e5f331fa016adba7c95e18eb9ba6aa.png",
      tag: "Próximo evento",
    },
    {
      icon: Award,
      date: "15 Octubre 2024",
      title: "BipSenior seleccionada en el programa de aceleración de startups",
      description:
        "Hemos sido seleccionados para participar en el prestigioso programa de aceleración de startups de salud digital, donde recibiremos mentoría y recursos para escalar nuestra plataforma.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc2MTY0NDAzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Logro",
    },
    {
      icon: Users,
      date: "1 Septiembre 2024",
      title: "Primeras 5 residencias se unen al programa piloto",
      description:
        "Comenzamos nuestro programa piloto con 5 residencias de ancianos en Madrid, conectando a más de 200 familias con sus seres queridos de manera digital y cercana.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhvbWV8ZW58MXx8fHwxNzYxNjQ0MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Milestone",
    },
    {
      icon: Newspaper,
      date: "10 Julio 2024",
      title: "BipSenior lanza su plataforma",
      description:
        "Después de meses de desarrollo y pruebas, lanzamos oficialmente nuestra plataforma. Una solución que revolucionará la forma en que las familias se conectan con las residencias.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE2MDU3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Producto",
    },
    {
      icon: Presentation,
      date: "21 Octubre 2022",
      title: "BipSenior en la feria WIP",
      description:
        "BipSenior estuvo presente en la feria Work In Progress (WIP) en la Facultad de Economía de la Universidad de Murcia, presentando nuestra visión para transformar el cuidado de los mayores.",
      image: "/images/dc1adf5708809414b6978f1e55c6830fc4634a48.png",
      tag: "Evento",
    },
  ];

  return (
    <section id="noticias" className="py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Últimas{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              noticias
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con los hitos más importantes de BipSenior
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                    {typeof item.image === 'string' && item.image.startsWith('http') ? (
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-foreground border border-border">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time>{item.date}</time>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-foreground mb-2 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
