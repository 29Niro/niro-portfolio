import { client } from '@/sanity/lib/client';
import { hasSanity } from '@/sanity/env';
import * as seed from '@/data/seed';

// Every getter reads from Sanity when NEXT_PUBLIC_SANITY_PROJECT_ID is set and
// falls back to data/seed.js when it is missing, empty or unreachable, so the
// site always renders.

const REVALIDATE = 60;

async function query(groq, params = {}) {
  if (!hasSanity) return null;
  try {
    return await client.fetch(groq, params, {
      next: { revalidate: REVALIDATE, tags: ['sanity'] },
    });
  } catch (err) {
    console.error('[sanity] fetch failed, using fallback:', err.message);
    return null;
  }
}

const isEmpty = (v) => v == null || (Array.isArray(v) && v.length === 0);

const toBlocks = (paragraphs = []) =>
  paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `p${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `s${i}`, text, marks: [] }],
  }));

export async function getSettings() {
  const data = await query(`*[_type == "siteSettings"][0]{
    ...,
    "profileImage": profileImage.asset->url,
    "ogImage": ogImage.asset->url,
    "cv": cv.asset->url
  }`);
  return { ...seed.siteSettings, ...Object.fromEntries(Object.entries(data || {}).filter(([, v]) => !isEmpty(v))) };
}

const projectFields = `
  title, "slug": slug.current, category, summary, description, stack, live, github, featured, order,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  caseStudy
`;

export async function getProjects({ featuredOnly = false } = {}) {
  const filter = featuredOnly ? ' && featured == true' : '';
  const data = await query(`*[_type == "project"${filter}] | order(order asc){${projectFields}}`);
  if (!isEmpty(data)) return data;
  return featuredOnly ? seed.projects.filter((p) => p.featured) : seed.projects;
}

export async function getProject(slug) {
  const data = await query(`*[_type == "project" && slug.current == $slug][0]{${projectFields}}`, { slug });
  return data || seed.projects.find((p) => p.slug === slug) || null;
}

export async function getExperience() {
  const data = await query(`*[_type == "experience"] | order(order asc)`);
  return isEmpty(data) ? seed.experience : data;
}

export async function getEducation() {
  const data = await query(`*[_type == "education"] | order(order asc)`);
  return isEmpty(data) ? seed.education : data;
}

export async function getSkills() {
  const data = await query(`*[_type == "skill"] | order(order asc)`);
  return isEmpty(data) ? seed.skills : data;
}

export async function getServices() {
  const data = await query(`*[_type == "service"] | order(order asc)`);
  return isEmpty(data) ? seed.services : data;
}

const postFields = `title, "slug": slug.current, publishedAt, excerpt, tags, "coverImage": coverImage.asset->url`;

export async function getPosts() {
  const data = await query(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${postFields}}`);
  if (!isEmpty(data)) return data;
  return hasSanity ? [] : seed.posts.map(({ paragraphs, ...p }) => p);
}

export async function getPost(slug) {
  const data = await query(
    `*[_type == "post" && slug.current == $slug][0]{${postFields}, body}`,
    { slug }
  );
  if (data) return data;
  const p = seed.posts.find((x) => x.slug === slug);
  return p && !hasSanity ? { ...p, body: toBlocks(p.paragraphs) } : null;
}

export async function getAllSlugs() {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()]);
  return { posts: posts.map((p) => p.slug), projects: projects.map((p) => p.slug) };
}

export function readingTime(body = []) {
  const words = body
    .filter((b) => b._type === 'block')
    .map((b) => b.children?.map((c) => c.text).join(' ') || '')
    .join(' ')
    .split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
