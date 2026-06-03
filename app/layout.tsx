import type { Metadata } from "next";
import { Space_Grotesk, Inter, VT323 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ritika (Rachel) Rana — Data Analyst",
  description: "Portfolio of Ritika Rana, Data Analyst based in Brisbane, AU",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${vt323.variable} h-full`}
    >
      <body className="min-h-full bg-[#050508] antialiased">{children}</body>
    </html>
  );
}
