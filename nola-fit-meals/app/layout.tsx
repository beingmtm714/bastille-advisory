import type { Metadata } from "next";
import { Bebas_Neue, Pacifico, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOLA Fit Meals — Fresh Weekly Meal Prep in Metairie, LA",
  description:
    "Fresh, local meal prep delivered to your door in the New Orleans metro. New menu every Monday. Order by Sunday 8pm.",
  openGraph: {
    title: "NOLA Fit Meals",
    description: "Fresh, local meal prep. New menu every Monday.",
    siteName: "NOLA Fit Meals",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${pacifico.variable} ${inter.variable}`}
    >
      <body className="bg-brand-black text-brand-white font-inter min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
