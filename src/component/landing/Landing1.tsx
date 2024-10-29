import AngledBox from '@/component/prolog/AngledBox';

export default function Landing1() {
  return (
    <div className="flex">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-first-bg.png')`,
        }}
      />

      <div className="pt-16 mx-auto">
        <AngledBox>
          <span className="text-white text-[2.5rem]">지금 우리 </span>
          <span className="text-[#14AE5C] text-[2.5rem]">율전</span>
          <span className="text-white text-[2.5rem]">은</span>
        </AngledBox>
      </div>

      <div className="absolute inset-0 flex justify-center items-center top-[40%]">
        <span className="text-white text-[1.5rem] text-center">
          - 에브리타임 (자과캠) 편-
        </span>
      </div>
    </div>
  );
}
