"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { NewHeader } from "@/components/NewHeader";
import { NewHero } from "@/components/NewHero";
import { AppShowcase } from "@/components/AppShowcase";
import { NewFeatures } from "@/components/NewFeatures";
import { NewsSection } from "@/components/NewsSection";
import { InfoForm } from "@/components/InfoForm";
import { NewFooter } from "@/components/NewFooter";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Función para hacer scroll al hash con reintentos
    const scrollToHash = (retries = 0) => {
      const hash = window.location.hash;
      if (hash) {
        // Delay para asegurar que el DOM está listo
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else if (retries < 3) {
            // Reintentar si el elemento no está disponible aún
            scrollToHash(retries + 1);
          }
        }, retries === 0 ? 500 : 200);
      }
    };

    // Ejecutar cuando cambie el pathname (navegación)
    scrollToHash();

    // También escuchar cambios en el hash
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <NewHeader />
      <main>
        <section id="inicio">
          <NewHero />
        </section>
        <AppShowcase />
        <NewFeatures />
        <NewsSection />
        <InfoForm />
      </main>
      <NewFooter />
    </div>
  );
}

