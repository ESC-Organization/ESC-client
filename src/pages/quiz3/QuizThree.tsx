import { useState, useEffect } from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import NcenterFire from '/src/assets/images/bg/ncenter-fire.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
// import Object from '@/component/answer/Object';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function QuizThree() {
  const dialogues = [
    {
      idx: 1,
      props: 1,
      name: '000',
      text: '(숨을 헐떡이며) 교수님! 왜 아직 이 교실에 계세요!',
    },
    {
      idx: 2,
      props: 1,
      name: '000',
      text: '제가 구해드릴게요!.',
    },
    {
      idx: 3,
      props: 6,
      name: '익명의 교수',
      text: '(기침하며)콜록,,콜록,,,',
    },
    {
      idx: 4,
      props: 6,
      name: '익명의 교수',
      text: '나는 아직 대피할 수 없네',
    },
    {
      idx: 5,
      props: 6,
      name: '익명의 교수',
      text: '나는 30년 평생 교수로 살아있다네..',
    },
    {
      idx: 6,
      props: 6,
      name: '익명의 교수',
      text: '아직 학생 한 명이 출석 체크를 안 한 것 같네..',
    },
    {
      idx: 7,
      props: 6,
      name: '익명의 교수',
      text: '-- 출첵했나요??',
    },
  ];
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    0
  );
  const [subjectAnswer, setSubjectAnswer] = useState<string | null>('');
  const [isModal, setIsModal] = useState(false); // 처음엔 없음
  const [isStart, setIsStart] = useState(false);
  const answers = ['성', '균', '관', '대'];
  const [idx, setIdx] = useState<number>(1); // Store idx

  const handleSelect = (index: number | null) => {
    setIsModal(false); //안보임
    setSelectedAnswerIndex(index);
    console.log('Selected answer index:', index);
  };
  const showModal = () => {
    setIsModal(true); //보임
    setSelectedAnswerIndex(null);
    setSubjectAnswer('0');
  };
  const handleSubjectAnswer = (subject: string) => {
    setIsModal(false); //안보임
    setSubjectAnswer(subject);
    console.log(subject);
  };
  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);
    console.log('Next idx:', nextIdx);
    if (nextIdx > dialogues.length) {
      console.log('finish');
      setIsStart(true);
    }
  };
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      {isModal && (
        <Subject
          q="이 인물의 이름을 맞춰야 출석 체크를 마치고 교수님을 대피시킬 수 있습니다. 이 인물의 이름은?"
          onSubject={handleSubjectAnswer}
        />
      )}
      <div className="absolute w-full h-full z-50">
        <img src={Bg3} />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src={Bg2} />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-[300px]">
        <div className="relative w-2/3 ml-auto">
          <img src={NcenterFire} />
        </div>
      </div>

      <div className="p-4 w-full max-w-[500px] absolute bottom-0 h-[300px] bg-[#661AAF]">
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
      <div
        className={`w-full flex ml-20 max-w-[500px] absolute bottom-[300px] z-20 transition-transform duration-[2500ms]`}
      >
        <div className="w-[20%]">
          <img src={Avatar2} />
        </div>
      </div>
      {isStart && (
        <div
          onClick={showModal}
          className="flex justify-center text-[1.2rem] w-full h-[10%] absolute bottom-0 text-white z-[90]"
        >
          문제풀기
        </div>
      )}

      <div className="w-full h-[50%] scrollbar-hide overflow-y-scroll absolute top-[5%] p-4 max-w-[500px] space-y-4"></div>
    </div>
  );
}
