import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "BipSenior - Conecta con tus seres queridos cada día",
  description: "La plataforma que une familias, residencias y cuidadores. Fotos, actualizaciones y tranquilidad al instante.",
  icons: {
    icon: "/images/bip.png",
    shortcut: "/images/bip.png",
    apple: "/images/bip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}

