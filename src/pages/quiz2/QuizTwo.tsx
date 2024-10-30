import { useState, useEffect, useRef } from 'react';
import Bg2 from '/src/assets/images/bg/bg2.png';
import Bg3 from '/src/assets/images/bg/bg3.png';
import Message from '/src/assets/images/items/message.png';
import Ncenter from '/src/assets/images/bg/ncenter.png';
import Avatar2 from '/src/assets/images/avatar/2.png';
// import Object from '@/component/answer/Object';
import { sub } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import Correct from './Correct';
import Wrong from './Wrong';
import Subject from '@/component/answer/Subject';
import AvatarBlackChat from '@/component/chatbox/AvatarBlackChat';
import TopBar from '@/component/bar/TopBar';
import { useSubmitQuiz } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';
import { dialog2 } from '@/constant/dialogs';

export default function QuizTwo() {
  const phone = useUserStore((state) => state.phone);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: submitQuiz } = useSubmitQuiz({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const { code, message } = error.response.data;

        if (code === 2002 || code === 2004) {
          alert(message);
        }
      } else {
        alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
      }
      navigate('/play');
    },
  });

  const audioRef = useRef<HTMLAudioElement | null>(null); // 오디오 객체 레퍼런스
  const [isPlaying, setIsPlaying] = useState(1); // 음악 재생 상태

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
      submitQuiz({ phone, correct: 'true', stage: '2' });
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
    } else {
      setIsCorrect(2);
      submitQuiz({ phone, correct: 'false', stage: '2' });
    }
  };
  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);
    console.log('Next idx:', nextIdx);
    if (nextIdx > dialog2.length) {
      console.log('finish');
      setIsStart(true);
    }
  };
  const handleCloseSubject = () => {
    setIsModal(false); //안보임
  };
  const handleRetry = () => {
    navigate('/play');
  };
  const currentDialogue = dialog2.find((dialogue) => dialogue.idx === idx);
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

  // 첫 페이지 로드시 자동으로 소리를 재생
  useEffect(() => {
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
  }, []);
  return (
    <div className="w-full h-full bg-[#793A1C] relative">
      <TopBar onSound={handleSound} />
      {isModal && (
        <Subject
          q="첫번째 빈칸에 들어갈 말은?"
          onSubject={handleSubjectAnswer}
          onClose={handleCloseSubject}
        />
      )}
      <div className="top-0 absolute w-full h-full z-[50]">
        <img src={Bg3} className="h-full w-full" />
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
