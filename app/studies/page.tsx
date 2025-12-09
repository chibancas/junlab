import { School } from "lucide-react";
import "./styles.css";
import Image from "next/image";

export default function Studies() {
    return (
        <main className="px-4">
            <h1 className="text-center w-full text-3xl">
                What did I study?
                <School />
            </h1>

            <section className="grid grid-cols-1 place-items-center
            p-2.5 
            gap-5
            " >
                <article>
                    <h2>
                        Intermediate Vocational Training
                        <br />
                        Microcomputer Systems & Networks
                    </h2>
                    <span>
                        IES Cura Valera ( 20220-2022 )
                    </span>
                    <p>
                        I completed an Intermediate Vocational Training program in Microcomputer Systems and Networks.
                        This is a practical, hands-on program where I focused on computer hardware,
                        operating systems, local networks, and basic IT support. It gave me a strong technical base
                        very early in my career.
                    </p>
                    <Image src={"/aeroView.jpeg"} width={325} height={325} alt="Partial view of IES Cura Valera's buildings." />
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
                    </p>
                    <Image src={"/aeroViewPalmtree.jpeg"} width={325} height={325} alt="Partial view of the IES Cura Valera's yard." />
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
                    <Image src={"/campusInternacionalCiberseguridad.jpg"} width={325} height={325} alt="Campus's logo" />

                </article>

            </section>



        </main>
    )
}