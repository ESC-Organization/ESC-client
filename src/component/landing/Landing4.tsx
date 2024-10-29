import ShadowBox from '../prolog/ShadowBox';

export default function Landing4() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-third-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      {/* //가로세로 중앙정렬 */}

      <div className="content-wrapper pt-28 text-center text-white text-[1.8rem]">
        <img
          src="src/assets/images/prolog/ladybug.png"
          alt="Ladybug"
          className="w-[300px] h-auto mx-auto relative"
        />
        <div className="pt-4 content-wrapper text-center text-[1.8rem]">
          <ShadowBox
            backgroundColor="bg-[#404040]"
            borderColor="border-[#606060]"
            topLineBackground="bg-[#808080]"
          >
            <span className="text-[#900B09]">(사각사각...)</span>
          </ShadowBox>
        </div>
      </div>
    </div>
  );
}
