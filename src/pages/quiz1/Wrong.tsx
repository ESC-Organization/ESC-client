import WhiteBox from '@/component/chatbox/WhiteBox';

interface WrongProps {
  onRetry: () => void; // Define a prop for the retry function
}

const Wrong: React.FC<WrongProps> = ({ onRetry }) => {
  const dialogues = [
    <>
      <span>그 곳이 아닌 거 같네...</span>
      <br />
      <span>우리 지혜로운 연구생을</span>
      <br />
      <span>빨리 찾아주게나!</span>
    </>,
  ];

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src="/images/bg/bg2.png" />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]">
        <div
          className={`flex items-center justify-center text-[1.2rem] p-5 text-white w-full text-center rounded-[15px] bg-[#0000007A]`}
          onClick={onRetry}
        >
          다시
        </div>
      </div>
      <div
        className={`w-full max-w-[500px] absolute bottom-[250px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[40%]">
          <img src="/images/avatar/5.png" />
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
};

export default Wrong;
