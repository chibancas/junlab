import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Junlab",
    description: "From my room to the world!",
    keywords: ["Junlab", "Projects", "Studies", "Hobbies", "Contact", "Portfolio", "Next.js", "React", "TypeScript", "Web Development", "Programming", "Software Engineer", "Tech Enthusiast", "Personal Website", "Juan José Fernández Fernández", "Juanjo", "Developer Portfolio", "Juan José", "Vera"],
};

const texts = ["Hello World!", "Welcome to Junlab", " Explore my projects"];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}
            >
                <h1>
                    Pruebas
                </h1>
            </body>
        </html>
    )
}