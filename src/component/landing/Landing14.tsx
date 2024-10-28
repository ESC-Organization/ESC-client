import AngledBox from '../prolog/AngledBox';

export default function Landing14() {
  // 지금 플레이 클릭
  const onClickPlay = () => {
    alert('지금 플레이');
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-sixth-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      {/* //가로세로 중앙정렬 */}

      <div className="z-10 text-center text-white text-[1.8rem]">
        <span className="text-[#14AE5C]">당신의 도움</span>
        <span>이 필요합니다</span>
        {/* <div className="mt-4" onClick={() => alert('지금 플레이')}> */}
        <div className="mt-4 cursor-pointer" onClick={onClickPlay}>
          <AngledBox>
            <span>지금 플레이</span>
          </AngledBox>
        </div>
      </div>
    </div>
  );
}
