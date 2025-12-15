import "./styles.css";
import Image from "next/image";

export default function Studies() {
    return (
        <main className="studies px-4">
            <h1 className="text-center text-3xl font-bold md:text-6xl">
                What did I study?
            </h1>

            <section className="grid grid-cols-1 place-items-center p-2.5 gap-5
            " >
                <article>
                    <h2>
                        Intermediate Vocational Training
                        <br />
                        Microcomputer Systems & Networks
                    </h2>
                    <h3>
                        IES Cura Valera ( 20220-2022 )
                    </h3>
                    <p>
                        I completed an Intermediate Vocational Training program in Microcomputer Systems and Networks.
                        This is a practical, hands-on program where I focused on computer hardware,
                        operating systems, local networks, and basic IT support. It gave me a strong technical base
                        very early in my career.
                        <br />
                        <span>
                            The name of this training program in spanish is Ciclo formativo de grado medio en sistemas microinformáticos y redes.
                        </span>
                    </p>
                    <Image className="md:hidden" src={"/aeroView.jpeg"} width={325} height={325} alt="Partial view of IES Cura Valera's buildings." />
                    <Image className="hidden md:block" src={"/aeroView.jpeg"} width={500} height={500} alt="Partial view of IES Cura Valera's buildings." />
                </article>

                <article>
                    <h2>
                        Advanced Vocational Training
                        <br />
                        Network Systems Administration
                    </h2>
                    <h3>
                        IES Cura Valera ( 20222-2024 )
                    </h3>
                    <p>
                        I continued with an Advanced Vocational Training program in Network Systems Administration.
                        This specializes in server management, Linux administration,
                        virtualization, security, and cloud services. It significantly strengthened my skills as a
                        systems and network administrator. Also, I deep dive a litle into web development and CD/CI.
                        <br />
                        <span>
                            The name of this training program in spanish is Ciclo formativo de grado superior en administración de sistemas informáticos en red
                        </span>
                    </p>
                    <Image className="md:hidden" src={"/aeroViewPalmtree.jpeg"} width={325} height={325} alt="Partial view of the IES Cura Valera's yard." />
                    <Image className="hidden md:block" src={"/aeroViewPalmtree.jpeg"} width={500} height={500} alt="Partial view of the IES Cura Valera's yard." />
                </article>

                <article>
                    <h2>
                        Cybersecurity Master Degree
                        <br />
                        ( May not be finished ;)
                    </h2>
                    <h3>
                        Campus Internacional de Ciberseguridad
                        <br />
                        ( Online | 2025 )
                    </h3>
                    <p>
                        I also started a master degree in cybersecurity, exploring areas such as incident
                        response, secure infrastructure, and threat analysis. Although I do not plan to complete it,
                        the program helped me refine my technical direction and understand the fields I want to focus on.
                        It wasn&apos;t a failure for me, it showed me the path that I want to follow, keep myself always learning on my way
                    </p>
                    <Image className="md:hidden" src={"/campusInternacionalCiberseguridad.jpg"} width={325} height={325} alt="Campus's logo" />
                    <Image className="hidden md:block" src={"/campusInternacionalCiberseguridad.jpg"} width={500} height={500} alt="Campus's logo" />

                </article>

            </section>



        </main>
    )
}