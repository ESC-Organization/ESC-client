import Bg2 from '/src/assets/images/bg/bg2.png';
import Finish from './Finish';
import Ncenter from '/src/assets/images/bg/ncenter.png';
import { useState, useRef } from 'react';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import Radio from '/src/assets/sound/1.mp3';
export default function Correct() {
  const [showFinish, setShowFinish] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // 오디오 객체 레퍼런스

  const showIt = () => {
    setShowFinish(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 볼륨 설정
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          console.log('자동 재생 성공');
        } catch (error) {
          console.log('자동 재생 실패, 사용자가 상호작용해야 함:', error);
        }
      };
      playAudio();
    }
  };

  return (
    <div
      className="flex justify-center w-full h-full  relative "
      onClick={showIt}
    >
      <audio ref={audioRef} src={Radio} />
      {/* Conditionally render Finish2 only when showFinish is true */}
      {showFinish && (
        <div className="absolute w-full h-full z-[80]">
          <Finish />
        </div>
      )}
      <div className="flex justify-center w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full p-8 max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div className="w-full max-w-[500px] absolute bottom-[300px]">
        <div className="relative w-1/2 ml-auto">
          <img src={Ncenter} />
        </div>
      </div>
      <div className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]">
        <AvatarBlackChat
          idx={1}
          props={5}
          name={'교수님'}
          text={'정말 고맙네. 우리 연구생이 지관에 있었고만!'}
          handleNext={() => setShowFinish(true)}
        />
      </div>
    </div>
  );
}
