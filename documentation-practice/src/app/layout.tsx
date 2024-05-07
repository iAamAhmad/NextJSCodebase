import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className=''>
          <h1>this is Header</h1>
          {children}
          <h2>This Is Footer</h2>
        </div>
      </body>
    </html>
  );
}
