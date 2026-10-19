import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/content';

export const metadata = {
  title: 'Work',
  description: 'Selected web and mobile projects by Niroshan.',
};

const Work = async () => {
  const projects = await getProjects();
  return (
    <section className="container mx-auto py-12 fade-up">
      <h1 className="h2 mb-2">
        My <span className="text-accent">work</span>
      </h1>
      <p className="text-white/60 mb-10 max-w-[600px]">
        A selection of websites, platforms and apps I&apos;ve designed and built.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
