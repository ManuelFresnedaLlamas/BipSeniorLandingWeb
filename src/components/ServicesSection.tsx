import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database,
  ArrowRight 
} from "lucide-react";
import { Button } from "./ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "IA & Machine Learning",
      description: "Implementamos soluciones de inteligencia artificial para automatizar procesos y mejorar la toma de decisiones.",
      features: ["Análisis predictivo", "Chatbots inteligentes", "Automatización de procesos"]
    },
    {
      icon: Cloud,
      title: "Migración a la Nube",
      description: "Migramos tu infraestructura a la nube para mayor escalabilidad, seguridad y eficiencia operacional.",
      features: ["AWS & Azure", "Arquitectura escalable", "Optimización de costos"]
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu negocio con estrategias avanzadas de seguridad y cumplimiento normativo.",
      features: ["Auditorías de seguridad", "Compliance", "Monitoreo 24/7"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transformamos tus datos en insights accionables con dashboards y análisis avanzados.",
      features: ["Dashboards interactivos", "Análisis de datos", "Reportes automatizados"]
    },
    {
      icon: Smartphone,
      title: "Desarrollo de Apps",
      description: "Creamos aplicaciones móviles y web personalizadas que impulsan el crecimiento de tu negocio.",
      features: ["Apps nativas", "Progressive Web Apps", "UX/UI optimizado"]
    },
    {
      icon: Database,
      title: "Consultoría de Datos",
      description: "Optimizamos la gestión y arquitectura de datos para maximizar el valor de tu información.",
      features: ["Arquitectura de datos", "Data warehousing", "ETL & pipelines"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos soluciones tecnológicas integrales para impulsar la transformación digital de tu empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Analizamos tu negocio y diseñamos la estrategia tecnológica perfecta para tus objetivos
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}