import { useState, useEffect } from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import NcenterFire from '/src/assets/images/bg/ncenter-fire.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
// import Object from '@/component/answer/Object';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function QuizFive() {
  const dialogues = [
    {
      idx: 1,
      props: 9,
      name: '행정실 직원',
      text: '제가 그저께 입사해서...',
    },
    {
      idx: 2,
      props: 9,
      name: '행정실 직원',
      text: '이럴 때 연락해야 할 대학이 있다고 하셨는데..',
    },
    {
      idx: 3,
      props: 9,
      name: '행정실 직원',
      text: '저희와 비슷한 대학교 세 군데가 있다고 하시던데..',
    },
    {
      idx: 4,
      props: 9,
      name: '행정실 직원',
      text: '어느 대학들인지 알고 계신가요?',
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
  const handleCloseSubject = () => {
    setIsModal(false); //안보임
  };
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C] relative">
      {isModal && (
        <Subject
          q="성___빈칸에 들어갈 글자는?"
          onSubject={handleSubjectAnswer}
          onClose={handleCloseSubject}
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
