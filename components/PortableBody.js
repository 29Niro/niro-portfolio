import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

const builder = createImageUrlBuilder(client);

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={builder.image(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={700}
            className="rounded-xl w-full h-auto"
          />
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3 leading-tight">{children}</h3>,
    normal: ({ children }) => <p className="my-4 text-white/80 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-4 italic text-white/70">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 list-disc pl-6 space-y-1 text-white/80">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal pl-6 space-y-1 text-white/80">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="text-accent underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    code: ({ children }) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">{children}</code>,
  },
};

const PortableBody = ({ value }) => <PortableText value={value} components={components} />;

export default PortableBody;
