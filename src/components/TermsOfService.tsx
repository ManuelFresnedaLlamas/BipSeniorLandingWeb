"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";

interface TermsOfServiceProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
  onGDPRClick?: () => void;
}

export function TermsOfService({ onBack, onPrivacyClick, onGDPRClick }: TermsOfServiceProps) {
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
            <h1 className="text-4xl sm:text-5xl text-foreground mb-8">
              Términos y Condiciones de Uso
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <p className="text-sm italic">
                  Última actualización: Noviembre 2025
                </p>
                <p>
                  Bienvenido a BipSenior. Estos Términos y Condiciones de Uso ("Términos") regulan el acceso y uso de la plataforma BipSenior, tanto a través de su sitio web bipsenior.com como de su aplicación móvil (en adelante, la "Plataforma"), proporcionada por Bip Senior, con domicilio en Avda. Andrés Hernandez Ros, 30107 Murcia (en adelante, "BipSenior", "nosotros" o "la Empresa").
                </p>
                <p>
                  Al acceder y utilizar nuestra Plataforma, usted acepta estos Términos en su totalidad. Si no está de acuerdo con alguna parte de estos Términos, le rogamos que no utilice nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  1. Objeto y Ámbito de Aplicación
                </h2>
                <p>
                  BipSenior es una plataforma digital que facilita la conexión entre familias y residencias de ancianos y cuidadores profesionales, permitiendo el seguimiento del bienestar de las personas mayores. Nuestros servicios incluyen, entre otros:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Búsqueda y localización de residencias de ancianos y servicios de cuidado</li>
                  <li>Gestión de perfiles de familiares y personas mayores</li>
                  <li>Seguimiento del estado de salud y bienestar</li>
                  <li>Historial de citas médicas y eventos relevantes</li>
                  <li>Sistema de comunicación entre familias, residencias y cuidadores</li>
                  <li>Registro de actividades, medicación y otros datos de cuidado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  2. Registro y Cuenta de Usuario
                </h2>
                <h3 className="text-xl text-foreground mt-8 mb-3">2.1 Requisitos</h3>
                <p>
                  Para utilizar determinadas funcionalidades de la Plataforma, deberá crear una cuenta de usuario. Al registrarse, usted declara y garantiza que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Es mayor de 18 años o tiene capacidad legal para contratar</li>
                  <li>Toda la información proporcionada es veraz, exacta y completa</li>
                  <li>Mantendrá actualizada su información de registro</li>
                  <li>No creará más de una cuenta personal</li>
                  <li>No compartirá su cuenta con terceros</li>
                </ul>

                <h3 className="text-xl text-foreground mt-8 mb-3">2.2 Seguridad de la Cuenta</h3>
                <p>
                  Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que se realicen a través de su cuenta. Debe notificar inmediatamente a BipSenior cualquier uso no autorizado de su cuenta enviando un correo electrónico a <a href="mailto:bip@bipsenior.com" className="text-primary hover:underline">bip@bipsenior.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  3. Uso Aceptable de la Plataforma
                </h2>
                <h3 className="text-xl text-foreground mt-8 mb-3">3.1 Conducta Permitida</h3>
                <p>
                  Los usuarios pueden utilizar la Plataforma exclusivamente para los fines previstos y de manera lícita, respetando los presentes Términos, la legislación vigente y las buenas costumbres.
                </p>

                <h3 className="text-xl text-foreground mt-8 mb-3">3.2 Conducta Prohibida</h3>
                <p>Queda expresamente prohibido:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información falsa, inexacta o engañosa</li>
                  <li>Suplantar la identidad de otra persona o entidad</li>
                  <li>Utilizar la Plataforma para fines ilegales o no autorizados</li>
                  <li>Interferir o interrumpir el funcionamiento de la Plataforma</li>
                  <li>Intentar acceder a áreas restringidas o datos de otros usuarios</li>
                  <li>Reproducir, duplicar, copiar o revender cualquier parte de la Plataforma sin autorización</li>
                  <li>Realizar ingeniería inversa, descompilar o desensamblar la Plataforma</li>
                  <li>Transmitir virus, malware o cualquier código malicioso</li>
                  <li>Acosar, amenazar o difamar a otros usuarios</li>
                  <li>Recopilar información de otros usuarios sin su consentimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  4. Datos de Salud y Confidencialidad
                </h2>
                <p>
                  BipSenior puede procesar datos especialmente protegidos, incluyendo datos de salud de las personas mayores. El tratamiento de estos datos se realiza conforme a la normativa vigente en materia de protección de datos (RGPD y LOPDGDD).
                </p>
                <p>
                  Al utilizar la Plataforma para registrar información de salud, usted:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Garantiza tener autorización legal para proporcionar dicha información</li>
                  <li>Acepta que BipSenior procese estos datos conforme a nuestra Política de Privacidad</li>
                  <li>Comprende que es responsable de la exactitud de los datos introducidos</li>
                  <li>Acepta que estos datos puedan ser compartidos con las residencias y cuidadores autorizados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  5. Propiedad Intelectual
                </h2>
                <p>
                  Todos los derechos de propiedad intelectual e industrial sobre la Plataforma, su código fuente, diseño, estructura de navegación, bases de datos y los distintos elementos contenidos en ella son titularidad de BipSenior o de sus licenciantes.
                </p>
                <p>
                  Los logos, marcas, nombres comerciales y demás signos distintivos son propiedad de BipSenior. El acceso a la Plataforma no otorga a los usuarios derecho alguno sobre dichos elementos.
                </p>
                <p>
                  Está prohibida la reproducción, distribución, modificación, cesión o comunicación pública del contenido de la Plataforma sin la autorización previa y por escrito de BipSenior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  6. Servicios de Terceros
                </h2>
                <p>
                  BipSenior actúa como plataforma de conexión entre familias, residencias y cuidadores, pero no es responsable directo de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La calidad de los servicios prestados por las residencias o cuidadores</li>
                  <li>Las relaciones contractuales entre usuarios y proveedores de servicios</li>
                  <li>Los daños derivados de la actuación de terceros contactados a través de la Plataforma</li>
                  <li>La veracidad de la información proporcionada por residencias o cuidadores registrados</li>
                </ul>
                <p>
                  Recomendamos a los usuarios realizar su propia diligencia debida antes de contratar cualquier servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  7. Tarifas y Pagos
                </h2>
                <p>
                  Determinadas funcionalidades de la Plataforma pueden estar sujetas al pago de tarifas. BipSenior se reserva el derecho de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modificar las tarifas con un preaviso mínimo de 30 días</li>
                  <li>Ofrecer promociones temporales</li>
                  <li>Introducir nuevos servicios de pago</li>
                </ul>
                <p>
                  Los pagos se procesarán a través de pasarelas de pago seguras. BipSenior no almacena información completa de tarjetas de crédito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  8. Limitación de Responsabilidad
                </h2>
                <p>
                  BipSenior proporciona la Plataforma "tal cual" y no garantiza que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El servicio será ininterrumpido o libre de errores</li>
                  <li>Los resultados obtenidos serán exactos o fiables</li>
                  <li>La Plataforma estará libre de virus o componentes dañinos</li>
                </ul>
                <p>
                  BipSenior no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de la Plataforma.
                </p>
                <p className="font-semibold text-foreground">
                  Importante: BipSenior no proporciona servicios médicos ni sustituye el consejo profesional de médicos o especialistas. La información en la Plataforma tiene fines informativos y de seguimiento, no diagnósticos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  9. Modificaciones de los Términos
                </h2>
                <p>
                  BipSenior se reserva el derecho a modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en la Plataforma. El uso continuado de la Plataforma tras la publicación de cambios constituirá su aceptación de los nuevos Términos.
                </p>
                <p>
                  Le recomendamos revisar periódicamente estos Términos. En caso de cambios sustanciales, le notificaremos por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  10. Suspensión y Terminación
                </h2>
                <p>
                  BipSenior se reserva el derecho de suspender o cancelar su acceso a la Plataforma, temporal o permanentemente, sin previo aviso, en caso de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Incumplimiento de estos Términos</li>
                  <li>Conducta fraudulenta o ilegal</li>
                  <li>Solicitud de autoridades competentes</li>
                  <li>Riesgo para la seguridad de la Plataforma o sus usuarios</li>
                </ul>
                <p>
                  Usted puede cancelar su cuenta en cualquier momento contactando con <a href="mailto:bip@bipsenior.com" className="text-primary hover:underline">bip@bipsenior.com</a>. La cancelación no le exime de las obligaciones contraídas previamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  11. Ley Aplicable y Jurisdicción
                </h2>
                <p>
                  Estos Términos se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de la Plataforma, las partes se someten a los juzgados y tribunales de Murcia, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
                </p>
                <p>
                  Sin perjuicio de lo anterior, los usuarios consumidores podrán presentar sus reclamaciones ante las plataformas de resolución de litigios en línea que establece la normativa europea, accesibles en{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-foreground mt-12 mb-4">
                  12. Contacto
                </h2>
                <p>
                  Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactar con nosotros a través de:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:bip@bipsenior.com" className="text-primary hover:underline">bip@bipsenior.com</a></li>
                  <li><strong>Dirección:</strong> Avda. Andrés Hernandez Ros, 30107 Murcia</li>
                  <li><strong>Web:</strong> <a href="https://bipsenior.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bipsenior.com</a></li>
                </ul>
              </section>

              <section className="border-t border-border pt-8 mt-12">
                <p className="text-sm italic text-center">
                  Al utilizar BipSenior, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <NewFooter onPrivacyClick={onPrivacyClick} onGDPRClick={onGDPRClick} />
    </div>
  );
}