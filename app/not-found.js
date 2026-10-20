import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <p className="text-accent text-xl">404</p>
      <h1 className="h2">Page not found</h1>
      <p className="text-white/60 max-w-[420px]">The page you are looking for does not exist or has moved.</p>
      <Button asChild size="lg">
        <Link href="/">Back home</Link>
      </Button>
    </main>
  );
}
