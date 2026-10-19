import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/content';

export const metadata = {
  title: 'Blog',
  description: 'Notes on web and mobile development, tools and lessons learned.',
};

const fmt = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

const Blog = async () => {
  const posts = await getPosts();
  return (
    <section className="container mx-auto py-12 fade-up">
      <h1 className="h2 mb-2">
        The <span className="text-accent">blog</span>
      </h1>
      <p className="text-white/60 mb-10 max-w-[600px]">Notes on building for the web and mobile.</p>

      {posts.length === 0 ? (
        <p className="text-white/60">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col overflow-hidden">
              {post.coverImage && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3 p-6">
                <time className="text-sm text-accent" dateTime={post.publishedAt}>
                  {fmt(post.publishedAt)}
                </time>
                <h2 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm">{post.excerpt}</p>
                {post.tags?.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/15 px-3 py-0.5 text-xs text-white/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
