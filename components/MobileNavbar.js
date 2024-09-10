'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/resume', label: 'Resume' },
  { path: '/work', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-accent">
              Niro<span className="text-white">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-start gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
