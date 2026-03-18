import type {Metadata} from 'next'
// import { Geist, Geist_Mono } from "next/font/google";
import './styles/globals.css'
import '@fontsource-variable/outfit'
import {StrictMode} from 'react'
import introText from '@lib/intro-text'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: 'Resume for Joel Hickok, a Geospsatial Professional and Web Developer',
    description: introText[0],
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased`}>
        <StrictMode>
            {/*<body*/}
            {/*    className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/}
            {/*  >*/}
            {children}
        </StrictMode>
        </body>
        </html>
    )
}
