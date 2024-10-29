import { motion } from 'framer-motion';
import ShadowBox from '@/component/prolog/ShadowBox';

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
        <ShadowBox>
          <span>율전을 지켜낼</span>
          <br />
          <span className="text-[#14AE5C]">영웅</span>
          <span>이 필요하다!!</span>
        </ShadowBox>
      </motion.div>
    </div>
  );
}
