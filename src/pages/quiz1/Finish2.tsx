import { useNavigate } from 'react-router-dom';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
export default function Finish2() {
  const navigate = useNavigate();
  const goRank = () => {
    navigate('/');
  };
  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="absolute w-full h-full z-50"></div>
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div
        className={`w-full flex justify-center max-w-[500px] absolute bottom-[250px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[40%]">
          <img
            src={Avatar2}
            className="animate-rotate-axis transform-style-3d"
          />
        </div>
      </div>
      <div className="w-full flex justify-center h-[50%] absolute top-[10%] p-4 max-w-[500px] space-y-4">
        <div className={`w-full transform transition-transform duration-500`}>
          <div className=" bg-[#D9D9D9] mx-auto my-0 p-8 rounded-[30px] w-[80%] text-center mb-3 text-[1.5rem]">
            방호복 획득!
          </div>
        </div>
      </div>

      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-70 bg-[#661AAF]">
        <div
          className={`relative z-[70] flex items-center justify-center text-[1.2rem] p-5 text-white w-full text-center rounded-[15px] bg-[#0000007A]`}
          onClick={goRank}
        >
          랭킹보기
        </div>
      </div>
    </div>
  );
}
