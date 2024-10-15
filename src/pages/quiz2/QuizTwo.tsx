import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Bg2 from '../../images/bg/bg2.png';
import Bg3 from '../../images/bg/bg3.png';
import Ncenter from '../../images/bg/ncenter.png';
import Avatar2 from '../../images/avatar/2.png';
import BlackBox from '@/component/chatbox/BlackBox';
import Object from '@/component/answer/Object';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function QuizTwo() {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    0
  );

  const answers = ['성', '균', '관', '대'];
  const handleSelect = (index: number | null) => {
    setSelectedAnswerIndex(index);
    console.log('Selected answer index:', index);
  };
  const showModal = () => {
    setSelectedAnswerIndex(null);
  };
  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      {selectedAnswerIndex == null && (
        <Object
          q="다음 중, 애드워드 리의 본명은?"
          answer={answers}
          onSelect={handleSelect}
        />
      )}
      <div className="absolute w-full h-full z-50">
        <img src={Bg3} />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-[318px]">
        <div className="relative w-1/2 ml-auto">
          <img src={Ncenter} />
        </div>
      </div>

      <div className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]">
        <AvatarBlackChat
          props={1}
          name="영웅이"
          text="이곳이 내가 알던 N센터라고..?"
        />
      </div>
      <div
        className={`w-full flex ml-20 max-w-[500px] absolute bottom-[300px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[20%]">
          <img src={Avatar2} />
        </div>
      </div>
      <div
        onClick={showModal}
        className="flex justify-center text-[1.2rem] w-full h-[10%] absolute bottom-0 text-white z-[90]"
      >
        문제풀기
      </div>
      <div className="w-full h-[50%] scrollbar-hide overflow-y-scroll absolute top-[5%] p-4 max-w-[500px] space-y-4"></div>
    </div>
  );
}
