import Bg2 from '/src/assets/images/bg/bg2.png';
import Avatar5 from '/src/assets/images/avatar/5.png';
import Finish2 from './Finish2';
import WhiteBox from '@/component/chatbox/WhiteBox';
export default function Correct() {
  // WhiteBox의 대사들
  const dialogues = [
    <>
      <span>정말 고맙네! 우리 연구생이 </span>
      <br />
      <span>지관에 있었구만!</span>
    </>,
  ];

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="absolute w-full h-full z-50">
        <Finish2 />
      </div>
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div
        className={`w-full max-w-[500px] absolute bottom-[250px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[40%]">
          <img src={Avatar5} />
        </div>
      </div>
      <div className="w-full h-[50%] overflow-y-scroll absolute top-[25%] p-4 max-w-[500px] space-y-4">
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
}
