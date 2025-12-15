import Link from 'next/link'
import './styles.css'
import { GitBranch, Linkedin, Mail, Play } from 'lucide-react'
import { sendContact } from './actions'

export default function Contact() {
    return (
        <main className='contact flex flex-col gap-5'>
            <h1 className='text-3xl md:text-6xl text-center font-bold'>
                Let&apos;s get in contact!
            </h1>

            <form action={sendContact}
                className='grid grid-cols-1 w-[75vw] bg-gray-300 mx-auto p-3 text-2xl gap-3 border-2 border-gray-400 rounded-lg'>
                <input type="text" name="name" id="name" placeholder='Type your name here' required />
                <input type="email" name="email" id="email" placeholder='Type your email here' required />
                <textarea name="message" id="message" placeholder='Type your message here' required />

                <div id="data-agreement-container" className="flex flex-row flex-wrap items-center justify-center text-center">
                    <label htmlFor="data-agreement" className='w-full'>
                        By checking this box you agree to let me store your data for contact purposes.
                    </label>

                    <span>
                        Yes, I&apos;m agree
                    </span>
                    <input type="checkbox" name="data-agreement" id="data-agreement" className='m-5 md:scale-200' required />

                </div>

                <button type="submit">
                    Send Message
                </button>
            </form>

            <section className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl w-full text-center'>
                    Also you can find me here!
                </h2>

                <nav className='nav'>
                    <Link href={'#'}
                        className='w-25'>
                        <Linkedin />
                        <span>
                            LinkedIn
                        </span>
                    </Link>
                    <Link href={'#'}
                        className='w-25'>
                        <Mail />
                        <span>
                            Gmail
                        </span>
                    </Link>
                    <Link href={'#'}
                        className='w-25'>
                        <Play />
                        <span>
                            Youtube
                        </span>
                    </Link>
                    <Link href={'#'}
                        className='w-25'>
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