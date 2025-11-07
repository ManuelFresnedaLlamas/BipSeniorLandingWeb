"use client";

import { motion } from "motion/react";
import { ArrowLeft, Linkedin, Mail, Heart, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutUsProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onGDPRClick?: () => void;
}

export function AboutUs({ onBack, onPrivacyClick, onTermsClick, onGDPRClick }: AboutUsProps) {
  const teamMembers = [
    {
      name: "Ana García Martínez",
      role: "CEO & Co-fundadora",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYyNDgzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Ingeniera de Telecomunicaciones con más de 12 años de experiencia en el sector salud digital. Anteriormente trabajó en soluciones de telemedicina en hospitales de referencia en Madrid. Ana fundó BipSenior tras vivir la experiencia de buscar residencia para su abuela y detectar la falta de herramientas digitales que facilitaran la comunicación entre familias y centros.",
      experience: [
        "Directora de Innovación Digital en Sanitas (2018-2021)",
        "Product Manager en Quirónsalud Digital (2015-2018)",
        "MBA por IE Business School",
        "Participante en el programa de aceleración de Google for Startups"
      ],
      linkedin: "#",
      email: "ana.garcia@bipsenior.com"
    },
    {
      name: "Carlos Rodríguez López",
      role: "CTO & Co-fundador",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjUwNTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Desarrollador Full Stack especializado en aplicaciones móviles y arquitecturas escalables. Con 10 años de experiencia en startups tecnológicas, Carlos ha liderado equipos de desarrollo en empresas de healthtech y fintech. Su pasión por crear productos que generen impacto social le llevó a cofundar BipSenior, donde lidera el desarrollo tecnológico de la plataforma.",
      experience: [
        "Lead Developer en Mediquo (2019-2022)",
        "Senior Software Engineer en Glovo (2016-2019)",
        "Ingeniero Informático por la Universidad Politécnica de Valencia",
        "Especialización en IA aplicada a Healthcare"
      ],
      linkedin: "#",
      email: "carlos.rodriguez@bipsenior.com"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Entendemos las necesidades de las familias porque las hemos vivido en primera persona."
    },
    {
      icon: Target,
      title: "Compromiso",
      description: "Trabajamos cada día para mejorar la calidad de vida de las personas mayores y sus familias."
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Creemos en la tecnología como herramienta para acercar a las personas, no para distanciarlas."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Aplicamos la última tecnología para resolver problemas reales del sector sociosanitario."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NewHeader onPrivacyPage={true} onBackClick={onBack} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Sobre nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Somos un equipo apasionado por mejorar la vida de las personas mayores y sus familias a través de la tecnología.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12 rounded-3xl border border-primary/10"
        >
          <h2 className="text-3xl text-foreground mb-6">Nuestra misión</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            En BipSenior creemos que la tecnología debe servir para acercar a las personas, especialmente cuando se trata del cuidado de nuestros mayores. Nuestro objetivo es crear un puente digital entre familias, residencias y cuidadores que facilite la comunicación, el seguimiento y, sobre todo, la tranquilidad.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nacimos de una necesidad real: la dificultad de encontrar información transparente sobre residencias y de mantener un seguimiento cercano del bienestar de nuestros seres queridos. Hoy trabajamos para que ninguna familia tenga que pasar por esa incertidumbre.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-muted/30 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-foreground mb-4">Nuestros valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo cada día
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-foreground mb-4">Nuestro equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a las personas detrás de BipSenior
          </p>
        </motion.div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="bg-gradient-to-br from-white to-muted/20 rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-8 p-8">
                {/* Image */}
                <div className="md:col-span-2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <h3 className="text-2xl text-foreground mb-2">{member.name}</h3>
                  <p className="text-lg text-primary mb-4">{member.role}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="bg-muted/30 rounded-xl p-4 mb-6">
                    <h4 className="text-sm text-foreground mb-3">Experiencia destacada</h4>
                    <ul className="space-y-2">
                      {member.experience.map((exp, expIndex) => (
                        <li key={expIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl text-foreground mb-4">¿Quieres formar parte del equipo?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos en búsqueda constante de personas apasionadas por la tecnología y el impacto social. Si quieres ayudarnos a mejorar la vida de miles de familias, ¡contáctanos!
            </p>
            <Button 
              onClick={() => window.location.href = "mailto:jobs@bipsenior.com"}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full px-8"
            >
              <Mail className="h-5 w-5 mr-2" />
              jobs@bipsenior.com
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <NewFooter 
        onPrivacyClick={onPrivacyClick}
        onTermsClick={onTermsClick}
        onGDPRClick={onGDPRClick}
      />
    </div>
  );
}
