import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import PortableBody from '@/components/PortableBody';
import { Button } from '@/components/ui/button';
import { getProject } from '@/lib/content';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: project.image ? { images: [project.image] } : undefined,
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <article className="container mx-auto py-12 fade-up max-w-[900px]">
      <Link href="/work" className="text-accent text-sm hover:underline">
        ← All projects
      </Link>
      <p className="mt-6 text-accent">{project.category} project</p>
      <h1 className="h2 mb-6">{project.title}</h1>

      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 960px) 900px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <ul className="flex flex-wrap gap-2 mb-6">
        {project.stack?.map((tech) => (
          <li key={tech} className="rounded-full border border-accent/40 px-3 py-0.5 text-sm text-accent">
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-white/80 leading-relaxed whitespace-pre-line">{project.description}</p>

      {project.caseStudy?.length > 0 && (
        <div className="mt-10">
          <PortableBody value={project.caseStudy} />
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.gallery.map((src) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
              <Image src={src} alt="" fill sizes="(min-width: 768px) 450px, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-4">
        {project.live && (
          <Button asChild size="md">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Live site <BsArrowUpRight />
            </a>
          </Button>
        )}
        {project.github && (
          <Button asChild size="md" variant="outline">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <BsGithub /> Source code
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectPage;
