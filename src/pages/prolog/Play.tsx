import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import { useUserInfo } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';
import TopBar from '@/component/bar/TopBar';
import playBg2 from '@/assets/images/prolog/play-bg2.png';
import characterMyungwoong from '@/assets/images/prolog/character-myungwoong.png';
import characterYuloong from '@/assets/images/prolog/character-yuloong.png';
import skkuLogo from '@/assets/images/prolog/skku-logo.png';

export default function Play() {
  const navigate = useNavigate();
  const phone = useUserStore((state) => state.phone);

  const { data: userInfo, isError } = useUserInfo(phone);
  const stage = userInfo?.stageStatus;
  const coin = userInfo?.coin;

  const handlePrologClick = () => {
    navigate('/prolog');
  };

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
    } else if (stage === 7) {
      alert('모든 스테이지를 클리어했습니다!!');
      return;
    } else {
      alert('잘못된 스테이지 상태입니다.');
    }
  };

  const handleRankingClick = () => {
    navigate('/ranking');
  };

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
          backgroundImage: `url(${playBg2})`,
        }}
      />

      <div className="z-10 flex flex-1 flex-col items-center justify-between overflow-hidden">
        <TopBar />
        <div />
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
                src={characterMyungwoong}
                alt="Character Myungwoong"
                className="w-[96px] h-auto"
              />
            </div>
            <div className="absolute -left-0 bottom-0 500px:ml-12 ">
              <img
                src={characterYuloong}
                alt="Character Yuloong"
                className="w-[96px] h-auto"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>

          <div className="mb-8 w-[50%] mx-auto">
            <img src={skkuLogo} alt="SKKU Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
