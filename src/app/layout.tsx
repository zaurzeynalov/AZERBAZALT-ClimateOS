import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZERBAZALT ClimateOS",
  description: "Enterprise Climate Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex flex-1 flex-col bg-slate-100">
            <Topbar />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}