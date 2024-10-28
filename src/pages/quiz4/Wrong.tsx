import React from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar8 from '/src/assets/images/avatar/8.png';
import WhiteBox from '@/component/chatbox/WhiteBox';
interface WrongProps {
  onRetry: () => void; // Define a prop for the retry function
}

const Wrong: React.FC<WrongProps> = ({ onRetry }) => {
  const dialogues = [
    <>
      <span>6각형 고리 모양이고, 탄소와 수소가 절묘하게</span>
      <br />
      <span>배열된 곳이지..새내기들은 이곳에 가서</span>
      <br />
      <span>자주 길을 잃는다고 해...</span>
    </>,
  ];

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] bg-[#661AAF]">
        <div
          className={`relative flex items-center justify-center z-[70] text-[1.2rem] p-5 text-white w-full text-center rounded-[15px] bg-[#0000007A]`}
          onClick={onRetry}
        >
          다시
        </div>
      </div>
      <div
        className={`flex justify-center w-full max-w-[500px] absolute bottom-[250px] z-[70] transition-transform duration-[2500ms]`}
      >
        <div className="w-[57%] ">
          <img src={Avatar8} />
        </div>
      </div>
      <div className="w-full h-[50%] absolute z-[70] top-[10%] p-4 max-w-[500px] space-y-4">
        {dialogues.map((text, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500`}
          >
            <WhiteBox text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrong;
