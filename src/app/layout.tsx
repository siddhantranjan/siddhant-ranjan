import type { Metadata } from "next";
import "./globals.css";
import "@/css/animated-headline.css"

export const metadata: Metadata = {
  title: "Siddhant Ranjan",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
