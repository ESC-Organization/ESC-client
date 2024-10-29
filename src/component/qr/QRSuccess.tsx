import { motion } from 'framer-motion';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
export default function QRSuccess() {
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
            <span className="text-[#14AE5C]">코인</span>
            <span>을 획득하였습니다!</span>
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
