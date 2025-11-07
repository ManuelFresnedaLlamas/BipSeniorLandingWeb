import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BipTestimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Hija de residente",
      image: "https://images.unsplash.com/photo-1543190203-c7911e0bd972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNlbmlvciUyMGZhbWlseXxlbnwxfHx8fDE3NjE2NDM3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "BipSenior me ha cambiado la vida. Vivo lejos de mi madre, pero ahora puedo ver qué hace cada día, hablar con sus cuidadores y sentirme mucho más tranquila. Es como estar ahí con ella.",
    },
    {
      name: "Carlos Ramírez",
      role: "Director de Residencia Los Olivos",
      image: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0b2dldGhlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxNjQzNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "Implementar BipSenior mejoró nuestra comunicación con las familias de forma increíble. Menos llamadas preocupadas, más confianza, y los familiares sienten que son parte activa del cuidado.",
    },
    {
      name: "Ana Martínez",
      role: "Nieta de residente",
      image: "https://images.unsplash.com/photo-1525336778665-96f9a12c5c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhvbWV8ZW58MXx8fHwxNzYxNTg2OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "Me encanta recibir fotos de mi abuelo en sus actividades. Ver su sonrisa cada día y saber que está bien cuidado me da una paz enorme. La mejor app que he descubierto.",
    },
  ];

  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Historias que nos{" "}
            <span className="text-primary">inspiran cada día</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de familias ya están más conectadas gracias a BipSenior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:shadow-xl transition-all duration-300 bg-white rounded-3xl relative"
            >
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
