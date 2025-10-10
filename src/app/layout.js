import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clintelayout";// ✅ Import client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "srijeshbista.com.np",
  description: "Srijesh Bista Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout> {/* ✅ AOS active everywhere */}
      </body>
    </html>
  );
}
