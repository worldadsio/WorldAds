import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from "./component/Header"
import Footer from "./component/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Worldads | De-Pin Ad Network Infrastructure",
  description: "People Powered Distributed Ad Network Infrastructure Built On Cardano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/assets/images/logo-circle.png" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
