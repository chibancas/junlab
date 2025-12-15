import Image from "next/image";
export default function Home() {
  return (
    <main className="grid grid-cols-2 content-start justify-center place-items-center gap-2 p-4
    lg:flex flex-wrap lg:justify-center lg:gap-5">
      <h1 className="col-span-2 text-center text-5xl md:text-7xl
      lg:w-full">
        Welcome to my Site!
      </h1>
      
      <h2 className="col-span-1 text-center text-3xl md:text-4xl font-bold">
        Here you&apos;ll find all about me or at least some of it.
      </h2>

      <figure className="col-span-1 flex flex-col justify-center items-center gap-2">
        <Image src={"/yo.jpg"} alt={"A picture of me taken randomly."} width={100} height={100} className="rounded-full block md:hidden" />
        <Image src={"/yo.jpg"} alt={"A picture of me taken randomly."} width={200} height={200} className="rounded-full hidden md:block " />
        <figcaption className="text-xl md:text-2xl text-center">
          Juan José Fdez
          <br />
          Tech Enthusiast
        </figcaption>
      </figure>

      <section className="col-span-2 flex flex-col justify-center items-center gap-4 px-6
      lg:w-[50%]">

        <p className="text-xl md:text-2xl text-justify">
          Feel free to explore the different sections using the navigation menu above.
        </p>
        <p className="text-justify text-lg md:text-xl">
          Whether you&apos;re interested in my projects, studies, hobbies, or just want to get in touch, there&apos;s something for everyone.
          I&apos;d like to thank you for visiting my site and hope you find it interesting.
        </p>
      </section>
    </main>
  );
}
