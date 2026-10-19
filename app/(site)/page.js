import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

import { Button } from '@/components/ui/button';
import Social from '@/components/Social';
import Profile from '@/components/Profile';
import Stats from '@/components/Stats';
import RotatingText from '@/components/RotatingText';
import ProjectCard from '@/components/ProjectCard';
import SkillIcon from '@/components/SkillIcon';
import { getSettings, getProjects, getSkills } from '@/lib/content';

const Home = async () => {
  const [s, projects, skills] = await Promise.all([
    getSettings(),
    getProjects({ featuredOnly: true }),
    getSkills(),
  ]);

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
            <div className="text-center xl:text-left order-2 xl:order-none">
              {s.availability && (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm text-accent mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {s.availability}
                </span>
              )}
              <div className="text-xl">{s.role}</div>
              <h1 className="h1 mb-4">
                Hello, I&apos;m
                <br />
                <span className="text-accent">{s.name}</span>
              </h1>
              <p className="text-xl xl:text-2xl mb-4 text-white/90">
                <RotatingText words={s.rotatingRoles} />
              </p>
              <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">{s.heroIntro}</p>

              <div className="flex flex-col gap-6 xl:flex-row items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/work" className="flex items-center gap-2">
                      View my work <BsArrowRight className="text-xl" />
                    </Link>
                  </Button>
                  {s.cv && (
                    <Button asChild size="lg" variant="outline">
                      <a href={s.cv} download className="flex items-center gap-2">
                        <FiDownload className="text-xl" />
                        Download CV
                      </a>
                    </Button>
                  )}
                </div>
                <Social
                  socials={s.socials}
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Profile src={s.profileImage} alt={s.name} />
            </div>
          </div>
        </div>
        <Stats stats={s.stats} />
      </section>

      {skills.length > 0 && (
        <section aria-label="Technologies" className="mt-16 overflow-hidden border-y border-white/10 py-6">
          <div className="marquee flex w-max gap-12 text-4xl text-white/40">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill.name}-${i}`}
                title={skill.name}
                aria-hidden={i >= skills.length}
                className="hover:text-accent transition-colors"
              >
                <SkillIcon name={skill.icon} />
              </span>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="container mx-auto mt-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="h2">
              Featured <span className="text-accent">work</span>
            </h2>
            <Link href="/work" className="text-accent hover:underline">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
