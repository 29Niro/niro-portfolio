'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/resume', label: 'Resume' },
  { path: '/work', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
