import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import TypewriterText from "@/components/Typer";
import { FolderKanban, GraduationCap, Home, SmilePlus, SquareUserRound } from "lucide-react";
import PolicyButton from "@/components/PolicyButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://junlab.es"),
  title: "Junlab",
  description: "From my room to the world!",
  keywords: [
    "Junlab",
    "Projects",
    "Studies",
    "Hobbies",
    "Contact",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
    "Programming",
    "Software Engineer",
    "Tech Enthusiast",
    "Personal Website",
    "Juan José Fernández Fernández",
    "Juanjo",
    "Developer Portfolio",
    "Juan José",
    "Vera",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Junlab",
    description: "From my room to the world!",
    url: "/",
    siteName: "Junlab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Junlab logotype over gradient background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junlab",
    description: "From my room to the world!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <header>
          <h1 className="siteTitle hidden">
            Junlab
          </h1>
          <figure className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/logo.png"}
              alt={"Junlab's logo"}
              width={700}
              height={700}
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, (min-width: 640px) 320px, 240px"
              className="bg-linear-to-b from-slate-500 via-gray-500 to-zinc-100 rounded-4xl border-black border-2
              w-full max-w-60 sm:max-w-[320px] md:max-w-105 lg:max-w-130 h-auto"
            />
            <span className="typer">
              <TypewriterText texts={texts} />
            </span>
          </figure>
          <nav className="nav md:col-span-1">
            <Link href={"/"} >
              <Home />
              <span>
                Home
              </span>
            </Link>
            <Link href={"/projects"} >
              <FolderKanban />
              <span>
                Projects
              </span>
            </Link>
            <Link href={"/studies"}>
              <GraduationCap />
              <span>
                Studies
              </span>
            </Link>
            <Link href={"/hobbies"}>
              <SmilePlus />
              <span>
                Hobbies
              </span>
            </Link>
            <Link href={"/contact"} className="col-span-2">
              <SquareUserRound />
              <span>
                Contact
              </span>
            </Link>
          </nav>
        </header>
        {children}
        <PolicyButton />

        <footer className="grid grid-cols-1 gap-4">
          <figure className="grid grid-cols-2 place-items-center justify-center
          lg:flex lg:flex-nowrap lg:justify-center lg:gap-5">
            <Image src={"/favicon.ico"} alt={"Junlab's logo"} width={100} height={100} className="md:hidden" />
            <Image src={"/favicon.ico"} alt={"Junlab's logo"} width={150} height={150} className="hidden md:block" />
            <h1 className="siteTitle">
              Junlab
            </h1>
          </figure>
          <figure className=" flex justify-center flex-wrap flex-row gap-2.5 my-2">
            <h2 className="col-span-2 text-2xl md:text-3xl text-center w-full">
              Developed using
            </h2>
            <Image src={"/next.svg"} alt={"Junlab's logo"} width={100} height={100} className="block md:hidden" />
            <Image src={"/next.svg"} alt={"Junlab's logo"} width={150} height={150} className="hidden md:block" />
          </figure>
          <h3 className="text-center text-xl">
            Copyright &copy; {new Date().getFullYear()} Junlab.
            <br />
            All rights reserved to Juan José Fernández Fernández.
          </h3>
        </footer>
      </body>
    </html>
  );
}
