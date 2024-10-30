import AngledBox from '../prolog/AngledBox';
import avatarImage from '@/assets/images/avatar/5.png';

export default function Landing11() {
  return (
    <div className="relative flex h-full bg-black overflow-hidden">
      <div className="flex justify-center flex-col text-white w-full 500px:px-12">
        <img
          src={avatarImage}
          alt="Monkey"
          className="w-[128px] h-auto mx-12 relative"
        />
        <div className="flex justify-start mx-12">
          <AngledBox className="w-full">
            <span>???</span>
            <br />
            <br />
            <span>
              이봐 자네.. 혹시 <br />
              <span className="text-[#14AE5C]">trIC ON treat</span>에 참여
              중인가..?
            </span>
            <br />
            <br />
          </AngledBox>
        </div>
      </div>
    </div>
  );
}
