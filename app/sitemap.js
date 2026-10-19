import { getAllSlugs } from '@/lib/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://niro-dev.com';

export default async function sitemap() {
  const { posts, projects } = await getAllSlugs();
  const now = new Date();
  const staticPaths = ['', '/services', '/resume', '/work', '/blog', '/contact'];
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now })),
    ...projects.map((s) => ({ url: `${SITE_URL}/work/${s}`, lastModified: now })),
    ...posts.map((s) => ({ url: `${SITE_URL}/blog/${s}`, lastModified: now })),
  ];
}
