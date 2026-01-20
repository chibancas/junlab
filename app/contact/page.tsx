import Link from 'next/link'
import './styles.css'
import { GitBranch, Linkedin, Mail, Play } from 'lucide-react'
import { sendContact } from './actions'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <main className='contact flex flex-col gap-5'>
            <h1 className='text-3xl md:text-6xl text-center font-bold'>
                Let&apos;s get in contact!
            </h1>

            <ContactForm/>

            <section className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl w-full text-center'>
                    Also you can find me here!
                </h2>

                <nav className='nav'>
                    <Link href={'#'}>
                        <Linkedin />
                        <span>
                            LinkedIn
                        </span>
                    </Link>
                    <Link href={'#'}>
                        <Mail />
                        <span>
                            Gmail
                        </span>
                    </Link>
                    <Link href={'#'}>
                        <Play />
                        <span>
                            Youtube
                        </span>
                    </Link>
                    <Link href={'#'}>
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
