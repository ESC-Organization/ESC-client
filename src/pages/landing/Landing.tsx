import Bg1 from '../../images/bg/bg1.png';
import Ncenter from '../../images/bg/ncenter.png';
import AvatarChat from '@/component/chatbox/AvatarChat';
export default function Landing() {
  return (
    <div className="flex justify-center w-full h-full bg-[#86C5E3]">
      <div className="w-full max-w-[500px] absolute bottom-0">
        <img src={Bg1} />
      </div>

      <div className="w-full max-w-[500px] absolute bottom-[318px]">
        <div className="relative w-1/2 ml-auto">
          <img src={Ncenter} />
        </div>
      </div>
      {/* 말풍선 캐릭터 종류를 props로 넘김 */}
      <AvatarChat props={2} />
    </div>
  );
}
