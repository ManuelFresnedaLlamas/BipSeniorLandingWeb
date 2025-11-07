"use client";

import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NewFooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onGDPRClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
}

type LinkItem = {
  label: string;
  href: string;
  action?: string;
};

export function NewFooter({ onPrivacyClick, onTermsClick, onGDPRClick, onAboutClick, onBlogClick }: NewFooterProps) {
  const pathname = usePathname();
  const links: Record<string, LinkItem[]> = {
    producto: [
      { label: "Características", href: "#caracteristicas" },
      { label: "Noticias", href: "#noticias" },
      { label: "Contacto", href: "#contacto" },
    ],
    empresa: [
      { label: "Sobre nosotros", href: "about", action: "about" },
      { label: "Blog", href: "blog", action: "blog" },
    ],
    legal: [
      { label: "Privacidad", href: "privacy", action: "privacy" },
      { label: "Términos", href: "terms", action: "terms" },
      { label: "GDPR", href: "gdpr", action: "gdpr" },
    ],
  };

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:info@bipsenior.com", label: "Email" },
  ];

  const handleNavClick = (href: string, action?: string) => {
    if (href.startsWith("#")) {
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
    }
  };

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/7e2fdbada78211440bd4e68ee1905f438d13f6bc.png" 
                alt="BipSenior" 
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Conectando familias con residencias. Momentos compartidos, corazones unidos.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-accent hover:text-white transition-all duration-300 flex items-center justify-center group"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-foreground mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index}>
                    {item.action ? (
                      <Link
                        href={`/${item.href}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href, item.action)}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 BipSenior. Hecho con ❤️ para las familias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}