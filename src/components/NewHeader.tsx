"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/7e2fdbada78211440bd4e68ee1905f438d13f6bc.png";

interface NewHeaderProps {
  onPrivacyPage?: boolean;
  onBackClick?: () => void;
}

export function NewHeader({ onPrivacyPage = false, onBackClick }: NewHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Características", href: "#caracteristicas" },
    { label: "Noticias", href: "#noticias" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onPrivacyPage && onBackClick) {
      onBackClick();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = () => {
    if (onPrivacyPage && onBackClick) {
      onBackClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logoImage} 
              alt="BipSenior" 
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavClick("#contacto")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full px-6"
            >
              Solicitar info
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick("#contacto")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full w-full mt-2"
            >
              Solicitar info
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}