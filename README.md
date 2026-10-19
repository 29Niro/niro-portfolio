# Niro Portfolio

Next.js 15 (App Router) + Tailwind + Sanity CMS. Deployed on Netlify.

All content (profile, projects, experience, education, skills, services, blog posts) is
edited in Sanity Studio at `/studio`. If Sanity is not configured, the site falls back to
`data/seed.js`, so it always renders.

## One-time CMS setup

1. Create a free project at <https://www.sanity.io/manage> (dataset: `production`).
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. In the Sanity project: **API → Tokens → Add token** with *Editor* rights, and put it in
   `SANITY_API_WRITE_TOKEN` (local only, never commit it).
4. **API → CORS origins**: add `http://localhost:3000` and your production URL, with credentials allowed.
5. Import the existing content (profile, projects, experience, ...) once:

   ```bash
   npm run seed
   ```

6. `npm run dev`, then open <http://localhost:3000/studio> and sign in.

## Netlify

Set these environment variables in Netlify (Site configuration → Environment variables):

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SITE_URL` (e.g. `https://niro-dev.com`)
- `SANITY_REVALIDATE_SECRET` (any random string)
- `GMAIL_USER`, `GMAIL_APP_PASSWORD` (Google app password), optional `CONTACT_TO_EMAIL`: used by the contact form via `/api/contact`

Content refreshes within 60 seconds on its own. For instant updates add a Sanity webhook
(API → Webhooks): URL `https://<your-site>/api/revalidate`, the same secret, trigger on
create/update/delete, projection `{_type}`.

Also add your production URL under CORS origins so `/studio` works there.

## Scripts

- `npm run dev`, `npm run build`, `npm start`
- `npm run seed`: import `data/seed.js` into Sanity (safe to re-run; it overwrites those documents)
