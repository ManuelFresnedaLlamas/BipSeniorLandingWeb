import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "BipSenior - Conecta con tus seres queridos cada día",
  description: "La plataforma que une familias, residencias y cuidadores. Fotos, actualizaciones y tranquilidad al instante.",
  icons: {
    icon: "/images/7e2fdbada78211440bd4e68ee1905f438d13f6bc.png",
    shortcut: "/images/7e2fdbada78211440bd4e68ee1905f438d13f6bc.png",
    apple: "/images/7e2fdbada78211440bd4e68ee1905f438d13f6bc.png",
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
      </body>
    </html>
  );
}

