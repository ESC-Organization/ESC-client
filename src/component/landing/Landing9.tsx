import { motion } from 'framer-motion';
import ShadowBox from '../prolog/ShadowBox';

export default function Landing8() {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className="relative flex justify-center items-center h-full bg-black overflow-hidden">
      <motion.div
        className="content-wrapper text-center text-white text-[1.8rem]"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        <ShadowBox
          backgroundColor="bg-[#404040]"
          borderColor="border-[#606060]"
          topLineBackground="bg-[#808080]"
        >
          <span className="text-[#900B09]">위험</span>
          <span>에 빠진 </span>
          <span>율전 캠퍼스</span>
        </ShadowBox>
      </motion.div>
    </div>
  );
}
