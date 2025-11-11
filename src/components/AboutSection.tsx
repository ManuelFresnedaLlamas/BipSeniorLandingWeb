import { Button } from "./ui/button";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const achievements = [
    "Más de 500 proyectos exitosos completados",
    "Equipo de 50+ especialistas certificados",
    "Presencia en 15 países de Latinoamérica",
    "Reconocimientos por innovación tecnológica"
  ];

  const values = [
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos como una extensión de tu equipo"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Estándares de calidad internacionales"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Enfocados en el impacto real en tu negocio"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sobre BipSenior
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una consultoría de tecnología que combina expertise técnico con metodologías 
                innovadoras para acelerar la transformación digital de las empresas.
              </p>
              <p className="text-gray-600 mb-8">
                Nuestro enfoque único integra principios de neurociencia aplicada con las últimas 
                tecnologías para crear soluciones que no solo funcionan, sino que transforman 
                la manera en que las organizaciones operan y crecen.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Conoce nuestro equipo
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzU2ODUzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipo BipSenior"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-600/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}