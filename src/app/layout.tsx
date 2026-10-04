import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bekén Creative Studio",
  description: "Beken merupakan studio kreatif di bawah PT Bongky Kreasi Nusantara yang menghubungkan budaya, pengetahuan, kreativitas, dan industri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={karla.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}