import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elektroservice Pägelow | Ihr Meisterbetrieb in Banzin",
  description: "Professionelle Elektroinstallationen, MSR-Technik und DGUV V3 Prüfungen. Ihr zuverlässiger Partner Elektroservice Pägelow in Banzin und Umgebung.",
  keywords: "Elektroservice, Pägelow, Banzin, Elektroinstallation, MSR-Technik, DGUV V3, Meisterbetrieb",
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
