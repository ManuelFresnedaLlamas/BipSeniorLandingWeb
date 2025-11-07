"use client";

import { motion } from "motion/react";
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";

interface GDPRProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

export function GDPR({ onBack, onPrivacyClick, onTermsClick }: GDPRProps) {
  const principles = [
    {
      icon: Shield,
      title: "Licitud y Transparencia",
      description: "Procesamos sus datos de forma lícita, leal y transparente, informándole en todo momento del tratamiento."
    },
    {
      icon: FileText,
      title: "Limitación de Finalidad",
      description: "Recogemos datos para fines específicos, explícitos y legítimos, sin tratamientos posteriores incompatibles."
    },
    {
      icon: Users,
      title: "Minimización de Datos",
      description: "Solicitamos únicamente los datos necesarios, adecuados y pertinentes para los fines del tratamiento."
    },
    {
      icon: Eye,
      title: "Exactitud",
      description: "Mantenemos sus datos exactos y actualizados, permitiéndole corregirlos en cualquier momento."
    },
    {
      icon: Lock,
      title: "Limitación de Conservación",
      description: "Conservamos sus datos solo durante el tiempo necesario para los fines del tratamiento."
    },
    {
      icon: Bell,
      title: "Integridad y Confidencialidad",
      description: "Aplicamos medidas técnicas y organizativas para garantizar la seguridad de sus datos."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NewHeader onPrivacyPage={true} onBackClick={onBack} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>

          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl sm:text-5xl text-foreground mb-4">
              Cumplimiento del RGPD
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reglamento General de Protección de Datos
            </p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <p>
                  En BipSenior estamos comprometidos con la protección de sus datos personales y con el cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), así como de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
                </p>
              </section>

              {/* Principles Cards */}
              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-6">
                  Principios del Tratamiento de Datos
                </h2>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-muted/30 to-white p-6 rounded-2xl border border-border"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                            <p className="text-sm text-muted-foreground">{principle.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Responsable del Tratamiento
                </h2>
                <div className="bg-muted/30 p-6 rounded-xl border border-border not-prose">
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold text-foreground">Identidad:</dt>
                      <dd className="text-muted-foreground">Bip Senior</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Dirección:</dt>
                      <dd className="text-muted-foreground">Avda. Andrés Hernandez Ros, 30107 Murcia</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Email de contacto:</dt>
                      <dd><a href="mailto:bip@bipsenior.com" className="text-primary hover:underline">bip@bipsenior.com</a></dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Sitio web:</dt>
                      <dd><a href="https://bipsenior.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bipsenior.com</a></dd>
                    </div>
                  </dl>
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Bases Legales del Tratamiento
                </h2>
                <p>
                  El tratamiento de sus datos personales se fundamenta en las siguientes bases jurídicas conforme al artículo 6 del RGPD:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg text-foreground mb-2">Ejecución de un contrato</h3>
                    <p>
                      El tratamiento es necesario para la ejecución del contrato de prestación de servicios entre usted y BipSenior, así como para la adopción de medidas precontractuales a petición del interesado.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg text-foreground mb-2">Consentimiento</h3>
                    <p>
                      Para determinados tratamientos, especialmente aquellos relacionados con datos de salud (categorías especiales de datos según el artículo 9 RGPD), obtenemos su consentimiento explícito y específico.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg text-foreground mb-2">Interés legítimo</h3>
                    <p>
                      Para fines como la mejora de nuestros servicios, análisis de uso de la plataforma y seguridad, basándonos en nuestro interés legítimo, siempre que no prevalezcan sus derechos e intereses.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-lg text-foreground mb-2">Cumplimiento legal</h3>
                    <p>
                      Para cumplir con obligaciones legales aplicables, como la conservación de datos fiscales y contables.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Categorías de Datos Tratados
                </h2>
                <p>BipSenior puede tratar las siguientes categorías de datos personales:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Datos identificativos:</strong> Nombre, apellidos, DNI/NIE, fecha de nacimiento, fotografía</li>
                  <li><strong>Datos de contacto:</strong> Dirección postal, teléfono, correo electrónico</li>
                  <li><strong>Datos económicos:</strong> Datos bancarios, información de facturación</li>
                  <li><strong>Datos de navegación:</strong> Dirección IP, cookies, datos de uso de la plataforma</li>
                  <li><strong>Datos de salud (categoría especial):</strong> Estado de salud, medicación, historial médico, actividad física, patrones de sueño, datos nutricionales - tratados con su consentimiento explícito</li>
                  <li><strong>Datos de geolocalización:</strong> Ubicación de residencias y servicios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Derechos del Interesado
                </h2>
                <p>
                  Como titular de los datos, usted dispone de los siguientes derechos conforme al RGPD:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6 not-prose">
                  {[
                    { title: "Acceso", desc: "Obtener información sobre qué datos tratamos sobre usted" },
                    { title: "Rectificación", desc: "Corregir datos inexactos o incompletos" },
                    { title: "Supresión", desc: "Solicitar la eliminación de sus datos (derecho al olvido)" },
                    { title: "Oposición", desc: "Oponerse al tratamiento de sus datos" },
                    { title: "Limitación", desc: "Solicitar la limitación del tratamiento" },
                    { title: "Portabilidad", desc: "Recibir sus datos en formato estructurado y transmitirlos a otro responsable" },
                    { title: "Revocación", desc: "Retirar el consentimiento prestado en cualquier momento" },
                    { title: "Reclamación", desc: "Presentar reclamación ante la Agencia Española de Protección de Datos" }
                  ].map((right, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-border">
                      <h3 className="font-semibold text-foreground mb-2">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                  <h3 className="text-lg text-foreground mb-3">¿Cómo ejercer sus derechos?</h3>
                  <p>
                    Para ejercer cualquiera de estos derechos, puede dirigirse a nosotros mediante:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-3">
                    <li>Correo electrónico: <a href="mailto:bip@bipsenior.com" className="text-primary hover:underline">bip@bipsenior.com</a></li>
                    <li>Correo postal: Avda. Andrés Hernandez Ros, 30107 Murcia</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    Deberá acreditar su identidad mediante copia de DNI u documento equivalente. Le responderemos en un plazo máximo de 1 mes desde la recepción de su solicitud, prorrogable 2 meses adicionales en caso de complejidad.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Destinatarios de los Datos
                </h2>
                <p>
                  Sus datos personales podrán ser comunicados a:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Residencias y cuidadores:</strong> Cuando usted autoriza expresamente la compartición de información para la prestación de servicios de cuidado</li>
                  <li><strong>Proveedores de servicios:</strong> Empresas que prestan servicios en nuestro nombre (hosting, servicios de pago, comunicaciones), siempre bajo acuerdos de confidencialidad y cumplimiento del RGPD</li>
                  <li><strong>Autoridades públicas:</strong> Cuando sea requerido por ley o por orden judicial</li>
                  <li><strong>Terceros con su consentimiento:</strong> Solo cuando usted haya dado su autorización expresa</li>
                </ul>
                <p className="mt-4">
                  No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE). En caso de que en el futuro esto cambie, le informaremos y aplicaremos las garantías adecuadas previstas en el RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Plazo de Conservación
                </h2>
                <p>
                  Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Datos de cuenta activa:</strong> Mientras mantenga su cuenta activa y utilice nuestros servicios</li>
                  <li><strong>Datos contractuales:</strong> Durante la vigencia del contrato y hasta 6 años después de su finalización (por obligaciones fiscales y contables)</li>
                  <li><strong>Datos de salud:</strong> Según normativa sanitaria aplicable o hasta que revoque su consentimiento</li>
                  <li><strong>Datos de marketing:</strong> Hasta que retire su consentimiento</li>
                </ul>
                <p className="mt-4">
                  Transcurridos los plazos aplicables, procederemos a la supresión segura de los datos o a su anonimización para fines estadísticos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Medidas de Seguridad
                </h2>
                <p>
                  BipSenior ha implementado las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Cifrado de datos en tránsito y en reposo (SSL/TLS)</li>
                  <li>Sistemas de autenticación robustos y gestión de contraseñas seguras</li>
                  <li>Control de acceso basado en roles y principio de mínimo privilegio</li>
                  <li>Copias de seguridad periódicas y plan de recuperación ante desastres</li>
                  <li>Auditorías de seguridad y evaluaciones de impacto regulares</li>
                  <li>Formación continua del personal en protección de datos</li>
                  <li>Procedimientos de notificación de brechas de seguridad</li>
                  <li>Protección contra malware y sistemas de detección de intrusos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Protección de Datos desde el Diseño
                </h2>
                <p>
                  BipSenior aplica los principios de protección de datos desde el diseño y por defecto (Privacy by Design y Privacy by Default):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Minimización de datos en todas las funcionalidades</li>
                  <li>Configuraciones de privacidad restrictivas por defecto</li>
                  <li>Transparencia en el tratamiento mediante información clara y accesible</li>
                  <li>Herramientas para que los usuarios gestionen sus propios datos</li>
                  <li>Evaluaciones de impacto de protección de datos (EIPD) para tratamientos de alto riesgo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Decisiones Automatizadas y Elaboración de Perfiles
                </h2>
                <p>
                  En BipSenior no tomamos decisiones basadas únicamente en el tratamiento automatizado que produzcan efectos jurídicos o le afecten significativamente.
                </p>
                <p className="mt-4">
                  Podemos elaborar perfiles comerciales basados en su uso de la plataforma para mejorar nuestros servicios y personalizar su experiencia, pero siempre con su consentimiento y sin consecuencias legales o significativas para usted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Menores de Edad
                </h2>
                <p>
                  BipSenior requiere que los usuarios sean mayores de 18 años para crear una cuenta. No recopilamos intencionadamente datos de menores de edad.
                </p>
                <p className="mt-4">
                  En el caso de que los datos personales tratados correspondan a personas mayores bajo tutela o que carezcan de capacidad de obrar, quien registra estos datos debe acreditar tener la representación legal o autorización adecuada para proceder al registro y tratamiento de dichos datos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Autoridad de Control
                </h2>
                <p>
                  La autoridad de control competente en España es la Agencia Española de Protección de Datos (AEPD):
                </p>
                <div className="bg-muted/30 p-6 rounded-xl border border-border not-prose mt-4">
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold text-foreground">Agencia Española de Protección de Datos</dt>
                      <dd className="text-muted-foreground mt-1">C/ Jorge Juan, 6</dd>
                      <dd className="text-muted-foreground">28001 Madrid</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Web:</dt>
                      <dd><a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a></dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Sede electrónica:</dt>
                      <dd><a href="https://sedeagpd.gob.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sedeagpd.gob.es</a></dd>
                    </div>
                  </dl>
                </div>
                <p className="mt-4">
                  Usted tiene derecho a presentar una reclamación ante la AEPD si considera que el tratamiento de sus datos personales infringe el RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  Actualizaciones de esta Información
                </h2>
                <p>
                  Esta información sobre el cumplimiento del RGPD puede ser actualizada periódicamente para reflejar cambios en nuestras prácticas de tratamiento de datos o en la normativa aplicable. Le recomendamos revisar esta página regularmente.
                </p>
                <p className="mt-4">
                  La fecha de la última actualización se indica al inicio de este documento.
                </p>
              </section>

              <section className="border-t border-border pt-8 mt-12">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20">
                  <h3 className="text-xl text-foreground mb-4">Compromiso de BipSenior</h3>
                  <p>
                    En BipSenior, la protección de sus datos personales es una prioridad. Estamos comprometidos con la transparencia, la seguridad y el respeto de sus derechos. Si tiene alguna pregunta o inquietud sobre cómo tratamos sus datos, no dude en contactarnos en{" "}
                    <a href="mailto:bip@bipsenior.com" className="text-primary hover:underline font-semibold">bip@bipsenior.com</a>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <NewFooter 
        onPrivacyClick={onPrivacyClick}
        onTermsClick={onTermsClick}
      />
    </div>
  );
}