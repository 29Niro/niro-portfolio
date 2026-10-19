import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="card group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute top-3 left-3 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs text-accent">
          {project.category}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <BsArrowUpRight className="mt-1 shrink-0 text-xl text-white/60 group-hover:text-accent transition-colors" />
        </div>
        <p className="text-white/60 text-sm leading-relaxed">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack?.map((tech) => (
            <li key={tech} className="rounded-full border border-white/15 px-3 py-0.5 text-xs text-white/70">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
