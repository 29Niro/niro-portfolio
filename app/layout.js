import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { getSettings } from '@/lib/content';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://niro-dev.com';

export async function generateMetadata() {
  const s = await getSettings();
  const og = s.ogImage?.startsWith('http') ? s.ogImage : `${SITE_URL}${s.ogImage || '/assets/og-image.png'}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: s.seoTitle, template: `%s | ${s.name}` },
    description: s.seoDescription,
    keywords:
      'Niroshan, software engineer, full-stack developer, web development, mobile app development, React, Next.js, Flutter, Tailwind CSS, Sri Lanka',
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      url: SITE_URL,
      siteName: s.name,
      title: s.seoTitle,
      description: s.seoDescription,
      images: [{ url: og, width: 1200, height: 630, alt: `${s.name} - ${s.role}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.seoTitle,
      description: s.seoDescription,
      images: [og],
    },
  };
}

export default async function RootLayout({ children }) {
  const s = await getSettings();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Niroshan Pushparaj',
    url: SITE_URL,
    jobTitle: s.role,
    description: s.seoDescription,
    email: s.email ? `mailto:${s.email}` : undefined,
    address: s.address ? { '@type': 'PostalAddress', addressLocality: s.address } : undefined,
    sameAs: s.socials?.map((x) => x.url),
  };
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RNGZK6KHHQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RNGZK6KHHQ');`}
        </Script>
      </head>
      <body className={jetbrainsMono.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
