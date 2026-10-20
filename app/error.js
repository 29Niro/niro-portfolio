'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="h2">Something went wrong</h1>
      <p className="text-white/60 max-w-[420px]">An unexpected error occurred. Please try again.</p>
      <Button size="lg" onClick={() => reset()}>
        Try again
      </Button>
    </main>
  );
}
