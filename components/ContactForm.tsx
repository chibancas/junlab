'use client'
import { sendContact } from "@/app/contact/actions"
import { useActionState } from "react"

type FormState = {
    error?: string,
    success?: string
}
export default function ContactForm() {
    const [state, action] = useActionState<FormState, FormData>(
        sendContact,
        {}
    )

    return (
        <form action={action}
            className='grid grid-cols-1 w-full max-w-2xl bg-gray-300 mx-auto p-3 text-xl sm:text-2xl gap-3 border-2 border-gray-400 rounded-lg'>
            <input type="text" name="name" id="name" placeholder='Type your name here' maxLength={150} minLength={3} required />
            <input type="email" name="email" id="email" placeholder='Type your email here' maxLength={250} minLength={10} required />
            <textarea name="message" id="message" placeholder='Type your message here' maxLength={800} minLength={10} required />

            <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact_ref">Contact reference</label>
                <input
                    type="text"
                    name="contact_ref"
                    id="contact_ref"
                    tabIndex={-1}
                    autoComplete="off"
                    inputMode="none"
                />
            </div>

            <div id="data-agreement-container" className="flex flex-row flex-wrap items-center justify-center text-center">
                <label htmlFor="data-agreement" className='w-full'>
                    By checking this box you agree to let me store your data for contact purposes.
                </label>

                <span>
                    Yes, I agree.
                </span>
                <input type="checkbox" name="data-agreement" id="data-agreement" className='m-5 md:scale-200' required />

            </div>

            {/* 🔴 ERROR */}
            {state?.error && (
                <p className="text-red-500 text-center text-lg md:text-xl">
                    {state.error}
                </p>
            )}

            {/* 🟢 SUCCESS */}
            {state?.success && (
                <p className="text-green-600 text-center text-lg md:text-xl">
                    {state.success}
                </p>
            )}

            <button type="submit">
                Send Message
            </button>
        </form>
    )
}
