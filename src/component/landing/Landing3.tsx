import { motion } from 'framer-motion';
import ShadowBox from '@/component/prolog/ShadowBox';

export default function Landing3() {
  const growVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-second-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <motion.div
        className="items-center"
        initial="hidden"
        animate="visible"
        variants={growVariants}
      >
        <div className="content-wrapper text-center text-white text-[1.8rem]">
          <ShadowBox>
            <span>귀여운 </span>
            <span className="text-[#14AE5C]">원숭이</span>
            <span>들이</span>
            <br />
            <span>조금 이상하다.?!</span>
          </ShadowBox>
          <motion.div className="flex relative mt-12">
            <img
              src="src/assets/images/prolog/monkey.png"
              alt="Monkey"
              className="w-[128px] h-auto mx-auto relative"
            />
            <div className="absolute top-24 left-4">
              <span className="text-[1.5rem]">뀨..?</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
