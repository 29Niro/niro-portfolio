'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About Me',
  description:
    'I am a full-stack developer with a passion for building high-quality web and mobile applications. I specialize in React, Next.js, and Flutter, and I have experience working with Node.js, Express, and MongoDB. I also have a background in UI/UX design, which allows me to create visually appealing and user-friendly interfaces. I am committed to delivering exceptional results and providing value to my clients.',
  info: [
    { fieldName: 'Name', fieldValue: 'Niroshan Pushparaj' },
    { fieldName: 'Phone', fieldValue: '(+94) 775 139 934' },
    { fieldName: 'Experience', fieldValue: '2+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Srilankan' },
    { fieldName: 'Email', fieldValue: '29niro@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
  ],
};

const experience = {
  icon: FaHtml5,
  title: 'My Experience',
  description:
    'I have worked on a variety of projects, ranging from small business websites to large-scale web applications. I have experience in both front-end and back-end development, and I am comfortable working with modern frameworks and libraries. I am always looking to expand my skill set and take on new challenges.',
  jobs: [
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      date: 'Apr 2024 - Present',
      description:
        'Developed and maintained the front-end of the company’s website using React, Next.js, and Tailwind CSS. Implemented new features and optimized performance to enhance the user experience.',
    },
    {
      title: 'Front-End Engineer',
      company: 'Keture',
      date: 'Jun 2024 - Present',
      description:
        'Developed and maintained the front-end of the company’s website using React, Next.js, and Tailwind CSS. Implemented new features and optimized performance to enhance the user experience.',
    },
    {
      title: 'Front-End Developer',
      company: 'Silverline IT',
      date: 'Dec 2023 - May 2024',
      description:
        'Developed and maintained the front-end of the company’s website using React, Next.js, and Tailwind CSS. Implemented new features and optimized performance to enhance the user experience.',
    },
    {
      title: 'Flutter Developer',
      company: 'DDS Techvira',
      date: 'Jan 2023 - Jul 2023',
      description:
        'Built and maintained the back-end of the company’s web application using Node.js, Express, and MongoDB. Designed and implemented RESTful APIs to support the front-end functionality.',
    },
  ],
};

const education = {
  icon: FaHtml5,
  title: 'My Education',
  description:
    'I have worked on a variety of projects, ranging from small business websites to large-scale web applications. I have experience in both front-end and back-end development, and I am comfortable working with modern frameworks and libraries. I am always looking to expand my skill set and take on new challenges.',
  jobs: [
    {
      institution: 'University of Kelaniya',
      degree: 'Bachelor of Science in Software Engineering',
      duration: 'Feb 2020 - Apr 2024',
    },
    {
      institution: 'V/Vavuniya Tamil M.M.V',
      degree: 'Advanced Level',
      duration: 'Jan 2017 - Dec 2018',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'I have experience working with a variety of technologies and tools. Here are some of the key skills that I bring to the table:',
  skillList: [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Figma', icon: FaFigma },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.jobs.map((job, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{job.date}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{job.title}</h3>
                          <div>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{job.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
