import Link from 'next/link'
import './styles.css'
import { GitBranch, Linkedin, Mail, Play } from 'lucide-react'
export default function Contact() {
    return (
        <main className='flex flex-col gap-5'>
            <h1 className='text-3xl text-center'>
                Let&apos;s get in contact!
            </h1>

            <form action="/" method='POST'
                className='grid grid-cols-1 w-[75vw] bg-gray-300 mx-auto p-3 text-2xl gap-3 border-2 border-gray-400 rounded-lg'>
                <input type="text" name="name" id="name" placeholder='Type your name here' />
                <input type="email" name="email" id="email" placeholder='Type your email here' />
                <textarea name="message" id="message" placeholder='Type your message here' />

                <div id="data-agreement-container" className="flex flex-row flex-wrap items-center justify-center text-center">
                    <label htmlFor="data-agreement" className='w-full'>
                        By checking this box you agree to let me store your data for contact purposes.
                    </label>

                    <span>
                        Yes, I&apos;m agree
                    </span>
                    <input type="checkbox" name="data-agreement" id="data-agreement" className='m-5'/>
                    
                </div>

                <button type="submit">
                    Send Message
                </button>
            </form>

            <section className='flex flex-col'>
                <h2 className='text-2xl w-full text-center'>
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