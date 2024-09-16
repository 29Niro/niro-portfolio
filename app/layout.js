import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Niroshan | Full-Stack Software Engineer | Web & Mobile Solutions',
  description:
    'Niroshan is a full-stack software engineer specializing in web and mobile application development, offering tailored solutions for businesses with a focus on performance, scalability, and mobile responsiveness.',
  keywords:
    'Niroshan, software engineer, full-stack developer, web development, mobile app development, React, Flutter, Tailwind CSS, JavaScript, SEO, cloud computing, custom solutions',
  openGraph: {
    type: 'website',
    url: 'http://niro-dev.com/',
    title: 'Niroshan | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: '/assets/og-image.png',
        height: 630,
        alt: 'Niroshan - Full-Stack Software Engineer',
      },
    ],
  },
  LinkedIn: {
    title: 'Niroshan | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Niroshan - Full-Stack Software Engineer',
      },
    ],
  },
  Facebook: {
    title: 'Niroshan | Full-Stack Software Engineer',
    description:
      'Specializing in full-stack web and mobile app development, delivering high-performance and scalable solutions.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Niroshan - Full-Stack Software Engineer',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
