import Link from 'next/link'
import './styles.css'
import { BriefcaseBusiness, GitBranch, Mail, Play } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <main className='contact flex flex-col gap-5'>
            <h1 className='text-3xl md:text-6xl text-center font-bold'>
                Let&apos;s get in contact!
            </h1>

            <ContactForm />

            <section className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl w-full text-center'>
                    Also you can find me here!
                </h2>

                <nav className='nav'>
                    <Link href={'#'}>
                        <BriefcaseBusiness />
                        <span>
                            LinkedIn
                        </span>
                    </Link>
                    <Link href={'mailto:jj.ff.tecno@gmail.com?subject=Contact%20Form%20%7C%20Junlab&body=Hey%2C%20I%20just%20saw%20your%20web%20and%20I%27d%20like%20to%20get%20in%20touch.'}
                        className='w-25'>
                    <Link href={'#'}>
                        <Mail />
                        <span>
                            Gmail
                        </span>
                    </Link>
                    <Link href={'https://www.youtube.com/@chibancas'}>
                        <Play />
                        <span>
                            Youtube
                        </span>
                    </Link>
                    <Link href={'https://github.com/chibancas/'}>
                        <GitBranch />
                        <span>
                            Github
                        </span>
                    </Link>
                </nav>
            </section>
        </main>
    )
}
