import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
import { useRanking } from '@/api/hooks';

export default function Ranking() {
  const navigate = useNavigate();

  // 랭킹 조회
  const { data: rankingData, isLoading, isError } = useRanking();
  console.log('🚀 ~ file: main-page.tsx:37 ~ Main ~ rankingData:', rankingData);

  const handleBackClick = () => {
    navigate(-1);
  };

  const formatTimeDifference = (initTime: string, recordTime: string) => {
    const initDate = new Date(initTime).getTime();
    const recordDate = new Date(recordTime).getTime();
    const differenceInSeconds = Math.floor((recordDate - initDate) / 1000);

    const minutes = Math.floor(differenceInSeconds / 60);
    const seconds = differenceInSeconds % 60;

    return `${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load ranking data.</div>;

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
                  <div className="text-[#14AE5C]">{data.stageStatus}</div>
                  <div>
                    {formatTimeDifference(data.initTime, data.recordTime)}
                  </div>
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
