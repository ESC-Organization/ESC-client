import { motion } from 'framer-motion';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';

export default function QRFail() {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-[#F2F2F2]">
      <motion.div
        className="content-wrapper text-center text-white text-[1.8rem] 500px:mx-12"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        <AngledMonkeyBox>
          <div className="py-12">
            <span>이미</span>
            <span className="text-[#900B09]"> 지급된 </span>
            <span>코인입니다</span>
            <br />
            <br />
            <span>다른 QR코드를 찾아 다시 시도해주세요</span>
            <br />
            <br />
            <span>
              5초 뒤 메인 화면으로 <br />
              이동합니다..
            </span>
          </div>
        </AngledMonkeyBox>
      </motion.div>
    </div>
  );
}
