import { Toaster } from "./components/ui/sonner";
import { NewHeader } from "./components/NewHeader";
import { NewHero } from "./components/NewHero";
import { NewFeatures } from "./components/NewFeatures";
import { AppShowcase } from "./components/AppShowcase";
import { NewsSection } from "./components/NewsSection";
import { InfoForm } from "./components/InfoForm";
import { NewFooter } from "./components/NewFooter";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { GDPR } from "./components/GDPR";
import { AboutUs } from "./components/AboutUs";
import { UnderConstruction } from "./components/UnderConstruction";
import { useState } from "react";

type PageView = "home" | "privacy" | "terms" | "gdpr" | "about" | "blog";

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>("home");

  if (currentView === "privacy") {
    return (
      <>
        <PrivacyPolicy 
          onBack={() => setCurrentView("home")}
          onTermsClick={() => setCurrentView("terms")}
          onGDPRClick={() => setCurrentView("gdpr")}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "terms") {
    return (
      <>
        <TermsOfService 
          onBack={() => setCurrentView("home")}
          onPrivacyClick={() => setCurrentView("privacy")}
          onGDPRClick={() => setCurrentView("gdpr")}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "gdpr") {
    return (
      <>
        <GDPR 
          onBack={() => setCurrentView("home")}
          onPrivacyClick={() => setCurrentView("privacy")}
          onTermsClick={() => setCurrentView("terms")}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "about") {
    return (
      <>
        <AboutUs 
          onBack={() => setCurrentView("home")}
          onPrivacyClick={() => setCurrentView("privacy")}
          onTermsClick={() => setCurrentView("terms")}
          onGDPRClick={() => setCurrentView("gdpr")}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "blog") {
    return (
      <>
        <UnderConstruction 
          onBack={() => setCurrentView("home")}
          onPrivacyClick={() => setCurrentView("privacy")}
          onTermsClick={() => setCurrentView("terms")}
          onGDPRClick={() => setCurrentView("gdpr")}
          title="Blog"
          description="Estamos trabajando en traerte contenido de valor sobre el cuidado de personas mayores, consejos para familias, y novedades del sector."
        />
        <Toaster />
      </>
    );
  }

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
      <NewFooter 
        onPrivacyClick={() => setCurrentView("privacy")}
        onTermsClick={() => setCurrentView("terms")}
        onGDPRClick={() => setCurrentView("gdpr")}
        onAboutClick={() => setCurrentView("about")}
        onBlogClick={() => setCurrentView("blog")}
      />
      <Toaster />
    </div>
  );
}