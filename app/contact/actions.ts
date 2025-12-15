'use server'

import { redirect } from 'next/navigation'

export async function sendContact(formData: FormData) {
  try {
    const res = await fetch('https://n8n.junlab.es/webhook/junlab', {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) {
      throw new Error('Webhook failed')
    }

    redirect('/error')
  } catch (error) {
    console.error('Error sending contact form:', error)
    redirect('/error')
  }
}
