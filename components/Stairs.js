import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%',
    // scale: 0.8,
    opacity: 0.5,
    rotate: 0,
  },
  animate: {
    top: '100%',
    // scale: 1,
    opacity: 1,
    // rotate: [0, 360],
  },
  exit: {
    top: ['100%', '0%'],
    // scale: 0.8,
    opacity: 0.3,
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            style={{
              backgroundColor: `hsl(${index * 60}, 100%, 75%)`, 
              borderRadius: '10px', 
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
