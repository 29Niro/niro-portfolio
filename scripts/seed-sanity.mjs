// One-off import of data/seed.js (+ images/CV from /public) into Sanity.
//   1. create .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN
//   2. npm run seed
// Safe to re-run: documents use fixed ids and createOrReplace.
import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';
import { createClient } from '@sanity/client';
import * as seed from '../data/seed.js';

dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2025-01-01', useCdn: false });

const cache = new Map();
async function upload(kind, publicPath) {
  if (!publicPath) return undefined;
  if (cache.has(publicPath)) return cache.get(publicPath);
  const file = path.join('public', publicPath);
  const asset = await client.assets.upload(kind, fs.createReadStream(file), {
    filename: path.basename(file),
  });
  const ref = { _type: kind, asset: { _type: 'reference', _ref: asset._id } };
  cache.set(publicPath, ref);
  return ref;
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const keyed = (arr = []) => arr.map((item, i) => ({ _key: `k${i}`, ...item }));

const docs = [];

const { profileImage, cv, ogImage, ...settings } = seed.siteSettings;
docs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  ...settings,
  stats: keyed(settings.stats),
  socials: keyed(settings.socials),
  aboutInfo: keyed(settings.aboutInfo),
  profileImage: await upload('image', profileImage),
  cv: await upload('file', cv),
  ogImage: await upload('image', ogImage),
});

for (const p of seed.projects) {
  const { slug, image, ...rest } = p;
  docs.push({
    _id: `project-${slug}`,
    _type: 'project',
    ...rest,
    slug: { _type: 'slug', current: slug },
    image: await upload('image', image),
  });
}
seed.experience.forEach((e, i) => docs.push({ _id: `experience-${i + 1}`, _type: 'experience', ...e }));
seed.education.forEach((e, i) => docs.push({ _id: `education-${i + 1}`, _type: 'education', ...e }));
seed.skills.forEach((s) => docs.push({ _id: `skill-${slugify(s.name)}`, _type: 'skill', ...s }));
seed.services.forEach((s) => docs.push({ _id: `service-${s.value}`, _type: 'service', ...s }));
for (const p of seed.posts) {
  const { slug, paragraphs, ...rest } = p;
  docs.push({
    _id: `post-${slug}`,
    _type: 'post',
    ...rest,
    slug: { _type: 'slug', current: slug },
    body: paragraphs.map((text, i) => ({
      _type: 'block', _key: `p${i}`, style: 'normal', markDefs: [],
      children: [{ _type: 'span', _key: `s${i}`, text, marks: [] }],
    })),
  });
}

let tx = client.transaction();
docs.forEach((d) => (tx = tx.createOrReplace(d)));
await tx.commit();
console.log(`Imported ${docs.length} documents into ${projectId}/${dataset}`);
