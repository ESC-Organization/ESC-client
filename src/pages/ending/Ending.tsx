import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import MonkeySrc from '/src/assets/images/avatar/3.png';
import HeartSrc from '/src/assets/images/items/heart.png';
import CampfireSrc from '/src/assets/images/items/campfire.gif';
import MonkeyDanceSrc from '/src/assets/images/ending/monkey-dance.gif';
import MyungwoongDanceSrc from '/src/assets/images/ending/myungwoong-dance.gif';
import YuloongDanceSrc from '/src/assets/images/ending/yuloong-dance.gif';
import TypoLetsParty from '/src/assets/images/items/typo-LETSPARTY.png';
import CertModal from './CertModal';
import CreditModal from './CreditModal';
import AvatarChat from '@/component/chatbox/AvatarChat';
import TopBar from '@/component/bar/TopBar';
import { useUserStore } from '@/store/useUserStore';
import { useUserInfo, useRanking } from '@/api/hooks';

const dataURLtoFile = (dataurl: string, filename: string) => {
  let arr = dataurl.split(',');
  if (arr[0] === null) return;
  let decodedData = atob(arr[1]),
    lengthOfDecodedData = decodedData.length,
    u8array = new Uint8Array(lengthOfDecodedData);
  while (lengthOfDecodedData--) {
    u8array[lengthOfDecodedData] = decodedData.charCodeAt(lengthOfDecodedData);
  }
  return new File([u8array], filename, { type: 'image/png' });
};

