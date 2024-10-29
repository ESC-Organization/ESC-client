import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import { useUserInfo } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';

export default function Play() {
  const navigate = useNavigate();
  const phone = useUserStore((state) => state.phone);

  // 유저 정보 조회
  const { data: userInfo, isError } = useUserInfo(phone);
  console.log('🚀 ~ file: Play.tsx:12 ~ Play ~ userInfo:', userInfo);
  const stage = userInfo?.stageStatus;
  const coin = userInfo?.coin;
  console.log('🚀 ~ file: Play.tsx:15 ~ Play ~ coin:', coin);

  // 프롤로그 클릭 -> /prolog로 이동
  const handlePrologClick = () => {
    navigate('/prolog');
  };

  // 지금 플레이 클릭 -> stage에 따라 이동
  const handlePlayClick = () => {
    if (stage === undefined || coin === undefined) {
      alert('스테이지 정보를 불러오는 중입니다. 잠시만 기다려 주세요.');
      return;
    }
    if (coin < 1) {
      alert('코인이 부족합니다. qr을 찾아 코인을 얻어주세요!');
      return;
    }
    if (stage === 0) {
      alert('프롤로그를 먼저 진행해주세요.');
    } else if (stage >= 1 && stage <= 5) {
      navigate(`/quiz${stage}`);
    } else if (stage === 6) {
      navigate('/final');
    } else {
      alert('잘못된 스테이지 상태입니다.');
    }
  };

  // 랭킹 확인 클릭 -> /ranking으로 이동
  const handleRankingClick = () => {
    navigate('/ranking');
  };

  // 에러 처리
  if (isError) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <p className="text-xl text-red-500">
          데이터를 불러오는 중 오류가 발생했습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen relative ">
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/play-bg2.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="z-10 flex flex-1 flex-col items-center justify-between overflow-hidden">
        <div />
        {/* 하단 버튼 영역*/}
        <div className="flex flex-col w-full text-center">
          <div className="content-wrapper flex flex-col items-center gap-2 500px:mb-8 relative">
            <AngledBox
              background="bg-[#404040]"
              border="border-[#606060]"
              lineBackground="bg-[#808080]"
            >
              <span
                className="text-white text-[1rem] cursor-pointer"
                onClick={handlePrologClick}
              >
                프롤로그
              </span>
            </AngledBox>
            <AngledBox
              background="bg-[#404040]"
              border="border-[#606060]"
              lineBackground="bg-[#808080]"
            >
              <span
                className="text-white text-[1rem] cursor-pointer"
                onClick={handlePlayClick}
              >
                지금 플레이
              </span>
            </AngledBox>
            <AngledBox
              background="bg-[#404040]"
              border="border-[#606060]"
              lineBackground="bg-[#808080]"
            >
              <span
                className="text-white text-[1rem] cursor-pointer"
                onClick={handleRankingClick}
              >
                랭킹 확인
              </span>
            </AngledBox>
            <div className="absolute -right-0 bottom--4 500px:mr-12">
              <img
                src="src/assets/images/prolog/character-myungwoong.png"
                alt="Character Myungwoong"
                className="w-[96px] h-auto"
              />
            </div>
            <div className="absolute -left-0 bottom-0 500px:ml-12 ">
              <img
                src="src/assets/images/prolog/character-yuloong.png"
                alt="Character Yuloong"
                className="w-[96px] h-auto"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>

          {/* 로고 */}
          <div className="mb-8 w-[50%] mx-auto">
            <img src="src/assets/images/prolog/skku-logo.png" alt="SKKU Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
