import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 content-start justify-center place-items-center gap-4 p-4">
      <h1 className="md:col-span-2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to my Site!
      </h1>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold max-w-prose">
        Here you&apos;ll find all about me or at least some of it.
      </h2>

      <figure className="flex flex-col justify-center items-center gap-2 w-full max-w-xs">
        <Image
          src={"/yo.jpg"}
          alt={"A picture of me taken randomly."}
          width={240}
          height={240}
          sizes="(min-width: 768px) 200px, 140px"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
        />
        <figcaption className="text-lg sm:text-xl md:text-2xl text-center">
          Juan José Fdez
          <br />
          Tech Enthusiast
        </figcaption>
      </figure>

      <section className="md:col-span-2 flex flex-col justify-center items-center gap-4 px-2 sm:px-6 w-full max-w-3xl">
        <p className="text-lg sm:text-xl md:text-2xl text-justify">
          Feel free to explore the different sections using the navigation menu above.
        </p>
        <p className="text-justify text-base sm:text-lg md:text-xl">
          Whether you&apos;re interested in my projects, studies, hobbies, or just want to get in touch, there&apos;s something for everyone.
          I&apos;d like to thank you for visiting my site and hope you find it interesting.
        </p>
      </section>
    </main>
  );
}
