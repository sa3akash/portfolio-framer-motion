import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHAKIL Portfolio",
  description: "Modern & Minimalistic Shakil Ahmed Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </NextThemesProvider>
      </body>
    </html>
  );
}
