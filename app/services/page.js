'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    href: '/services/web-development',
    description:
      'I build custom, mobile-responsive websites using React, Next.js, and Tailwind CSS. My solutions are optimized for performance, security, and scalability.',
  },
  {
    num: '02',
    title: 'Mobile Development',
    href: '/services/mobile-development',
    description:
      'I create high-performance mobile applications using Flutter, delivering seamless experiences on both Android and iOS. I also offer expertise in React Native for cross-platform solutions.',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    href: '/services/ui-ux-design',
    description:
      'I design user-friendly and conversion-optimized interfaces using Figma, ensuring an engaging and intuitive experience for your users.',
  },
  {
    num: '04',
    title: 'SEO',
    href: '/services/seo',
    description:
      'I specialize in technical SEO, optimizing your site’s structure and performance to ensure better visibility and ranking on search engines.',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60'>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
