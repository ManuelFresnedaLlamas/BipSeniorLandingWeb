"use client";

import { useRouter } from "next/navigation";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BlogPage() {
  const router = useRouter();
  
  return (
    <UnderConstruction 
      onBack={() => router.push("/")} 
      onPrivacyClick={() => router.push("/privacy")}
      onTermsClick={() => router.push("/terms")}
      onGDPRClick={() => router.push("/gdpr")}
      title="Blog"
      description="Estamos trabajando en traerte contenido de valor sobre el cuidado de personas mayores, consejos para familias, y novedades del sector."
    />
  );
}

