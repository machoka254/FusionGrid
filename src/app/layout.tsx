import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootProviders } from "@/components/mols/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion Grid",
  description: "Giving you control of your documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
