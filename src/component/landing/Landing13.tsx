import AngledBox from '../prolog/AngledBox';

export default function Landing13() {
  return (
    <div className="relative flex h-full bg-[#F2F2F2] overflow-hidden ">
      {/* <div className="flex justify-center item-center flex-direction:column text-white w-full 500px:px-12">
       */}
      <div className="flex justify-center flex-col text-white w-full 500px:px-4 gap-8">
        <img
          src="src/assets/images/prolog/sword.png"
          alt="Map"
          className="w-[60%] h-auto mx-auto relative"
        />
        <div className="flex justify-start mx-12">
          <AngledBox className="w-full">
            <span>???</span>
            <br />
            <br />
            <span>
              퀴즈를 모두 해결한다면
              <span className="text-[#14AE5C]"> ??????</span>를 얻어 이 사태를
              해결할 수 있어!
            </span>
            <br />
            <br />
          </AngledBox>
        </div>
      </div>
    </div>
  );
}
