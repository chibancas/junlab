import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Junlab",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center p-20">
      <h1 className="text-6xl font-extralight text-center">
        404
        <br />
        Page Not Found
        </h1>
      <p className="text-xl text-center font-extrabold">
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
