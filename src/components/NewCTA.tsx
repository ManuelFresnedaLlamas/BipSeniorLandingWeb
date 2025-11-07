"use client";

import { motion } from "motion/react";
import { Apple, Play, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function NewCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-accent to-secondary p-1"
        >
          {/* Inner content */}
          <div className="bg-white rounded-[2.75rem] p-12 sm:p-16 lg:p-20">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground">
                  Empieza hoy mismo
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Descarga BipSenior gratis y conecta con tu familiar en menos de 5 minutos
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full px-8 h-14 gap-3 shadow-xl shadow-primary/25"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Descargar en</div>
                    <div>App Store</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-14 gap-3 border-2 hover:bg-muted"
                >
                  <Play className="h-5 w-5 fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Disponible en</div>
                    <div>Google Play</div>
                  </div>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Gratis para familias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sin permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Soporte 24/7</span>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  ¿Eres una residencia y quieres ofrecer BipSenior a tus familias?
                </p>
                <Button variant="link" className="text-primary gap-2">
                  Hablar con ventas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
