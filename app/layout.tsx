import type { Metadata } from "next";

import { appConfig } from "@/config";

import poppins from "./fonts";

import "./globals.scss";

export const metadata: Metadata = {
    title: appConfig.searchEngine.title,
    description: appConfig.searchEngine.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable} suppressHydrationWarning>
            <head />
            <body>{children}</body>
        </html>
    );
}
