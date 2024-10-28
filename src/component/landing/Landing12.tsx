import AngledBox from '../prolog/AngledBox';

export default function Landing12() {
  return (
    <div className="relative flex h-full bg-[#F2F2F2] overflow-hidden ">
      {/* <div className="flex justify-center item-center flex-direction:column text-white w-full 500px:px-12">
       */}
      <div className="flex justify-center flex-col text-white w-full 500px:px-4 gap-12">
        <img
          src="src/assets/images/prolog/map.png"
          alt="Map"
          className="w-[80%] h-auto mx-12 relative"
        />
        <div className="flex justify-start mx-12">
          <AngledBox className="w-full">
            <span>???</span>
            <br />
            <br />
            <span>
              그렇다면 그렇다면 행사구역 내에서
              <span className="text-[#14AE5C]"> QR코드</span>를 찾아보게나! 이
              지도를 참고해보게
            </span>
            <br />
            <br />
            <span>스크린샷을 찍어 두는 게 좋을게야</span>
            <br />
            <br />
          </AngledBox>
        </div>
      </div>
    </div>
  );
}
