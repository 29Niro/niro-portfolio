'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiExpress,
  SiNginx,
  SiN8N,
  SiFigma,
} from 'react-icons/si';
import { MdCall } from 'react-icons/md';

const about = {
  title: 'About Me',
  description:
    'I am a full-stack developer with a passion for building high-quality web and mobile applications. I specialize in React, Next.js, and Flutter, and I have experience working with Node.js, Express, and MongoDB. I also have a background in UI/UX design, which allows me to create visually appealing and user-friendly interfaces. I am committed to delivering exceptional results and providing value to my clients.',
  info: [
    { fieldName: 'Name', fieldValue: 'Niroshan Pushparaj' },
    { fieldName: 'Phone', fieldValue: '(+94) 775 139 934' },
    { fieldName: 'Experience', fieldValue: '2+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Sri Lankan' },
    { fieldName: 'Email', fieldValue: '29niro@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
  ],
};

const experience = {
  icon: FaHtml5,
  title: 'My Experience',
  description:
    'I have contributed to production-grade mobile and web applications across healthcare, ticketing, construction, property, and automation domains. My experience spans Flutter, React, Next.js, RESTful APIs, and cloud technologies, working in cross-functional engineering teams to deliver scalable, user-centric solutions.',
  jobs: [
    {
      title: 'Software Engineer',
      company: 'Yarl Ventures (Pvt) Ltd',
      date: 'Feb 2025 - Present',
      description:
        'Developing a comprehensive healthcare mobile platform enabling patients to discover doctors, book appointments, and access remote consultations. Built cross-platform applications using Flutter with native Android/iOS integrations. Implemented appointment workflows, multi-vendor diagnostics, performance optimizations, and mentored junior developers.'
    },
    {
      title: 'Frontend Engineer (Part-Time)',
      company: 'Keture',
      date: 'Oct 2025 - Present',
      description:
        'Enhancing and maintaining client-facing React and Next.js applications. Implementing new modules, optimizing UI/UX flows, and integrating RESTful APIs for real-time data-driven functionality.'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      date: 'Apr 2024 - Present',
      description:
        'Delivering full-stack and mobile solutions for clients using React.js, Next.js, Flutter, Node.js, and Firebase. Projects include dashboards, e-commerce interfaces, internal company tools, and automation pipelines using n8n and cloud services.'
    },
    {
      title: 'Frontend Engineer',
      company: 'Keture',
      date: 'Jun 2024 - Feb 2025',
      description:
        'Developed SaaS platforms including a real-time seat booking system, construction management system, and property listing CMS. Worked with React.js, Redux, Tailwind CSS, Flutter, and RESTful APIs to build scalable, high-performance UI components and admin panels.'
    },
    {
      title: 'Full Stack Developer (Intern)',
      company: 'Silverline IT',
      date: 'Dec 2023 - May 2024',
      description:
        'Built and maintained full-stack features using React.js, Firebase, and Express.js. Implemented RESTful APIs, optimized performance, and collaborated with cross-functional teams to deliver scalable product enhancements.'
    },
    {
      title: 'Trainee Mobile App Developer',
      company: 'DDS Techvira',
      date: 'Jan 2023 - Jul 2023',
      description:
        'Developed cross-platform Flutter applications with Bloc state management. Designed UI/UX with Figma and integrated Firebase for authentication and real-time backend services.'
    }
  ]
};

const education = {
  icon: FaHtml5,
  title: 'My Education',
  description:
    'I hold a degree in "BSc (Hons) in Software Engineering" from University of Kelaniya, where I gained a strong foundation in software engineering principles and hands-on experience in developing innovative applications. My academic journey equipped me with technical expertise in full-stack development, mobile applications, and cloud-based solutions, all of which I apply in my professional projects.',
  schools: [
    {
      institution: 'University of Kelaniya',
      degree: 'BSc (Hons) in Software Engineering',
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
    'I have experience working with a variety of modern technologies across mobile, web, backend, cloud, and automation. Here are some of the key skills I bring to the table:',
  skillList: [
    // Frontend
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },

    // Mobile
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'React Native', icon: <FaReact /> },

    // Backend
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Nginx', icon: <SiNginx /> },

    // Automation & Integrations
    { name: 'n8n Automation', icon: <SiN8N /> },
    { name: 'Twilio Voice & SMS', icon: <MdCall /> },

    // Cloud & DevOps
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Linux (Ubuntu)', icon: <FaLinux /> },
    { name: 'Git & GitHub', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },

    // UI/UX
    { name: 'Figma', icon: <SiFigma /> }
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
                <div className="border-l-2 border-accent/20 ml-2 space-y-12 pb-2">
                  {experience.jobs.map((job, index) => {
                    return (
                      <div key={index} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <span
                          className="absolute -left-[9px] top-0 h-[16px] w-[16px] rounded-full border-2 border-accent bg-[#1c1c22] group-hover:bg-accent transition-colors duration-300"
                        ></span>

                        <div className="flex flex-col gap-2">
                          <span className="text-accent text-sm md:text-base font-semibold tracking-wide">
                            {job.date}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[30px] lg:text-left font-bold leading-tight">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 text-white/60 mb-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-sm">{job.company}</p>
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed max-w-[90%]">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.schools.map((school, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{school.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {school.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] inline-block rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {school.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-40 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div >
    </motion.div >
  );
};

export default Resume;
