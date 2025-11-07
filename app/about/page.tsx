"use client";

import { useRouter } from "next/navigation";
import { AboutUs } from "@/components/AboutUs";

export default function AboutPage() {
  const router = useRouter();
  
  return (
    <AboutUs 
      onBack={() => router.push("/")} 
      onPrivacyClick={() => router.push("/privacy")}
      onTermsClick={() => router.push("/terms")}
      onGDPRClick={() => router.push("/gdpr")}
    />
  );
}

