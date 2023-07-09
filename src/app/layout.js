import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "June",
    template: "%s | June",
  },
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Script
          strategy="lazyOnload"
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <TransitionEffect text="Welcome to my Portfolio Website" />
        <Navbar />
        <main className="w-full h-full bg-slate-50/80 inline-block z-0">
          {children}
        </main>
        <Footer className="mt-auto " />
      </body>
    </html>
  );
}
