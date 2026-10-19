import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// Sanity webhook target: POST https://<site>/api/revalidate
// Configure the webhook with the same secret as SANITY_REVALIDATE_SECRET.
export async function POST(req) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: 'Missing SANITY_REVALIDATE_SECRET' }, { status: 500 });
  }
  try {
    const { isValidSignature } = await parseBody(req, secret);
    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }
    revalidateTag('sanity');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
