import { useState, useEffect } from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import Message from '/src/assets/images/items/message.png';
import Ncenter from '/src/assets/images/bg/ncenter.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
// import Object from '@/component/answer/Object';
import { sub } from 'framer-motion/client';
import Correct from './Correct';
import Wrong from './Wrong';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import TopBar from '@/component/bar/TopBar';
export default function QuizTwo() {
  const dialogues = [
    {
      idx: 1,
      props: 7,
      name: '오타쿠',
      text: '히사시부리~~',
    },
    {
      idx: 2,
      props: 7,
      name: '오타쿠',
      text: '00쿤,이런 상황에선 패기가 중요하네.',
    },
    {
      idx: 3,
      props: 0,
      name: '오타쿠',
      text: '00쿤의 답변 여하에 따라 내가 아이템을 주겠네',
    },
    {
      idx: 4,
      props: 0,
      name: '오타쿠',
      text: '내 지원서 내용을 맞춰보게나',
    },
  ];
  const [isCorrect, setIsCorrect] = useState(0);
  const [subjectAnswer, setSubjectAnswer] = useState<string | null>('');
  const [isModal, setIsModal] = useState(false); // 처음엔 없음
  const [isStart, setIsStart] = useState(false);
  const [idx, setIdx] = useState<number>(1); // Store idx

  const showModal = () => {
    setIsModal(true); //보임

    setSubjectAnswer('0');
  };
  const handleSubjectAnswer = (subject: string) => {
    setIsModal(false); //안보임
    setSubjectAnswer(subject);
    if (subject == '원피스') {
      setIsCorrect(1);
    } else {
      setIsCorrect(2);
    }
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
  const handleRetry = () => {
    console.log('다시');
    window.location.reload();
  };
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  return (
    <div className="w-full h-full bg-[#793A1C] relative">
      <TopBar />
      {isModal && (
        <Subject
          q="첫번째 빈칸에 들어갈 말은?"
          onSubject={handleSubjectAnswer}
          onClose={handleCloseSubject}
        />
      )}
      <div className="top-0 absolute w-full h-full z-[50]">
        <img src={Bg3} />
      </div>

      {isCorrect == 1 ? (
        <Correct />
      ) : isCorrect === 2 ? (
        <Wrong onRetry={handleRetry} />
      ) : (
        <div className="z-[40]">
          <div className="w-full max-w-[500px] absolute bottom-[250px]">
            <img src={Bg2} />
          </div>
          <div className="w-full max-w-[500px] absolute bottom-[318px]">
            <div className="relative w-1/2 ml-auto">
              <img src={Ncenter} />
            </div>
          </div>
          {idx >= 3 && idx < 5 && (
            <div className="absolute h-[60dvh] mx-auto max-w-[500px] z-[60]">
              <img src={Message} className="h-full object-cover" />
            </div>
          )}
          {idx >= 5 && (
            <div className="absolute p-4 h-[80dvh] mx-auto max-w-[500px] z-[60]">
              <img src={Message} className="h-full object-cover" />
            </div>
          )}

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
              className="cursor-pointer flex justify-center text-[1.2rem] w-full h-[10%] absolute bottom-0 text-white z-[90]"
            >
              문제풀기
            </div>
          )}

          <div className="w-full h-[50%] scrollbar-hide overflow-y-scroll absolute top-[5%] p-4 max-w-[500px] space-y-4"></div>
        </div>
      )}
    </div>
  );
}
