import React from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar6 from '/src/assets/images/avatar/6.png';
import WhiteBox from '@/component/chatbox/WhiteBox';
interface WrongProps {
  onRetry: () => void; // Define a prop for the retry function
}

const Wrong: React.FC<WrongProps> = ({ onRetry }) => {
  const dialogues = [
    <>
      <span>이봐, 아직 갈 길이 멀어.</span>
      <br />
      <span>
        내 30년 연구 경력의 <span className="text-[red]">길이</span>가
      </span>
      <br />
      <span>이렇게 허무할 리 없지 않나?</span>
    </>,
  ];

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] bg-[#661AAF]">
        <div
          className={`relative flex flex-col items-center justify-center z-[70] text-[1rem] p-5 text-white w-full text-center rounded-[15px] bg-[#0000007A]`}
          onClick={onRetry}
        >
          내 대사에 힌트가 있어..!
          <br />
          다시 코인을 모아서 재시도해보도록!
          <br />
          <br />
          <span className="text-[1.5rem]">다시</span>
        </div>
      </div>
      <div
        className={`flex justify-center w-full max-w-[500px] absolute bottom-[250px] z-[70] transition-transform duration-[2500ms]`}
      >
        <div className="w-[57%] ">
          <img src={Avatar6} />
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
