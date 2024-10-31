import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
import { useRanking } from '@/api/hooks';
import loginPageBg from '@/assets/images/prolog/login-page-bg.png';
import skkuLogo from '@/assets/images/prolog/skku-logo.png';

export default function Ranking() {
  const navigate = useNavigate();

  const { data: rankingData, isLoading, isError } = useRanking();

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
          backgroundImage: `url(${loginPageBg})`,
        }}
      />

      <div className="z-10 flex flex-1 flex-col items-center justify-between relative overflow-hidden">
        <div className="pt-16">
          <AngledBox>
            <span className="text-white text-[2.5rem]">RANKING</span>
          </AngledBox>
        </div>

        <div className="content-wrapper w-full flex-1 flex items-center justify-center">
          <AngledMonkeyBox>
            <div className="flex flex-col py-8 gap-4 w-full max-w-[340px] max-h-[350px] 500px:max-h-[500px] overflow-y-scroll overflow-y-scroll scrollbar-hide">
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
                  <div className="text-[#14AE5C]">
                    {data.stageStatus === 7 ? '🏆' : data.stageStatus}
                  </div>
                  <div>
                    {formatTimeDifference(data.initTime, data.recordTime)}
                  </div>
                </div>
              ))}
            </div>
          </AngledMonkeyBox>
        </div>

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

          <div className="mb-8 w-[50%] mx-auto">
            <img src={skkuLogo} alt="SKKU Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
