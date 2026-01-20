import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Error | Junlab",
  description: "There was a problem sending your form.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-center">
        500
        <br />
        Internal Server Error
        </h1>
      <p className="text-base sm:text-lg md:text-xl text-center font-extrabold">
        Sorry, there was a problem sending your form. Please try again later..
      </p>
    </main>
  );
}
