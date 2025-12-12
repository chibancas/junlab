import { Gamepad2, LaptopMinimal, Music, SmilePlus } from "lucide-react";
import "./styles.css"
import Image from 'next/image'

export default function Hobbies() {
    return (
        <main className="hobbies w-full px-4 grid grid-cols-1 gap-4">


            {/* mb-4 */}
            <h1 className="text-3xl font-bold text-center">
                My hobbies
                <SmilePlus size={60} />
            </h1>

            {/* mb-6 */}
            <p className="text-lg text-center md:text-xl">
                Even though I love learning new things, I also need breaks.
                Here are some of the things I enjoy when I&apos;m not working on tech.
            </p>

            <section className="grid grid-cols-1 gap-6">

                <article className="gaming">
                    <h2 className="col-span-3">
                        <Gamepad2 /> Gaming
                    </h2>
                    <p className="col-span-3">
                        I play both flat-screen and VR games.
                        Sometimes I dive into story-driven worlds, other times I just relax driving,
                        flying or exploring open maps.
                        Stories like those showed inthe Unchated, Tom Raides games or Batman Arkham sagas are awesome.
                        Also I dive too much in worlds like the RDR maps, Forza Horizon worlds. They quite are my window to the world due to my vision issue.
                    </p>

                    <figure>
                        <Image alt="Forza Horizon 4 Cover" src={"data:image/jpeg;base64,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"}
                            height={300} width={100} />
                        <figcaption>Forza Horizon 4 Cover</figcaption>
                    </figure>

                    <figure>
                        <Image alt="Red Dead Redemption 2 Cover" src={"https://www.gtabase.com/igallery/4201-4300/RDR_2_Cover_PC-4213-1920.jpg"}
                            height={300} width={100} />
                        <figcaption>Red Dead Redemption 2 Cover</figcaption>
                    </figure>

                    <figure>
                        <Image alt="Uncharted 4 Cover" src={"https://cdn-images.dzcdn.net/images/cover/c3fdde445d80b67a8d6ff09020154939/0x1900-000000-80-0-0.jpg"}
                            height={300} width={100} />
                        <figcaption>Uncharted 4 Cover</figcaption>
                    </figure>

                    <figure>
                        <Image alt="Watch Dogs Cover" src={"https://static.posters.cz/image/1300/15072.jpg"}
                            height={300} width={100} />
                        <figcaption>Watch Dogs Cover</figcaption>
                    </figure>

                    <figure>
                        <Image alt="Half Life Alyx Cover" src={"https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Half-Life_Alyx_Cover_Art.jpg/250px-Half-Life_Alyx_Cover_Art.jpg"}
                            height={300} width={100} />
                        <figcaption>Half Life Alyx Cover</figcaption>
                    </figure>

                    <figure>
                        <Image alt="Beat Saber Cover" src={"https://upload.wikimedia.org/wikipedia/en/5/58/Beat_Saber_logo.jpg"}
                            height={300} width={100} />
                        <figcaption>Beat Saber Cover</figcaption>
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
                        <iframe data-testid="embed-iframe" className="rounded-lg"
                            src="https://open.spotify.com/embed/playlist/2y3fwIaDs5aFh6KQkyjbST?utm_source=generator"
                            width="100%" height="352" frameBorder="0" allowFullScreen
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
                        <Image src={"/myDesk.jpg"} width={700} height={500} alt="My desktop" />
                    </figure>

                </article>

            </section>
        </main>
    );
}
