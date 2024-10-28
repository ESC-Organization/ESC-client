import { useState, useEffect } from 'react';
import Bg1 from 'src/assets/images/bg/bg1.png';
import AvatarChat from '@/component/chatbox/AvatarChat';
import TopBar from '@/component/bar/TopBar';

export default function Ending() {
  const dialogues = [
    {
      idx: 1,
      props: 3,
      name: '숭이',
      text: '친구들의 버그를 고쳐주셔서 감사합니다.! ’미르미’님!',
    },
  ];
  const [idx, setIdx] = useState<number>(1);

  const handleSound = (soundStatus: number) => {
    // setIsPlaying(soundStatus);
    // if (audioRef.current) {
    //   if (soundStatus === 1) {
    //     audioRef.current.play(); // 소리 재생
    //   } else {
    //     audioRef.current.pause(); // 소리 일시정지
    //   }
    // }
  };
  const handleNext = (nextIdx: number) => {};
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  return (
    <div className="flex flex-col w-screen relative ">
      <TopBar onSound={handleSound} />
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url('/src/assets/images/bg/bg-library.png')`,
        }}
      />

      {currentDialogue && (
        <AvatarChat
          idx={currentDialogue.idx}
          props={currentDialogue.props}
          name={currentDialogue.name}
          text={currentDialogue.text}
          handleNext={() => handleNext(idx)}
        />
      )}
    </div>
  );
}
