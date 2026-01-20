'use server'

import { headers } from "next/headers";

// import { redirect } from 'next/navigation'

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

async function getClientIp() {
  const headerList = headers();
  const forwardedFor = (await headerList).get("x-forwarded-for") ?? "";
  const realIp = (await headerList).get("x-real-ip") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || realIp.trim();
  return ip || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function sendContact(
  prevState: { error?: string },
  formData: FormData
) {

  const name = formData.get('name')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''
  const agreement = formData.get('data-agreement')
  const contactRef = formData.get("contact_ref")?.toString().trim() ?? ""

  const ip = getClientIp();
  if (isRateLimited(await ip)) {
    return { error: "Too many requests. Please wait a minute and try again." };
  }

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

  if (contactRef) {
    return { error: "Your submission could not be verified." };
  }


  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);
  let res: Response;

  try {
    res = await fetch('https://n8n.junlab.es/webhook/junlab', {
      method: 'POST',
      headers: {
        'key_authentication': process.env.N8N_FORM_SECRET!,
      },
      body: formData,
      signal: controller.signal,
    })
  } catch {
    return { error: 'Your data could not be sent. Try again later.' }
  } finally {
    clearTimeout(timeoutId);
  }

  if (!res.ok) {
    // console.error('Webhook failed with status:', res.status)
    // redirect('/error')
    return {error:'Your data could not be sent. Try again later.'}
  }

  // redirect('/sended')
  return {success:'Your data have been sent. I will get back to you as soon as posible.'}
}
