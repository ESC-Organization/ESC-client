import React from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar7 from '/src/assets/images/avatar/7.png';
import WhiteBox from '@/component/chatbox/WhiteBox';
interface WrongProps {
  onRetry: () => void; // Define a prop for the retry function
}

const Wrong: React.FC<WrongProps> = ({ onRetry }) => {
  const dialogues = [
    <>
      <span>
        자네,
        <br /> 루피가 보물을 찾기 위해 여행을
      </span>
      <br />
      <span>떠나는 애니메이션을 모르는거야?</span>
      <br />
      <span>이래서 일반인들이란..</span>
    </>,
  ];

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-4 max-w-[500px] absolute bottom-0 h-[250px] bg-[#661AAF]">
        <div
          className={`relative flex flex-col items-center justify-center z-[70] text-[1rem] p-5 text-white w-full text-center rounded-[15px] bg-[#0000007A]`}
          onClick={onRetry}
        >
          야레 야레!
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
          <img src={Avatar7} />
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
