'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/resume', label: 'Resume' },
  { path: '/work', label: 'Work' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export const isActive = (path, pathname) =>
  path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8" aria-label="Main">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          aria-current={isActive(link.path, pathname) ? 'page' : undefined}
          className={`${
            isActive(link.path, pathname) ? 'text-accent border-b-2 border-accent' : ''
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
