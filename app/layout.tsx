import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className+" bg-slate-800 text-white"}>
                <main className="w-5/6 mx-auto flex min-h-screen flex-col items-center gap-20 ">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
