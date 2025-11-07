"use client";

import { useRouter } from "next/navigation";
import { TermsOfService } from "@/components/TermsOfService";

export default function TermsPage() {
  const router = useRouter();
  
  return (
    <TermsOfService 
      onBack={() => router.push("/")} 
      onPrivacyClick={() => router.push("/privacy")}
      onGDPRClick={() => router.push("/gdpr")}
    />
  );
}

