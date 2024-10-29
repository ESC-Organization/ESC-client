import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Landing3 from '@/component/landing/Landing3';
import Landing2 from '@/component/landing/Landing2';
import Landing1 from '@/component/landing/Landing1';
import Landing4 from '@/component/landing/Landing4';
import Landing5 from '@/component/landing/Landing5';
import Landing6 from '@/component/landing/Landing6';
import Landing7 from '@/component/landing/Landing7';
import Landing8 from '@/component/landing/Landing8';
import Landing9 from '@/component/landing/Landing9';
import Landing10 from '@/component/landing/Landing10';
import Landing11 from '@/component/landing/Landing11';
import Landing12 from '@/component/landing/Landing12';
import Landing13 from '@/component/landing/Landing13';
import Landing14 from '@/component/landing/Landing14';

export default function Prolog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <Landing1 />,
    <Landing2 />,
    <Landing3 />,
    <Landing4 />,
    <Landing5 />,
    <Landing6 />,
    <Landing7 />,
    <Landing8 />,
    <Landing9 />,
    <Landing10 />,
    <Landing11 />,
    <Landing12 />,
    <Landing13 />,
    <Landing14 />,
  ];

  const slideVariants = {
    initial: { y: '100%', opacity: 0.3 },
    animate: { y: '0%', opacity: 1, transition: { duration: 0.5 } },
    exit: { y: '-100%', opacity: 0.3, transition: { duration: 0.5 } },
  };

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex w-screen h-full overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideVariants}
          className="absolute inset-0"
        >
          {components[currentIndex]}
        </motion.div>

        {currentIndex < components.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-8"
          >
            <img
              src="src/assets/images/prolog/arrow.png"
              alt="Monkey"
              className="w-[20px] h-auto"
            />
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}
