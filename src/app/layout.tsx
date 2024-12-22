import type {Metadata} from "next";
import {Poppins, Inter} from "next/font/google";
import React from "react";
import "./globals.scss";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',

})

export const metadata: Metadata = {
    title: "Test App",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${poppins.variable} ${inter.variable}`}>
        <p>NAVBAR</p>
        {children}
        <p>FOOTER</p>
        </body>
        </html>
    );
}
