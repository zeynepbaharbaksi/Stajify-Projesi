import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Stajify AI",
  description: "Yapay zeka destekli staj eşleştirme platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
