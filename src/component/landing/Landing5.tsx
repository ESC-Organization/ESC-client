import ShadowBox from '@/component/prolog/ShadowBox';
import landingThirdBg from '@/assets/images/prolog/landing-third-bg.png';

export default function Landing5() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingThirdBg})`,
        }}
      />

      <div className="content-wrapper text-center text-white text-[1.8rem]">
        <ShadowBox
          backgroundColor="bg-[#404040]"
          borderColor="border-[#606060]"
          topLineBackground="bg-[#808080]"
        >
          <span>갑작스럽게 나타난 </span>
          <br />
          <span>의문의 </span>
          <span className="text-[#900B09]">벌레</span>
          <span>들과</span>
        </ShadowBox>
      </div>
    </div>
  );
}
