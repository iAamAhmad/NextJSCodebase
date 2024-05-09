import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practicing for NEXT JS!",
  description: "Practice Stuff!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <div className=''>
            <Header />

            {children}
            <footer className='bg-slate-100 py-5 text-center mt-5'>
              <p>These Are Footer items!</p>
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
