import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
import BottomButton from '@/component/prolog/BottomButton';

// 랭킹 더미 데이터: 닉네임, 스테이지, 시간
const rankingData = [
  { nickname: '테스트1', stage: 1, time: 30 },
  { nickname: '테스트다섯', stage: 2, time: 40 },
  { nickname: '긴이름긴이름긴이', stage: 3, time: 50 },
  { nickname: '테스트4', stage: 4, time: 60 },
  { nickname: '테스트5', stage: 5, time: 70 },
  { nickname: '테스트6', stage: 6, time: 80 },
  { nickname: '테스트7', stage: 7, time: 90 },
  { nickname: '테스트8', stage: 8, time: 100 },
  { nickname: '테스트9', stage: 9, time: 110 },
  { nickname: '테스트10', stage: 10, time: 120 },
];

export default function Ranking() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/login-page-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="z-10 flex flex-1 flex-col items-center justify-between relative overflow-hidden">
        <div className="pt-16">
          <AngledBox>
            <span className="text-white text-[2.5rem]">RANKING</span>
          </AngledBox>
        </div>

        {/* 랭킹 영역 */}
        <div className="content-wrapper w-full flex-1 flex items-center justify-center">
          <AngledMonkeyBox>
            <div className="flex flex-col py-8 gap-4 w-full max-w-[340px] max-h-[350px] 500px:max-h-[500px] overflow-y-scroll">
              <div className="grid grid-cols-3 text-white text-[1.5rem] text-center">
                <div>닉네임</div>
                <div>스테이지</div>
                <div>시간</div>
              </div>

              {rankingData.map((data, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 text-white text-[1.2rem] text-center align-middle"
                >
                  <div>{data.nickname}</div>
                  <div className="text-[#14AE5C]">{data.stage}</div>
                  <div>{data.time}</div>
                </div>
              ))}
            </div>
          </AngledMonkeyBox>
        </div>

        {/* 하단 버튼 영역*/}
        <div className="flex flex-col w-full text-center">
          <div className="content-wrapper flex flex-col items-center gap-2 mb-4 relative">
            <AngledBox>
              <span
                className="text-white text-[1.5rem] cursor-pointer"
                onClick={handleBackClick}
              >
                뒤로가기
              </span>
            </AngledBox>
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