export default function Ending() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // 오디오 객체 레퍼런스
  const divRef = useRef<HTMLDivElement>(null); // 스크린샷 대상 객체
  const [isPlaying, setIsPlaying] = useState(1); // 음악 재생 상태
  const [myrank, setMyrank] = useState(0);
  // const [nickname, setNickname] = useState('미르미');

  // 유저 정보 조회
  const { nickname, phone } = useUserStore();
  const { data: userInfo, refetch: fetchUserInfo } = useUserInfo(phone, {
    enabled: false,
  });
  const { data: rankingData, refetch: fetchRanking } = useRanking();

  const dialogues = [
    {
      idx: 1,
      props: 3,
      name: '숭이',
      text: (
        <>
          친구들의 버그를 고쳐주셔서 감사합니다..! ‘
          <span className="text-[#14AE5C]">{nickname}</span>’ 님!
        </>
      ),
    },
    {
      idx: 2,
      props: 3,
      name: '숭이',
      text: `덕분에 친구들이 정신을 차렸어요!`,
    },
    {
      idx: 3,
      props: 3,
      name: '숭이',
      text: (
        <>
          끽..! 끼끽..!!
          <br />
          (고마워, ‘<span className="text-[#14AE5C]">{nickname}</span>
          ’! 덕분에 정신을 차릴 수 있었어 )
        </>
      ),
    },
    {
      idx: 4,
      props: 0,
      name: '',
      text: '다시 평화로워진 율전',
    },
    {
      idx: 5,
      props: 0,
      name: '',
      text: (
        <>
          {/* eslint-disable-next-line prettier/prettier */}
          율전은 ‘<span className="text-[#14AE5C]">{nickname}</span>’ 당신 덕분에 다시 평화를 되찾았습니다.
        </>
      ),
    },
    {
      idx: 6,
      props: 0,
      name: '',
      text: (
        <>
          {/* eslint-disable-next-line prettier/prettier */}
          저희 SNS에서 스토리 인증 이벤트를 진행 중이오니 많은 참여 부탁드립니다!<br/>
          <Link
            to="https://www.instagram.com/9oormthonuniv.skku/"
            target="_blank"
          >
            <span className="text-base text-green-300">
              @9oormthonuniv.skku
              <br />
              (클릭시 이동)
            </span>
          </Link>
        </>
      ),
    },
  ];
  const [idx, setIdx] = useState<number>(1);
  const [isModalCert, setIsModalCert] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [isModalCredit, setIsModalCredit] = useState(false);

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
  const handleNext = (nextIdx: number) => {
    nextIdx++;
    setIdx(nextIdx);
    if (nextIdx === 6) {
      console.log('show modal');
      handleShowCert();
    }
    if (nextIdx > dialogues.length) {
      console.log('finish');
      setIsParty(true);
    }
  };
  const handleShowCert = () => {
    if (!phone) return alert('유저 정보가 없습니다');
    fetchUserInfo();
    console.log(userInfo);
    fetchRanking();
    setIsModalCert(true);
    const rank = rankingData.findIndex((rank) => rank.nickname === nickname);
    if (rank === -1) return alert('랭크 정보가 없습니다.');
    setMyrank(rank);
  };
  const handleShare = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      // 파일 공유 try
      const link = canvas.toDataURL('image/png');
      const file = dataURLtoFile(link, 'certificate.png');
      console.log(file);
      if (file) {
        const shareData = {
          title: '지금 우리 율전은',
          text: '당신을 율전의 영웅으로 임명합니다.',
          files: [file],
        };
        await navigator.share(shareData);
        console.log('Image shared successfully.');
        setIsModalCert(false);
      }
    } catch (error) {
      console.error('Error converting div to image:', error);
      console.log('fallback...');
      // Share api 실패시 파일 다운로드 시도
      try {
        const div = divRef.current;
        const canvas = await html2canvas(div, { scale: 2 });
        canvas.toBlob((blob) => {
          if (blob !== null) {
            saveAs(blob, 'certificate.png');
          }
        });
      } catch (error) {
        // 안 되면 할 수 없지요
        console.error('Error again converting div to image:', error);
        setIsModalCert(false);
      }
    }
  };
  const handleToggleCredit = () => {
    setIsModalCredit(!isModalCredit);
  };
  const currentDialogue = dialogues.find((dialogue) => dialogue.idx === idx);

  return (
    <div className="flex flex-col w-screen relative" ref={divRef}>
      <TopBar onSound={handleSound} />
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full -z-10"
        style={{
          backgroundImage: `url('/src/assets/images/bg/bg-library.png')`,
        }}
      />

      {isModalCert ? (
        <CertModal
          onShare={() => {
            handleShare();
          }}
          clearInfo={{
            nickname: nickname,
            initTime: userInfo?.initTime ?? '0',
            recordTime: userInfo?.recordTime ?? '0',
            ranking: myrank,
          }}
        />
      ) : (
        currentDialogue && (
          <>
            {/* 원숭이 친구들 */}
            {(idx === 2 || idx === 3) && (
              <div className="absolute bottom-[250px] w-full">
                <div className="w-[25%] absolute right-24 bottom-0">
                  <img src={MonkeySrc} />
                </div>
                <div className="w-[25%] absolute right-8 -bottom-4">
                  <img src={MonkeySrc} />
                </div>
              </div>
            )}
            {/* 하트 */}
            {idx === 6 && (
              <div className="absolute top-[25%] left-[50%] -translate-x-1/2">
                <div className="mx-auto w-[75%]">
                  <img src={HeartSrc} />
                </div>
              </div>
            )}
            {/* 대사창 */}
            <AvatarChat
              idx={currentDialogue.idx}
              props={currentDialogue.props}
              name={currentDialogue.name}
              text={currentDialogue.text}
              handleNext={() => handleNext(idx)}
            />
          </>
        )
      )}

      {isParty && (
        <div className="absolute h-full w-full">
          {isModalCredit === false && (
            <div className=" p-6 my-auto max-h-[600px] w-full max-w-[500px] absolute top-[15%]">
              <div className="w-[95%] absolute z-[70] left-[50%] -translate-x-1/2 drop-shadow-xl top-10">
                <img src={TypoLetsParty} alt="Let's Party" />
              </div>
              <div className="my-auto p-4 flex flex-col items-center justify-between text-xl isolate *:drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)] text-[#F0F0F0] bg-[#D9A066] rounded-[8px] border-4 border-[#8F563B] whitespace-pre-line">
                <div className="text-2xl mt-20">플레이해주셔서 감사합니다</div>
              </div>
            </div>
          )}
          <div className="h-[40%] p-6 w-full max-w-[500px] absolute bottom-0 flex flex-col justify-around">
            <div className="flex justify-around *:relative">
              <img
                src={MonkeyDanceSrc}
                className="w-[64px] h-[64px] left-[10px]"
              />
              <img
                src={CampfireSrc}
                className="w-[64px] h-[64px] top-[40px] left-[10px]"
              />
              <img
                src={MyungwoongDanceSrc}
                className="w-[96px] h-[96px] bottom-[15px]"
              />
            </div>
            <div className="flex justify-around *:relative">
              <img
                src={YuloongDanceSrc}
                className="w-[96px] h-[96px] right-[20px]"
              />
              <img
                src={MonkeyDanceSrc}
                className="w-[64px] h-[64px] top-[40px] right-[10px]"
              />
              <img src={MonkeyDanceSrc} className="w-[64px] h-[64px]" />
            </div>
            <div
              onClick={handleToggleCredit}
              className={
                'p-4 flex justify-center gap-2' +
                (isModalCredit ? ' opacity-0' : '')
              }
            >
              <span className="text-xl text-white drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)]">
                크레딧 보기
              </span>
            </div>
          </div>
        </div>
      )}

      {isModalCredit && (
        <CreditModal
          onClose={() => {
            handleToggleCredit();
          }}
        />
      )}
    </div>
  );
}
