import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavigationBar from "@/navigation/NavigationBar";

export const metadata: Metadata = {
  title: "Calphy Calculator",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="max-w-6xl mx-auto p-4">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
