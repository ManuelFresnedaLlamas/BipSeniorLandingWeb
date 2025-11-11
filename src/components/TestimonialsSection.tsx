import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      content: "BipSenior transformó completamente nuestra infraestructura. Su equipo no solo migró nuestros sistemas a la nube, sino que también implementó soluciones de IA que aumentaron nuestra productividad en un 40%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendez",
      position: "CTO, InnovateCorp",
      company: "InnovateCorp", 
      content: "La consultoría en ciberseguridad que recibimos fue excepcional. Implementaron un sistema de seguridad robusto que nos ha protegido sin comprometer la usabilidad. Muy recomendados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Rodríguez",
      position: "Directora de Operaciones, RetailMax",
      company: "RetailMax",
      content: "El dashboard de Business Intelligence que desarrollaron nos permitió identificar oportunidades de negocio que antes no veíamos. El ROI fue inmediato y continúa creciendo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Silva",
      position: "Gerente General, LogisticaPro",
      company: "LogisticaPro",
      content: "Su enfoque en la automatización de procesos revolucionó nuestras operaciones. La app móvil que desarrollaron para nuestros conductores mejoró la eficiencia en un 35%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Casos de éxito reales de empresas que han transformado su negocio con nuestras soluciones
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Tasa de satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-blue-100">Países atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Soporte disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}