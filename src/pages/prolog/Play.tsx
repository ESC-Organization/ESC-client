import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';

export default function Play() {
  const navigate = useNavigate();

  // 지금 플레이 클릭 -> prologStory로 이동
  const handlePrologClick = () => {
    navigate('/prolog');
  };

  // 로그인 클릭 시
  const handlePlayClick = () => {
    alert('지금 플레이');
  };

  // 랭킹 확인 클릭 -> ranking으로 이동
  const handleRankingClick = () => {
    navigate('/ranking');
  };

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
