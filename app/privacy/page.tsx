"use client";

import { useRouter } from "next/navigation";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export default function PrivacyPage() {
  const router = useRouter();
  
  return (
    <PrivacyPolicy 
      onBack={() => router.push("/")} 
      onTermsClick={() => router.push("/terms")}
      onGDPRClick={() => router.push("/gdpr")}
    />
  );
}
