import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/company-logo.jpeg",
  },
  /* Gambar untuk preview di tab browser, search engine, dan berbagi di
   * media sosial. Bila domain sudah tersedia, setel `metadataBase` agar
   * URL gambar menjadi absolut. */
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/company-logo.jpeg"],
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/company-logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppWidget />
      </body>
    </html>
  );
}