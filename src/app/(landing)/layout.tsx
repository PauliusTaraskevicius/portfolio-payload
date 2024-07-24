import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation";
import Providers from "@/components/providers";

import { Toaster } from "@/components/ui/toaster";
import { BuyMeCofeeWidget } from "@/components/buy-me-coffee-widget";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PaulyDev",
  description:
    "Creating web applications as my hobby and full time job.As a self-taught frontend developer, I specialize in creating dynamic, responsive solutions that empower businesses to thrive in today's digital landscape. With technologies such as Javascript, HTML and CSS, React, Python.Let's unlock your business potential together for unparalleled success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {" "}
        {/* bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 from-slate-50 to-red-100 */}
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-red-100">
          <Providers>
            <Navigation />
            <Toaster />
            <main>{children}</main>
            <BuyMeCofeeWidget />
          </Providers>
        </div>
      </body>
    </html>
  );
}
