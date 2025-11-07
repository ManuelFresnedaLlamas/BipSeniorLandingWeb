import { NewHeader } from "@/components/NewHeader";
import { NewHero } from "@/components/NewHero";
import { AppShowcase } from "@/components/AppShowcase";
import { NewFeatures } from "@/components/NewFeatures";
import { NewsSection } from "@/components/NewsSection";
import { InfoForm } from "@/components/InfoForm";
import { NewFooter } from "@/components/NewFooter";

export default function Home() {
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

