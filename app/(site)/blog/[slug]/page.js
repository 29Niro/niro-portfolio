import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PortableBody from '@/components/PortableBody';
import { getPost, readingTime } from '@/lib/content';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

const PostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  return (
    <article className="container mx-auto py-12 fade-up max-w-[760px]">
      <Link href="/blog" className="text-accent text-sm hover:underline">
        ← All posts
      </Link>
      <h1 className="h2 mt-6 mb-3">{post.title}</h1>
      <p className="text-white/60 text-sm mb-8">
        <time dateTime={post.publishedAt}>{date}</time> · {readingTime(post.body)} min read
      </p>

      {post.coverImage && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 mb-8">
          <Image src={post.coverImage} alt="" fill priority sizes="760px" className="object-cover" />
        </div>
      )}

      <PortableBody value={post.body} />

      {post.tags?.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li key={t} className="rounded-full border border-white/15 px-3 py-0.5 text-xs text-white/70">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default PostPage;
