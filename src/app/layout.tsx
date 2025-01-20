import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileHeader from "./Components/MobileHeader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const alexandria = Alexandria({subsets: ["latin"], weight: ["400", "700"]});
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "Meaningful Life",
  description: "We are here to help you create a life filled with intention and meaning. Let our expert coaches guide you toward growth and transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={` antialiased font-light ${montserrat.className}`}
      >
        <Header />
        <MobileHeader/>
        {children}
        <Footer />

        <Analytics/>
      </body>
    </html>
  );
}
