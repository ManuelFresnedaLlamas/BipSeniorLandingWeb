"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado/rechazado las cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Mostrar el banner después de un pequeño delay para mejor UX
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl border border-border p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
              {/* Icon and Content */}
              <div className="flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Cookie className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    Uso de cookies
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
                    Al hacer clic en "Aceptar todas", aceptas nuestro uso de cookies.{" "}
                    <Link 
                      href="/privacy" 
                      className="text-primary hover:underline font-medium"
                    >
                      Política de Privacidad
                    </Link>
                    {" y "}
                    <Link 
                      href="/terms" 
                      className="text-primary hover:underline font-medium"
                    >
                      Términos de Servicio
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity whitespace-nowrap text-xs md:text-sm"
                >
                  Aceptar todas
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReject}
                  size="sm"
                  className="whitespace-nowrap text-xs md:text-sm"
                >
                  Rechazar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

