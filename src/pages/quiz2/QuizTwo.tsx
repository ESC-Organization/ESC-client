import { useState, useEffect } from 'react';
import Bg2 from '../../images/bg/bg2.png';
import Bg3 from '../../images/bg/bg3.png';
import Ncenter from '../../images/bg/ncenter.png';
import Avatar2 from '../../images/avatar/2.png';
// import Object from '@/component/answer/Object';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
export default function QuizTwo() {
  const dialogues = [
    {
      idx: 1,
      props: 5,
      name: '교수님',
      text: '내 연구생이 기숙사를 가서 돌아오지 않는다..',
    },
    {
      idx: 2,
      props: 5,
      name: '교수님',
      text: '거기 우리에게 꼭 필요한 방호복이 있는데...',
    },
    {
      idx: 3,
      props: 5,
      name: '교수님',
      text: '4층에 산다고 했던것 같은데..혹시 어디인지 아는가?',
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
          q="다음 중, 애드워드 리의 본명은?"
          onSubject={handleSubjectAnswer}
        />
      )}
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
