'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';

import Link from 'next/link';
import Image from 'next/image';

import WorkSliderButtons from '@/components/ui/WorkSliderButtons';

const projects = [
  {
    num: '01',
    title: 'Nivez Bridal',
    category: 'Frontend',
    description:
      'The project "nivezbridal.com" is a fully responsive landing website developed for a bridal service business. Built using React and Tailwind CSS, it showcases the business\'s services and portfolio in an elegant and modern design. The website features seamless navigation, user-friendly layouts, and is optimized for both desktop and mobile devices. Integrated with EmailJS, it allows potential clients to easily contact the service for bookings and inquiries, ensuring a smooth user experience.',
    stack: [{ name: 'React' }, { name: 'Tailwind CSS' }, { name: 'Email JS' }],
    image: '/assets/work/nivez-bridal.png',
    live: 'https://www.nivezbridal.com/',
    github: 'https://github.com/29Niro/nivez-bridal',
  },
  {
    num: '02',
    title: 'Devi Web',
    category: 'Frontend',
    description:
      'The project "deviweb.com" is a modern, fully responsive website designed to showcase professional services and digital solutions. Developed using cutting-edge technologies like React and Tailwind CSS, the site offers a sleek, user-friendly interface optimized for both desktop and mobile devices. With seamless navigation and intuitive layouts, "deviweb.com" effectively highlights key services, portfolio items, and client testimonials. Integrated with various interactive features, it ensures visitors can easily engage with the business, explore offerings, and make inquiries via integrated contact forms.',
    stack: [{ name: 'React' }, { name: 'Tailwind CSS' }, { name: 'Email JS' }],
    image: '/assets/work/devi-web.png',
    live: 'https://www.deviweb.com/',
    github: 'https://github.com/29Niro/react-landing-page',
  },
  {
    num: '03',
    title: 'Capture Rings',
    category: 'Fullstack',
    description: 'The project "Capture Rings" is a comprehensive studio management website designed to streamline customer interactions and showcase the studio’s work. Customers can easily book time slots for photography sessions, purchase images, and browse through the showcased galleries. The platform features an admin panel where the studio can upload new galleries, manage blogs, and handle bookings. The user-facing side of the site is optimized for a smooth and engaging experience, making it easy for clients to explore services and make purchases. ',
    stack: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Firebase' },
      { name: 'Email JS' },
    ],
    image: '/assets/work/capture-rings.png',
    live: 'https://29niro.github.io/capture-rings/',
    github: 'https://github.com/29Niro/capture-rings',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul>
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index < project.stack.length - 1 && ', '}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5} side="top" align="center">
                        <p>live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5} side="top" align="center">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-2xl w-11 h-11 rounded-full flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
