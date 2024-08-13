import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idol Collector",
  description: "A place to collect your favorite k-idol cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="valentine">
     <body className={inter.className} suppressHydrationWarning={true}>
			<NavBar />
			<main className='p-5'>
				{children}
			</main>
			</body>
    </html>
  );
}
