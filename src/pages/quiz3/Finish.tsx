import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Lv3 from '/src/assets/images/avatar/level/lv3.png';
import Box3 from '/src/assets/images/complete/box3.png';
import Notice from '/src/assets/images/complete/notice.png';
import BlackBox from '@/component/chatbox/BlackBox';
export default function Finish() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const goRank = () => {
    navigate('/play');
  };
  const handleClick = () => {
    setIsClick(true);
  };
  return (
    <div
      className="flex justify-center w-full h-full bg-[#793A1C] relative"
      onClick={handleClick}
    >
      <div className="absolute w-full h-full z-50"></div>
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div
        className={`w-full flex justify-center max-w-[500px] absolute bottom-[250px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[59%]">
          <img src={Lv3} className="animate-rotate-axis transform-style-3d" />
        </div>
      </div>
      <div className="w-full flex justify-center h-[50%] absolute top-[10%] p-4 max-w-[500px] space-y-4">
        <div className={`w-full transform transition-transform duration-500`}>
          <BlackBox text="단풍 방패도 장착!" />
        </div>
      </div>

      {isClick && (
        <div className="flex flex-col gap-[29%] justify-center items-center absolute w-full h-full bg-[#0000009b] z-[50]">
          <div className="w-[50%] ">
            <img src={Box3} className="w-full" />
          </div>
          <div className="w-[90%] -mb-[10%]">
            <img src={Notice} className="w-full" />
          </div>
          <div
            className="absolute bottom-[5%] text-white text-[1.2rem] cursor-pointer"
            onClick={goRank}
          >
            홈으로
          </div>
        </div>
      )}
    </div>
  );
}
