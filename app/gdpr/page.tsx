"use client";

import { useRouter } from "next/navigation";
import { GDPR } from "@/components/GDPR";

export default function GDPRPage() {
  const router = useRouter();
  
  return (
    <GDPR 
      onBack={() => router.push("/")} 
      onPrivacyClick={() => router.push("/privacy")}
      onTermsClick={() => router.push("/terms")}
    />
  );
}

