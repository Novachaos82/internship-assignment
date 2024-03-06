import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internship Assignment",
  description: "Generated for RADIANT RICHES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#FBFCFD]"}>
        <Navbar />

        <MobileNavbar />

        {children}
        <div className="hidden md:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}
