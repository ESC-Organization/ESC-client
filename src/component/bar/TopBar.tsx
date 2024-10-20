import Coin from '/src/assets/images/items/coin.png';
import Sound from '/src/assets/images/items/sound.png';
export default function TopBar() {
  return (
    <div className="absolute top-0 w-full pt-4 z-[90] pr-4">
      <div className="relative gap-[1rem] items-center flex">
        <div className="flex gap-1  p-1 ml-auto justify-center items-center bg-[#00000059] rounded-[15px]">
          <div className="w-[25%] -pl-2">
            <img src={Coin} className="w-full" />
          </div>
          <div className="text-white text-[1.2rem]"> x 1</div>
        </div>
        <div className="w-[8%]">
          <img src={Sound} className="w-full" />
        </div>
      </div>
    </div>
  );
}
