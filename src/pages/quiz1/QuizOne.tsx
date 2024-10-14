import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Correct from './Correct';
import Wrong from './Wrong';
import WhiteBox from '@/component/chatbox/WhiteBox';
export default function QuizOne() {
  const [visibleBox, setVisibleBox] = useState(0);
  const [avatarVisible, setAvatarVisible] = useState(false);
  const scrollRef = useRef(null); // 스크롤을 제어할 ref 생성
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Tracks if the answer is correct or wrong

  // WhiteBox의 대사들
  const dialogues = [
    <>
      <span>내 연구생이 기숙사를 </span>
      <br />
      <span>가서 돌아오지 않는다</span>
    </>,
    <>
      <span>거기 우리에게 꼭 필요한</span>
      <br />
      <span>방호복이 있는데..</span>
    </>,
    <>
      <span>4층에 산다고</span>
      <br />
      <span>했던 거 같은데..</span>
    </>,
    <>
      <span>어디인지 아는가?</span>
    </>,
  ];

  const answers = ['인관', '의관', '예관', '지관'];
  const correctAnswerIndex = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBox((prev) =>
        prev < dialogues.length - 1 ? prev + 1 : dialogues.length - 1
      ); // 최대 배열 길이까지
    }, 1200); // 3초 간격으로 다음 WhiteBox 표시
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, [dialogues.length]);

  useEffect(() => {
    if (visibleBox === 3) {
      // 두 번째 박스가 보일 때
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [visibleBox]);

  // 아바타 이미지 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setAvatarVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswerClick = (index: number) => {
    setActiveAnswer(index); // Set the active answer index
    setIsCorrect(index === correctAnswerIndex);
  };
  const resetQuiz = () => {
    // Reset all states to start the quiz over
    setVisibleBox(0);
    setAvatarVisible(false);
    setActiveAnswer(null);
    setIsCorrect(null);
    window.location.reload();
  };
  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      {isCorrect !== null && (
        <div className="absolute w-full h-full z-50">
          {isCorrect ? <Correct /> : <Wrong onRetry={resetQuiz} />}
        </div>
      )}
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src="/images/bg/bg2.png" />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]">
        <div className="h-full w-full relative">
          <div className="w-full absolute bottom-0 z-50 h-full p-4 flex flex-col gap-4">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`flex items-center justify-center flex-grow text-white w-full text-center rounded-[15px] transition-colors duration-300 ${
                  activeAnswer === index ? 'bg-[#000000]' : 'bg-[#0000007A]'
                }`}
                onClick={() => handleAnswerClick(index)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-full max-w-[500px] absolute bottom-[250px] z-20 transition-transform duration-[2500ms] ${
          avatarVisible ? 'translate-y-0' : 'translate-y-[300px]'
        }`}
      >
        <div className="w-[40%]">
          <img src="/images/avatar/5.png" />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full h-[50%] overflow-y-scroll absolute top-[5%] p-4 max-w-[500px] space-y-4"
      >
        {dialogues.map((text, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500 ${
              visibleBox >= index
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[100px] opacity-0'
            }`}
          >
            <WhiteBox text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
