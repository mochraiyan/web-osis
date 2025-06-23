import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSIS Askara Anagata",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>{children}</body>
    </html>
  );
}
