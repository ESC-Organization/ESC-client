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

      <div className="content-wrapper text-center text-white text-[1.8rem]">
        <img
          src="src/assets/images/prolog/ladybug.png"
          alt="Monkey"
          className="w-[128px] h-auto mx-auto relative"
        />
      </div>
    </div>
  );
}
