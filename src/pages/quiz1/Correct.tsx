import Bg2 from '/src/assets/images/bg/bg2.png';
import Finish from './Finish';
import Ncenter from '/src/assets/images/bg/ncenter.png';
import { useState } from 'react';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function Correct() {
  const [showFinish, setShowFinish] = useState(false);

  // WhiteBox의 대사들
  const dialogues = [
    <>
      <span>정말 고맙네! </span>
      <br />
      <span>우리 연구생이 지관에 있었구만!</span>
    </>,
  ];

  return (
    <div
      className="flex justify-center w-full h-full  relative "
      onClick={() => setShowFinish(true)}
    >
      {/* Conditionally render Finish2 only when showFinish is true */}
      {showFinish && (
        <div className="absolute w-full h-full z-[80]">
          <Finish />
        </div>
      )}
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div className="w-full max-w-[500px] absolute bottom-[300px]">
        <div className="relative w-1/2 ml-auto">
          <img src={Ncenter} />
        </div>
      </div>
      <div className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]">
        <AvatarBlackChat
          idx={1}
          props={5}
          name={'교수님'}
          text={'그곳이 아닌것 같네'}
          handleNext={() => setShowFinish(true)}
        />
      </div>
    </div>
  );
}
