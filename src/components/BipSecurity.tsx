import { Check, Lock, Shield, UserCheck } from "lucide-react";
import { Card } from "./ui/card";

export function BipSecurity() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Cumplimiento GDPR",
      description:
        "Cumplimos con todas las regulaciones europeas de protección de datos personales.",
    },
    {
      icon: Lock,
      title: "Cifrado de extremo a extremo",
      description:
        "Todas las comunicaciones y datos están cifrados con estándares bancarios.",
    },
    {
      icon: UserCheck,
      title: "Verificación de identidad",
      description:
        "Sistema robusto de verificación para garantizar que solo familiares autorizados accedan.",
    },
  ];

  const certifications = [
    "ISO 27001 Certificado",
    "GDPR Compliant",
    "Auditoría de seguridad anual",
    "Servidores en Europa",
    "Backup diario encriptado",
    "Control de acceso multinivel",
  ];

  return (
    <section id="seguridad" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
            <Shield className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Tu privacidad es{" "}
            <span className="text-secondary">nuestra prioridad</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con los más altos estándares de seguridad para proteger la información de tu familia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 border-border bg-gradient-to-br from-white to-secondary/5 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10">
                    <Icon className="h-7 w-7 text-secondary" />
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

        <Card className="p-8 sm:p-12 border-border bg-gradient-to-br from-muted/30 to-white rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl text-foreground">
                Certificaciones y garantías
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nos tomamos muy en serio la seguridad de los datos de salud y personales. Por eso cumplimos con las normativas más exigentes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
