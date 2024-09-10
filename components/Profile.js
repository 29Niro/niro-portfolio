'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: 'easeIn',
          },
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: 'easeInOut',
            },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/profile.png"
            alt="Profile Picture"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" // Added 'absolute' to ensure positioning is correct
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00d9ff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: '0 1000',
              opacity: 0.5,
            }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              strokeWidth: '4',
              rotate: [0, 180, 360],
              opacity: [0.8, 1, 0.6],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Profile;
