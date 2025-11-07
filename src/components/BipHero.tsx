import { Apple, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BipHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
                Tu familia,{" "}
                <span className="text-primary">más cerca que nunca</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                La app que conecta a las residencias con las familias en tiempo real
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full bg-black hover:bg-black/90 px-8 h-14 gap-3"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Descargar en</div>
                  <div className="text-base">App Store</div>
                </div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 gap-3 border-2"
              >
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Disponible en</div>
                  <div className="text-base">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Familias conectadas</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Residencias activas</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Valoración media</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              {/* Phone Container */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwbW9ja3VwJTIwaGFuZHxlbnwxfHx8fDE3NjE2NDI4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="BipSenior App Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
