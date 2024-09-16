'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname, useRouter } from 'next/navigation'; // useRouter added
import { useEffect, useState } from 'react'; // useState, useEffect added
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
  const router = useRouter(); // Get router instance
  const [isOpen, setIsOpen] = useState(false); // Track the state of the sheet

  useEffect(() => {
    // Close the drawer when the route changes
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events?.on('routeChangeComplete', handleRouteChange); // Listen for route changes

    // Cleanup the event listener
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(!isOpen)} // Toggle sheet state
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-accent">
              Niro<span className="text-white blink">_</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-start gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && 'text-accent border-b-2 border-accent'
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={() => setIsOpen(false)} // Close the sheet when a link is clicked
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
