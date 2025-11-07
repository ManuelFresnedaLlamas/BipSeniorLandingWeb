import { Button } from "./ui/button";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Brain className="h-4 w-4" />
                <span className="text-sm font-medium">Consultoría IT Especializada</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformación
                <span className="text-blue-600"> Digital</span> con
                <span className="text-cyan-500"> Inteligencia</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Potenciamos tu negocio con soluciones tecnológicas innovadoras. 
                Combinamos neurociencia digital y expertise técnico para revolucionar tu empresa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Soporte</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1735964366700-9eedefcf0065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTY5MTg3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnología Moderna"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <Cpu className="h-8 w-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <Zap className="h-8 w-8 text-cyan-500" />
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}