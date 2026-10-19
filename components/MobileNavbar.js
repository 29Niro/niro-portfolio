'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links, isActive } from './Navbar';

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger aria-label="Open menu" className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-4xl font-semibold text-accent">
              Niro<span className="text-white blink">_</span>
            </span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-start gap-8" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                isActive(link.path, pathname) ? 'text-accent border-b-2 border-accent' : ''
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
