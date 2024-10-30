import { useState, useRef, useEffect } from 'react';
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
import { useQueryClient } from '@tanstack/react-query';
import GameOverlay from './GameOverlay';
import Game from './Game';
import TopBar from '@/component/bar/TopBar';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import bgMusic from '/src/assets/sound/bg_monkey.mp3'; // 배경 음악 파일 추가
import { dialog6 } from '@/constant/dialogs';
import { useUserStore } from '@/store/useUserStore';
import { useSubmitQuiz } from '@/api/hooks';

export default function Final() {
  const phone = useUserStore((state) => state.phone);
  const nickname = useUserStore((state) => state.nickname);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: submitQuiz } = useSubmitQuiz({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const { code, message } = error.response.data;
        if (code === 2002 || code === 2005) {
          alert(message);
        }
      } else {
        alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
      }
      navigate('/play');
    },
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [idx, setIdx] = useState<number>(1);
  const [overlayStatus, setOverlayStatus] = useState<
    'start' | 'clear' | 'over' | null
  >(null);
  const [gameClear, setGameClear] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(1);

  const updatedDialog6 = dialog6.map((dialogue) => ({
    ...dialogue,
    name: dialogue.name.replace(/미르미/g, `${nickname}`), // Replace all occurrences of '교수' with 'john'
    text: dialogue.text.replace(/미르미/g, `${nickname}`), // Replace all occurrences of '교수' with 'john'
  }));

  // Usage with currentDialogue
  const currentDialogue = updatedDialog6.find(
    (dialogue) => dialogue.idx === idx
  );
  const handleSound = (soundStatus: number) => {
    setIsPlaying(soundStatus);
    if (audioRef.current) {
      if (soundStatus === 1) {
        audioRef.current.play(); // 소리 재생
      } else {
        audioRef.current.pause(); // 소리 일시정지
      }
    }
  };

  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);

    if (nextIdx === 5) {
      setOverlayStatus('start');
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    setOverlayStatus('over');
  };

  const handleGameClear = () => {
    submitQuiz({ phone, correct: 'true', stage: '6' });
    setGameClear(true);
    setOverlayStatus('clear');
  };

  const handleRetry = () => {
    setIdx(4);
    setOverlayStatus(null);
    setGameOver(false);
    setGameClear(false);
  };

  const handleEnd = () => {
    navigate('/ending');
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true; // 음악을 루프 설정
      audioRef.current.play(); // 컴포넌트 렌더 시 자동 재생
    }
  }, []);

  return (
    <div className="relative flex justify-center w-full h-full bg-[#793A1C]">
      <audio ref={audioRef} src={bgMusic} />

      {overlayStatus && (
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 py-10 z-50">
          <img
            src={Bg3}
            className="absolute inset-0 object-cover w-full h-full z-0"
          />
          <GameOverlay
            status={overlayStatus}
            onFinish={() => setOverlayStatus(null)}
          />
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

      <TopBar onSound={handleSound} isPlaying={isPlaying} />

      {!overlayStatus && (
        <div className="z-10 w-full h-full">
          <img src={Bg3} className="object-cover" />
        </div>
      )}

      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] bg-[#661AAF]"></div>

      {idx < 5 && (
        <>
          <div className="w-full flex justify-center max-w-[500px] absolute bottom-[360px] z-50">
            <div className="w-[50%]">
              {idx === 1 ? (
                <img
                  src={Fullitem}
                  className="animate-rotate-axis transition-transform duration-[2500ms] transform-style-3d"
                />
              ) : idx === 2 ? (
                <img
                  src={Knight}
                  className="animate-sparkle transform-style-3d"
                />
              ) : idx === 3 ? (
                <img src={Dido_mon} className="" />
              ) : (
                <img src={Dido} className="" />
              )}
            </div>
          </div>

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

          <div
            className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]"
            style={{ whiteSpace: 'pre-line' }}
          >
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
        <Game onGameOver={handleGameOver} onGameClear={handleGameClear} />
      )}
    </div>
  );
}
