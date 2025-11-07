import { Activity, Bell, Camera, Heart, MessageCircle, Shield } from "lucide-react";
import { Card } from "./ui/card";

export function BipFeatures() {
  const features = [
    {
      icon: Activity,
      title: "Seguimiento diario",
      description:
        "Recibe actualizaciones en tiempo real sobre las actividades, comidas y cuidados de tu familiar.",
    },
    {
      icon: MessageCircle,
      title: "Comunicación directa",
      description:
        "Chat integrado con el equipo de la residencia para resolver dudas al instante.",
    },
    {
      icon: Bell,
      title: "Avisos de salud",
      description:
        "Notificaciones inmediatas sobre visitas médicas, medicación y estado de salud.",
    },
    {
      icon: Camera,
      title: "Fotografías del día",
      description:
        "Mira las fotos de las actividades y momentos especiales de tu ser querido.",
    },
    {
      icon: Heart,
      title: "Bienestar emocional",
      description:
        "Registros de estado de ánimo, participación social y satisfacción general.",
    },
    {
      icon: Shield,
      title: "Privacidad garantizada",
      description:
        "Datos cifrados y cumplimiento GDPR para la tranquilidad de toda la familia.",
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Todo lo que necesitas,{" "}
            <span className="text-primary">en una sola app</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenerse conectado con tus seres queridos nunca fue tan fácil y transparente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-white rounded-3xl"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
