import { Building2, Link2, Smartphone } from "lucide-react";

export function BipHowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Building2,
      title: "Registro de residencia",
      description:
        "La residencia se registra en BipSenior y configura el perfil de cada residente con su equipo de cuidado.",
    },
    {
      number: "02",
      icon: Link2,
      title: "Conexión familiar",
      description:
        "Los familiares reciben una invitación para conectarse con el perfil de su ser querido de forma segura.",
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Seguimiento diario",
      description:
        "Empieza a recibir actualizaciones diarias, fotos, mensajes y notificaciones de salud en tiempo real.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Tan fácil como{" "}
            <span className="text-primary">1, 2, 3</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conectar a tu familia con la residencia nunca fue tan sencillo
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                    {/* Step number */}
                    <div className="absolute -top-4 left-8 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-lg">{step.number}</span>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/50">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector arrow - mobile only */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/20"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
