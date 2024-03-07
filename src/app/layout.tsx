import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumbs from "@/components/breadcrumbs";
import Header from "@/components/header";
import Recommendations from "@/components/recommendations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koinx - Crypto Taxes",
  description:
    "KoinX allows you to be more educated and aware of your tax reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-20">
          <Breadcrumbs
            separator={"»"}
            listClasses="text-[14px] inline font-regular"
            activeClasses="font-medium text-primaryText"
            capitalizeLinks
          />
          {children}
        </div>
      </body>
    </html>
  );
}
