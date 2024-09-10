'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' },
        }}
        className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
      />
    </AnimatePresence>
  );
};

export default PageTransition;
