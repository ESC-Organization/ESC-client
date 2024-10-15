import { motion } from 'framer-motion';
import ShadowBox from '@/component/prolog/ShadowBox';

export default function Landing6() {
  // 배경 회전 애니메이션 설정
  const rotateAnimation = {
    animate: { rotate: [0, 2, -2, 2, -2, 1, -1, 0] },
    transition: {
      repeat: 10,
      duration: 0.5,
      repeatDelay: 1,
    },
  };

  return (
    <div className="flex justify-end items-center h-full relative">
      {/* 배경 애니메이션 */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-fourth-bg.png')`,
        }}
        animate={rotateAnimation.animate}
        transition={rotateAnimation.transition}
      />

      <div className="content-wrapper text-white text-[1.8rem] relative">
        <div className="flex gap-4 flex-col items-end justify-end 500px:mx-8 mt-80">
          <ShadowBox
            backgroundColor="bg-[#404040]"
            borderColor="border-[#606060]"
            topLineBackground="bg-[#808080]"
          >
            <span>???: 살려줘.. </span>
          </ShadowBox>
          <ShadowBox
            backgroundColor="bg-[#404040]"
            borderColor="border-[#606060]"
            topLineBackground="bg-[#808080]"
          >
            <span>여기 </span>
            <span className="text-[#900B09]">원숭이</span>
            <span>가 이상해..</span>
          </ShadowBox>
        </div>
      </div>
    </div>
  );
}
