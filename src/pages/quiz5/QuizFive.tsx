import { useState, useEffect } from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import Ncenter from '/src/assets/images/bg/ncenter.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
// import Object from '@/component/answer/Object';
import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Correct from './Correct';
import Wrong from './Wrong';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import TopBar from '@/component/bar/TopBar';
import { dialog5 } from '@/constant/dialogs';
import { useUserStore } from '@/store/useUserStore';
import { useSubmitQuiz } from '@/api/hooks';
import Bgm from '/src/assets/sound/bg_sound.mp3';
export default function QuizFive() {
  const phone = useUserStore((state) => state.phone);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true; // 음악을 루프 설정
      audioRef.current.play(); // 컴포넌트 렌더 시 자동 재생
    }
  }, []);
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

  const audioRef = useRef<HTMLAudioElement | null>(null); // 오디오 객체 레퍼런스
  const [isModal, setIsModal] = useState(false); // 처음엔 없음
  const [isStart, setIsStart] = useState(false);
  const [isCorrect, setIsCorrect] = useState(0);
  const [idx, setIdx] = useState<number>(1); // Store idx

  const showModal = () => {
    setIsModal(true); //보임
  };
  const handleSubjectAnswer = (subject: string) => {
    setIsModal(false); //안보임
    if (subject == '하예프' || subject == '성하예프') {
      setIsCorrect(1);
      submitQuiz({ phone, correct: 'true', stage: '5' });
    } else {
      setIsCorrect(2);
      submitQuiz({ phone, correct: 'false', stage: '5' });
    }
  };
  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);
    console.log('Next idx:', nextIdx);
    if (nextIdx > dialog5.length) {
      console.log('finish');
      setIsStart(true);
    }
  };
  const handleCloseSubject = () => {
    setIsModal(false); //안보임
  };
  const currentDialogue = dialog5.find((dialogue) => dialogue.idx === idx);
  const handleRetry = () => {
    window.location.reload();
  };
  const handleSound = (soundStatus: number) => {
    if (audioRef.current) {
      if (soundStatus === 1) {
        audioRef.current.play(); // 소리 재생
      } else {
        audioRef.current.pause(); // 소리 일시정지
      }
    }
  };

  return (
    <div className="w-full h-full bg-[#793A1C] relative">
      <TopBar onSound={handleSound} />
      <audio ref={audioRef} src={Bgm} />
      {isModal && (
        <Subject
          q="성___빈칸에 들어갈 글자는?"
          onSubject={handleSubjectAnswer}
          onClose={handleCloseSubject}
        />
      )}
      <div className="top-0 absolute w-full h-full z-[50]">
        <img src={Bg3} />
      </div>
      {isCorrect === 1 ? (
        <Correct />
      ) : isCorrect === 2 ? (
        <Wrong onRetry={handleRetry} />
      ) : (
        <div className="z-[40]">
          <div className="w-full max-w-[500px] absolute bottom-[250px]">
            <img src={Bg2} />
          </div>
          <div className="w-full max-w-[500px] absolute bottom-[300px]">
            <div className="relative w-2/3 ml-auto">
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
      )}
    </div>
  );
}
