import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Bg2 from '../../images/bg/bg2.png';
import Bg3 from '../../images/bg/bg3.png';
import Ncenter from '../../images/bg/ncenter.png';
import Avatar2 from '../../images/avatar/2.png';
import BlackBox from '@/component/chatbox/BlackBox';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function QuizTwo() {
  const [visibleBox, setVisibleBox] = useState(0);
  const scrollRef = useRef(null); // 스크롤을 제어할 ref 생성

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
      <span>
        <span className="text-[red]">4층</span>에 산다고
      </span>
      <br />
      <span>했던 거 같은데..</span>
    </>,
    <>
      <span>어디인지 아는가?</span>
    </>,
  ];

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

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
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

      <div className="p-8 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]">
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
      <div className="w-full h-[50%] scrollbar-hide overflow-y-scroll absolute top-[5%] p-4 max-w-[500px] space-y-4"></div>
    </div>
  );
}
