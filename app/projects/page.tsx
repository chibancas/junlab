import './styles.css'
import Image from 'next/image'
export default function Projects() {
    return (
        <main className="projects px-4">

            <h1 className='text-center text-3xl font-bold'>
                My Projects
            </h1>

            <p className='text-justify text-lg py-4'>
                I&apos;ve experimented a lot with different technologies, tools and ideas.
                Here you&apos;ll find a selection of the projects that best represent what I enjoy building:
                automation systems, full-stack experiments, hosting setups and personal tools.
            </p>

            <section>
                <article>
                    <h2>My Personal VPS</h2>

                    <p>
                        I run most of my projects on a Virtual Private Server that I manage myself.
                        It works as my personal lab, allowing me to deploy services, test automations
                        and host web applications.
                    </p>

                    <ul>
                        <li>
                            Hosting multiple web projects isolated using Docker containers.
                        </li>
                        <li>
                            Running tools such as n8n, Chatwoot, Evolution API, PostgreSQL, Redis and more.
                        </li>
                        <li>
                            Using WireGuard inside a container to turn the VPS into a private VPN server.
                        </li>
                        <li>
                            Managing SSL certificates, reverse proxies and DNS for my subdomains.
                        </li>
                    </ul>
                    <Image src={"/containers.png"} height={400} width={400} alt='Linux terminal where there&apos;s a list showing all the conainter that I run on the VPS and its ' />
                </article>

                <article>
                    <h2>Junlab | Personal Website</h2>

                    <p>
                        This website is one of my main projects.
                        I built it using Next.js and Tailwind CSS.
                        It serves as both a portfolio and a playground where I try new ideas,
                        improve my frontend skills and experiment with different UI layouts.
                    </p>

                    <ul>
                        <li>
                            Built with modern React and the App Router.
                        </li>
                        <li>
                            Uses simple design principles.
                        </li>
                        <li>
                            Responsive layout designed primarily for accessibility and readability.
                        </li>
                    </ul>
                </article>

                <article>
                    <h2>WhatsApp Automation for Autocares Baraza</h2>

                    <p>
                        One of the most important automations I created.
                        It connects the company&apos;s WhatsApp with multiple systems to speed up
                        how customer messages are received and answered.
                    </p>

                    <ul>
                        <li>
                            Integration between Chatwoot, n8n and Evolution API.
                        </li>
                        <li>
                            Message routing and conditional logic to guide users based on their needs.
                        </li>
                    </ul>
                    <Image src={"/n8nWorkflow.png"} height={600} width={600} alt='Linux terminal where there&apos;s a list showing all the conainter that I run on the VPS and its ' />
                </article>

                <article>
                    <h2>GTFS Feed Creation</h2>

                    <p>
                        I worked on converting bus schedules and stop information into GTFS format,
                        which is the standard data format used by transport apps like Google Maps.
                    </p>

                    <ul>
                        <li>
                            Creating routes, trips, calendars, stop times and shapes from scratch.
                        </li>
                        <li>
                            Transforming unstructured timetables into structured data.
                        </li>
                        <li>
                            Designing route shapes manually using mapping tools.
                        </li>
                    </ul>
                </article>

                <article>
                    <h2>Other Experiments & Side Projects</h2>

                    <p>
                        I also love small technical experiments, scripting,
                        testing AI agents, trying new libraries, and exploring new technologies.
                        Not all of them become full projects, but they help me learn a lot.
                    </p>

                    <ul>
                        <li>
                            Bash and PowerShell scripts for automation.
                        </li>
                        <li>
                            Local AI model testing and fine-tuning experiments.
                        </li>
                        <li>
                            Docker Compose environments for quick prototyping.
                        </li>
                    </ul>
                </article>
                <article>
                    <h2>Custom Mouse Button Mapping on Linux</h2>

                    <p>
                        I needed a way to replicate the zoom shortcuts I used on Windows with
                        X-Mouse Button Control. Since Linux does not offer this tool,
                        I created my own solution to make the side buttons of my Razer mouse
                        perform like the Windows Magnifier to make Zoom In and Zoom Out anywhare in the desktop.
                    </p>

                    <p>
                        This project helped me integrate accessibility into my daily workflow,
                        allowing me to zoom any application instantly using my mouse buttons.
                    </p>

                    <ul>
                        <li>
                            Identified the mouse device and button codes using xinput.
                        </li>
                        <li>
                            Captured mouse button events with xbindkeys.
                        </li>
                        <li>
                            Simulated zoom shortcuts globally using xdotool.
                        </li>
                        <li>
                            Created custom bindings:
                            <ul>
                                <li>Side Button 1 -&gt; Win + (Zoom In)</li>
                                <li>Side Button 2 -&gt; Win - (Zoom Out)</li>
                            </ul>
                        </li>
                    </ul>

                    <p>
                        This setup worked perfectly across all applications, and it was a
                        great example of adapting the Linux environment to my accessibility needs.
                    </p>

                    <p>Sadly I deleted thw Linux system where I had all settted up so yo&apos;ll have to trust me. ;) </p>
                </article>
            </section>


        </main>
    )
}
