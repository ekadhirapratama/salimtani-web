import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import Header from '@/components/Header';
import AppSidebar from '@/components/AppSidebar';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = {
        name: 'Ahmad Alif',
        role: 'Marketing Manager',
    };

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header user={user} />

                <div className="min-h-screen bg-gray-50">
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger className="mt-20" />
                        <main className="mt-20 pl-4">
                            {children}
                        </main>
                    </SidebarProvider>

                </div>
            </body>
        </html>
    );
}
