import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyterra Nusantara | Geospatial · Aerial · Digital",
  description:
    "Mapping the future from above. Skyterra Nusantara is a modern geospatial technology studio delivering high-precision aerial surveys, LiDAR point clouds, orthomosaics, and 3D spatial intelligence across the Indonesian archipelago.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5EF] text-[#102C46] selection:bg-[#A9C8E0]/40 selection:text-[#102C46]">
        {children}
      </body>
    </html>
  );
}
