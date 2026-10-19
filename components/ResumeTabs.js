'use client';

import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import SkillIcon from '@/components/SkillIcon';

const Heading = ({ children }) => <h2 className="text-4xl font-bold">{children}</h2>;
const Intro = ({ children }) => (
  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{children}</p>
);

const ResumeTabs = ({ settings, experience, education, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <h1 className="sr-only">Resume</h1>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <Heading>My Experience</Heading>
                <Intro>{settings.experienceIntro}</Intro>
                <div className="border-l-2 border-accent/20 ml-2 space-y-12 pb-2 text-left">
                  {experience.map((job) => (
                    <div key={`${job.company}-${job.date}`} className="relative pl-8 md:pl-12 group">
                      <span className="absolute -left-[9px] top-0 h-[16px] w-[16px] rounded-full border-2 border-accent bg-[#1c1c22] group-hover:bg-accent transition-colors duration-300" />
                      <div className="flex flex-col gap-2">
                        <span className="text-accent text-sm md:text-base font-semibold tracking-wide">
                          {job.date}
                        </span>
                        <h3 className="text-xl font-bold leading-tight">{job.title}</h3>
                        <div className="flex items-center gap-2 text-white/60 mb-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-sm">{job.company}</p>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed max-w-[90%]">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <Heading>My Education</Heading>
                <Intro>{settings.educationIntro}</Intro>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.map((school) => (
                      <li
                        key={school.degree}
                        className="bg-[#232329] min-h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{school.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{school.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] inline-block rounded-full bg-accent" />
                          <p className="text-white/60">{school.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <Heading>My Skills</Heading>
                  <Intro>{settings.skillsIntro}</Intro>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            aria-label={skill.name}
                            className="w-full h-40 bg-[#232329] rounded-xl flex justify-center items-center group"
                          >
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              <SkillIcon name={skill.icon} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <Heading>{settings.aboutTitle}</Heading>
                <Intro>{settings.aboutDescription}</Intro>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {settings.aboutInfo.map((item) => (
                    <li key={item.fieldName} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeTabs;
