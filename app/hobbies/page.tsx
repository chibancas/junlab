import type { Metadata } from "next";
import { Gamepad2, LaptopMinimal, Music } from "lucide-react";
import "./styles.css";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hobbies | Junlab",
    description: "Gaming, music, and tech curiosity outside of work.",
    alternates: {
        canonical: "/hobbies",
    },
    openGraph: {
        title: "Hobbies | Junlab",
        description: "What I enjoy outside of projects: games, music, and tech exploration.",
        url: "/hobbies",
        type: "article",
    },
};

export default function Hobbies() {
    return (
        <main className="hobbies w-full px-4 grid grid-cols-1 gap-4">


            {/* mb-4 */}
            <h1 className="text-3xl font-bold text-center">
                My hobbies
            </h1>

            {/* mb-6 */}
            <p className="text-lg text-center md:text-xl">
                Even though I love learning new things, I also need breaks.
                Here are some of the things I enjoy when I&apos;m not working on tech.
            </p>

            <section className="grid grid-cols-1 gap-6">

                <article className="gaming">
                    <h2 className="col-span-1 sm:col-span-2 lg:col-span-4">
                        <Gamepad2 /> Gaming
                    </h2>
                    <p className="col-span-1 sm:col-span-2 lg:col-span-4">
                        I play both flat-screen and VR games.
                        Sometimes I dive into story-driven worlds, other times I just relax driving,
                        flying or exploring open maps.
                        Stories like those showed inthe Unchated, Tom Raides games or Batman Arkham sagas are awesome.
                        Also I dive too much in worlds like the RDR maps, Forza Horizon worlds. They quite are my window to the world due to my vision issue.
                    </p>

                    <figure>
                        <Image
                            alt="Forza Horizon 4 Cover"
                            src={"https://upload.wikimedia.org/wikipedia/en/8/87/Forza_Horizon_4_cover.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Forza Horizon 4</figcaption>
                    </figure>

                    <figure>
                        <Image
                            alt="Red Dead Redemption 2 Cover"
                            src={"https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Red Dead Redemption 2</figcaption>
                    </figure>

                    <figure>
                        <Image
                            alt="Uncharted 4 Cover"
                            src={"https://cdn-images.dzcdn.net/images/cover/c3fdde445d80b67a8d6ff09020154939/0x1900-000000-80-0-0.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Uncharted 4</figcaption>
                    </figure>

                    <figure>
                        <Image
                            alt="Watch Dogs Cover"
                            src={"https://static.posters.cz/image/1300/15072.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Watch Dogs</figcaption>
                    </figure>

                    <figure>
                        <Image
                            alt="Half Life Alyx Cover"
                            src={"https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Half-Life_Alyx_Cover_Art.jpg/250px-Half-Life_Alyx_Cover_Art.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Half Life Alyx</figcaption>
                    </figure>

                    <figure>
                        <Image
                            alt="Beat Saber Cover"
                            src={"https://upload.wikimedia.org/wikipedia/en/5/58/Beat_Saber_logo.jpg"}
                            height={600}
                            width={400}
                            sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
                            className="w-full max-w-55 h-auto"
                        />
                        <figcaption>Beat Saber</figcaption>
                    </figure>
                </article>

                <article>
                    <h2>
                        <Music /> Music
                    </h2>
                    <p>
                        Music is always with me, especially flamenco, jazz blends, pop and experimental covers.
                        I listen to it everywhere: working, walking or relaxing.
                        Somehow music boosted my way of learning english. Singers like Adele or bands like Queen are in my top 5 listened.
                    </p>

                    <p className="py-4">
                        I&apos;ve douting between 2 options to show the music that I use to listen, an iframe of my Spotify playlist or use the song covers.
                        Anyway, iframe won this batle.
                    </p>

                    <div id="spotify" className="grid grid-cols-1 gap-2.5">
                        <h3 className="text-2xl text-center">
                            My Spotify Playlist
                        </h3>
                        <iframe data-testid="embed-iframe" className="rounded-lg block lg:hidden"
                            src="https://open.spotify.com/embed/playlist/2y3fwIaDs5aFh6KQkyjbST?utm_source=generator"
                            width="100%" height="352" frameBorder="0" allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                        <iframe data-testid="embed-iframe" className="rounded-lg hidden lg:block mx-auto"
                            src="https://open.spotify.com/embed/playlist/2y3fwIaDs5aFh6KQkyjbST?utm_source=generator"
                            width="60%" height="352" frameBorder="0" allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </article>

                <article>
                    <h2>
                        <LaptopMinimal /> Tech & Curiosity
                    </h2>
                    <p>
                        Sometimes my hobby overlaps with my work.
                        I like experimenting with new tools, automations, servers,
                        and little side projects just for fun. And I quite mix all of that with work so I end up with tons of ideas and sometime I end up tired too soon.
                    </p>
                    <figure>
                        <Image
                            src={"/myDesk.jpg"}
                            width={1000}
                            height={800}
                            sizes="(min-width: 1024px) 720px, (min-width: 640px) 560px, 320px"
                            alt="My desktop"
                            className="w-full max-w-180 h-auto"
                        />
                    </figure>

                </article>

            </section>
        </main>
    );
}
