import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function BipCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-accent/20 to-secondary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-primary to-primary/90 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 max-w-3xl mx-auto">
              Empieza hoy a mejorar la comunicación con tu residencia
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a miles de familias que ya disfrutan de estar más cerca de sus seres queridos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90 px-8 h-14 gap-2 shadow-xl"
              >
                Descargar ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/10 px-8 h-14"
              >
                Hablar con ventas
              </Button>
            </div>

            <div className="mt-8 text-white/80 text-sm">
              ✓ Gratis para familias &nbsp;•&nbsp; ✓ Sin permanencia &nbsp;•&nbsp; ✓ Soporte 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
