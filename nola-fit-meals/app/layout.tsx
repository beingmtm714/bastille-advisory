import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Bebas Neue — hero/headings, Pacifico — category labels, Inter — body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-bebas: 'Bebas Neue', sans-serif;
            --font-pacifico: 'Pacifico', cursive;
            --font-inter: 'Inter', sans-serif;
          }
        `}</style>
      </head>
      <body className="bg-brand-black text-brand-white font-inter min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
