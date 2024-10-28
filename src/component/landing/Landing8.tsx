import { motion } from 'framer-motion';

export default function Landing8() {
  const leftToRightVariants = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
    transition: { duration: 3, ease: 'linear' },
  };

  const rightToLeftVariants = {
    initial: { x: '100%' },
    animate: { x: '-100%' },
    transition: { duration: 3, ease: 'linear' },
  };

  return (
    <div className="relative flex justify-center items-center h-full bg-black overflow-hidden">
      <motion.img
        src="src/assets/images/prolog/monkey-moving.png"
        alt="Monkey"
        className="absolute top-[20%] w-[128px] h-auto"
        initial={leftToRightVariants.initial}
        animate={leftToRightVariants.animate}
        transition={leftToRightVariants.transition}
      />

      <motion.img
        src="src/assets/images/prolog/monkey-moving2.png"
        alt="Monkey"
        className="absolute top-[50%] w-[200px] h-auto"
        initial={rightToLeftVariants.initial}
        animate={rightToLeftVariants.animate}
        transition={rightToLeftVariants.transition}
      />
    </div>
  );
}
