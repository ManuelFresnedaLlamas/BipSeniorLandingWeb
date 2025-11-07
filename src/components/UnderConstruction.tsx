"use client";

import { motion } from "motion/react";
import { ArrowLeft, Hammer, Sparkles, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface UnderConstructionProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onGDPRClick?: () => void;
  title?: string;
  description?: string;
}

export function UnderConstruction({ 
  onBack, 
  onPrivacyClick, 
  onTermsClick, 
  onGDPRClick,
  title = "Blog",
  description = "Estamos trabajando en traerte contenido de valor sobre el cuidado de personas mayores, consejos para familias, y novedades del sector."
}: UnderConstructionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("¡Perfecto! Te notificaremos cuando esté listo", {
        description: `Enviaremos un email a ${email}`
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NewHeader onPrivacyPage={true} onBackClick={onBack} />

      {/* Content */}
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-2xl w-full text-center">
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

            {/* Icon Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="relative inline-block mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto">
                  <Hammer className="h-16 w-16 text-primary" />
                </div>
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <div className="bg-gradient-to-br from-accent to-primary p-2 rounded-xl">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl text-foreground mb-6">
                {title}
              </h1>
              <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
                <p className="text-sm text-primary">🚧 En construcción</p>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Notify Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-muted/30 to-white p-8 rounded-2xl border border-border max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-primary" />
                <h3 className="text-lg text-foreground">Notifícame cuando esté listo</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Déjanos tu email y te avisaremos en cuanto lancemos esta sección
              </p>
              <form onSubmit={handleNotifyMe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "Enviando..." : "Avisar"}
                </Button>
              </form>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <div className="h-1 w-1 rounded-full bg-primary/30" />
              <div className="h-1 w-1 rounded-full bg-primary/50" />
              <div className="h-1 w-1 rounded-full bg-primary" />
              <div className="h-1 w-1 rounded-full bg-accent" />
              <div className="h-1 w-1 rounded-full bg-accent/50" />
              <div className="h-1 w-1 rounded-full bg-accent/30" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Mientras tanto, puedes explorar nuestras{" "}
              <button 
                onClick={onBack}
                className="text-primary hover:underline"
              >
                noticias
              </button>
              {" "}o{" "}
              <button 
                onClick={onBack}
                className="text-primary hover:underline"
              >
                ponerte en contacto
              </button>
              {" "}con nosotros
            </motion.p>
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
