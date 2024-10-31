import ShadowBox from '@/component/prolog/ShadowBox';
import landingSecondBg from '@/assets/images/prolog/landing-second-bg.png';

export default function Landing2() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingSecondBg})`,
        }}
      />

      <div className="content-wrapper text-center text-white text-[1.8rem]">
        <ShadowBox>
          <span>여느 때와 같이 평화로운 </span>
          <br />
          <span className="text-[#14AE5C]">율전 </span>
          <span>캠퍼스에</span>
        </ShadowBox>
      </div>
    </div>
  );
}
