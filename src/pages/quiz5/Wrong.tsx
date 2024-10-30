import React from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar9 from '/src/assets/images/avatar/9.png';
import WhiteBox from '@/component/chatbox/WhiteBox';
interface WrongProps {
  onRetry: () => void; // Define a prop for the retry function
}

const Wrong: React.FC<WrongProps> = ({ onRetry }) => {
  const dialogues = [
    <>
      <span>이 세 대학들은 성균관대처럼</span>
      <br />
      <span>전 세계적으로 인지도 높은 곳들이고,</span>
      <br />
      <span>특히 미국 동부에 위치해 있다고 하던데..</span>
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
          애교심이 그 정도 밖에 안돼?
          <br />
          다시 코인을 모아서 재시도해보도록!
          <br />
          <br />
          <span className="text-[1.5rem]">홈으로</span>
        </div>
      </div>
      <div
        className={`flex justify-center w-full max-w-[500px] absolute bottom-[250px] z-[70] transition-transform duration-[2500ms]`}
      >
        <div className="w-[57%] ">
          <img src={Avatar9} />
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
