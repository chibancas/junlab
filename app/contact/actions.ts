'use server'

import { redirect } from 'next/navigation'

export async function sendContact(
  prevState: { error?: string },
  formData: FormData
) {

  const name = formData.get('name')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''
  const agreement = formData.get('data-agreement')

  if (name.length < 3 || name.length > 150) {
    return { error: 'Name must be between 3 and 150 characters' }
  }

  if (email.length < 10 || email.length > 250) {
    return { error: 'Name must be between 10 and 250 characters' }
  }

  if (message.length < 10 || message.length > 800) {
    return { error: 'Name must be between 10 and 800 characters' }
  }

  if (!agreement) {
    return { error: 'You must accept the data agreement' }
  }


  const res = await fetch('https://n8n.junlab.es/webhook/junlab', {
    method: 'POST',
    headers: {
      'key_authentication': process.env.N8N_FORM_SECRET!,
    },
    body: formData,
  })

  if (!res.ok) {
    // console.error('Webhook failed with status:', res.status)
    // redirect('/error')
    return {error:'Your data could not be sent. Try again later.'}
  }

  // redirect('/sended')
  return {success:'Your data have been sent. I will get back to you as soon as posible.'}
}
