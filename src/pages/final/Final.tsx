import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import Fullitem from '/src/assets/images/avatar/11.png';
import Knight from '/src/assets/images/avatar/12.png';
import Dido from '/src/assets/images/items/library_dark.png';
import Dido_mon from '/src/assets/images/items/dido_mon.png';
import Monkey_dark1 from '/src/assets/images/items/monkey_dark1.png'; 
import Monkey_dark2 from '/src/assets/images/items/monkey_dark2.png';
import Monkey_light from '/src/assets/images/items/monkey_light.png';
import AttackPng from '/src/assets/images/attack/slash.png';

import TopBar from '@/component/bar/TopBar';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import GameOverlay from '@/component/GameOverlay';

export default function Final() {
  const navigate = useNavigate();

  const [idx, setIdx] = useState<number>(1); 
  const [overlayStatus, setOverlayStatus] = useState<'start' | 'clear' | 'over' | null>(null); // 초기 상태를 null로 설정
  const [attackEffect, setAttackEffect] = useState<{ left: string; top: string } | null>(null);

  const [gameClear, setGameClear] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const dialogues = [
    {
      idx: 1,
      props: 0,
      name: ' ',
      text: '어라..?\n‘미르미’의 아이템들이 반응하기 시작했다..!',
    },
    {
      idx: 2,
      props: 0,
      name: ' ',
      text: '미르미는 정보처리기사로 전직했다!',
    },
    {
      idx: 3,
      props: 0,
      name: '[미션]',
      text: '기사님! \n율전을 점령하려는 버그 원숭이를 처치하고 \n 영웅이 되어주세요!',
    },
    {
      idx: 4,
      props: 0,
      name: '[미션]',
      text: '무작위로 움직이는 버그 원숭이들을 모두 터치해주세요! \n\n단, 귀여운 숭이는 공격해서는 안됩니다.',
    },
  ];
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);

    console.log('Next idx:', nextIdx);
    if (nextIdx > dialogues.length) {
      console.log('finish');
    }
  };

  const [monkeyStatus, setMonkeyStatus] = useState([
    { type: 'dark', x: '10%', y: '50%', active: true },
    { type: 'dark', x: '50%', y: '20%', active: true },
    { type: 'light', x: '90%', y: '50%', active: true },
  ]);

  // 원숭이 위치를 무작위로 설정
  const randomizeMonkeyPositions = () => {
    setMonkeyStatus((prevStatus) =>
      prevStatus.map((monkey) => ({
        ...monkey,
        x: `${Math.random() * 80 + 10}%`,
        y: `${Math.random() * 80 + 10}%`,
      }))
    );
  };

  const handleMonkeyClick = (index: number) => {
    const clickedMonkey = monkeyStatus[index];

    if (clickedMonkey.type === 'light') {
      setGameOver(true);
      setOverlayStatus('over'); // 빛 원숭이를 누르면 오버레이 상태를 over로
    } else {
      setAttackEffect({ left: clickedMonkey.x, top: clickedMonkey.y });
      setMonkeyStatus((prevStatus) =>
        prevStatus.map((monkey, i) => (i === index ? { ...monkey, active: false } : monkey))
      );
      if (monkeyStatus.filter((monkey) => monkey.active && monkey.type === 'dark').length === 1) {
        setGameClear(true);
        setOverlayStatus('clear'); // 모든 어두운 원숭이를 제거하면 오버레이 상태를 clear로
      }
      setTimeout(() => setAttackEffect(null), 500);
    }
  };

  useEffect(() => {
    if (idx === 5) {
      setOverlayStatus('start'); // 게임 시작 오버레이 표시
    }
  }, [idx]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (idx === 5 && !overlayStatus) {
      intervalId = setInterval(randomizeMonkeyPositions, 800);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [idx, overlayStatus]);

  useEffect(() => {
    if (idx === 5 && !gameClear) {
      const timer = setTimeout(() => {
        if (!gameClear) {
          setGameOver(true);
          setOverlayStatus('over');
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [idx, gameClear]);


  const handleRetry = () => {
    console.log("Retry clicked");
    setIdx(4); 
    setOverlayStatus(null);
    setGameOver(false);
    setGameClear(false);
    setMonkeyStatus([
      { type: 'dark', x: '10%', y: '50%', active: true },
      { type: 'dark', x: '50%', y: '20%', active: true },
      { type: 'light', x: '90%', y: '50%', active: true },
    ]);
  };

  const handleEnd = () => {
    console.log("End clicked");
    navigate('/ending');
  };

  return (
    <div className="relative flex justify-center w-full h-full bg-[#793A1C]">
    {overlayStatus && (
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 py-10 z-50">
        {/* 배경 이미지와 오버레이 컴포넌트를 같은 부모 안에 둠 */}
        <img src={Bg3} className="absolute inset-0 object-cover w-full h-full z-0"/>
        
        {/* GameOverlay 컴포넌트 위에 텍스트 추가 */}
        <GameOverlay status={overlayStatus} onFinish={() => setOverlayStatus(null)} />
        <div className="flex flex-col items-center mt-10 z-10">
          {overlayStatus === 'over' && (
            <button
              onClick={handleRetry}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 cursor-pointer mt-4"
            >
              다시 플레이
            </button>
          )}
          {overlayStatus === 'clear' && (
            <button
              onClick={handleEnd}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 cursor-pointer mt-4"
            >
              엔딩 보기
            </button>
          )}
        </div>
      </div>
    )}
      <TopBar />
      {/* 일반 화면 배경 */}
      {!overlayStatus && (
        <div className="z-10">
          <img src={Bg3} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] bg-[#661AAF]"></div>
      
      {idx < 5 && (
        <>
          {/* 캐릭터 아바타 */}
          <div className="w-full flex justify-center max-w-[500px] absolute bottom-[360px] z-50">
            <div className="w-[50%]">
              {idx === 1 ? (
                <img src={Fullitem} className="animate-rotate-axis transition-transform duration-[2500ms] transform-style-3d"/>
              ) : idx === 2 ? (
                <img src={Knight} className="animate-sparkle transform-style-3d"/>
              ) : idx === 3 ? (
                <img src={Dido_mon} className=""/>
              ) : (
                <img src={Dido} className=""/>
              )}
            </div>
          </div>

          {/* idx가 4일 때, 원숭이 세 마리 */}
          {idx === 4 && (
            <div className="absolute w-full h-full z-50">
              <img
                src={Monkey_dark1}
                className="absolute bottom-2/4 left-10 sm:left-10 md:left-20 w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48"
                alt="원숭이 1"
              />
              <img
                src={Monkey_dark2}
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48"
                alt="원숭이 2"
              />
              <img
                src={Monkey_light}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48"
                alt="원숭이 3"
              />
            </div>
          )}  
          <div className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]"
              style={{ whiteSpace: 'pre-line' }}>
                {currentDialogue && (
                  <AvatarBlackChat
                    idx={currentDialogue.idx}
                    props={currentDialogue.props}
                    name={currentDialogue.name}
                    text={currentDialogue.text}
                    handleNext={() => handleNext(idx)}
                  />
                )}
          </div>
        </>
      )}
      {idx === 5 && !overlayStatus && !gameOver && !gameClear && (
        <div className="absolute w-full h-full z-50">
          <div className="absolute bottom-5 left-5 z-50 w-[200px] h-[200px] sm:w-[150px] sm:h-[150px]">
            <img src={Knight} className="object-contain scale-x-[-1]" alt="Knight" />
          </div>
          {monkeyStatus.map(
            (monkey, index) =>
              monkey.active && (
                <img
                  key={index}
                  src={monkey.type === 'dark' ? Monkey_dark1 : Monkey_light}
                  style={{ left: monkey.x, top: monkey.y }}
                  className="absolute w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 cursor-pointer"
                  alt={`원숭이 ${index + 1}`}
                  onClick={() => handleMonkeyClick(index)}
                />
              )
          )}
          {/* 공격 애니메이션 */}
          {attackEffect && (
            <img
              src={AttackPng}
              style={{ left: attackEffect.left, top: attackEffect.top }}
              className="absolute w-20 h-20 md:w-24 md:h-24 pointer-events-none"
              alt="공격 애니메이션"
            />
          )}
        </div>
      )}
    </div>
  );
}
