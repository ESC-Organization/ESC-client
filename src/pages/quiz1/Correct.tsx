import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar5 from '/src/assets/images/avatar/5.png';
import Finish2 from './Finish2';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar5 from '/src/assets/images/avatar/5.png';
import Finish2 from './Finish2';
import WhiteBox from '@/component/chatbox/WhiteBox';
import { useState } from 'react';
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
          <Finish2 />
        </div>
      )}
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div
        className={`flex justify-center w-full max-w-[500px] absolute bottom-[250px] z-[70] transition-transform duration-[2500ms]`}
      >
        <div className="w-[40%] ">
          <img src={Avatar5} />
        </div>
      </div>
      <div className="w-full overflow-y-scroll absolute top-[70%] z-[70] flex justify-center max-w-[500px] space-y-4">
        {dialogues.map((text, index) => (
          <div key={index}>
            <WhiteBox text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
