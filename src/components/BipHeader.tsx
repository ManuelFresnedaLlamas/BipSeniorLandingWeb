import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function BipHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Características", href: "#caracteristicas" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Seguridad", href: "#seguridad" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-2xl p-2">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl text-foreground tracking-tight">BipSenior</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="lg" className="rounded-full">
              Iniciar sesión
            </Button>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              Descargar app
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="lg" className="rounded-full w-full">
                  Iniciar sesión
                </Button>
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 w-full">
                  Descargar app
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
