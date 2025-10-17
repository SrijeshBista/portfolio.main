import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import ClientLayout from "./clintelayout";
import './scss/style.scss';
import Head from "next/head";

const interFont = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const orbitronFont = Orbitron({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata = {
  title: "srijeshbista.com.np",
  description: "Srijesh Bista Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${interFont.variable} ${orbitronFont.variable}`}>
        <Nav />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
