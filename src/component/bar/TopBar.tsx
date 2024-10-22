import Coin from '/src/assets/images/items/coin.png';
import Sound from '/src/assets/images/items/sound.png';
import SoundOff from '/src/assets/images/items/sound-off.png';
import { useState } from 'react';
interface BarComponent {
  onSound: (number: number) => void;
}
export default function TopBar({ onSound }: BarComponent) {
  const [isSound, setIsSound] = useState(1);
  const toggleSound = () => {
    if (isSound == 0) {
      setIsSound(1);
      onSound(1);
    } else {
      setIsSound(0);
      onSound(0);
    }
  };
  return (
    <div className="absolute top-0 w-full pt-4 z-[90] pr-4">
      <div className="relative gap-[1rem] items-center flex">
        <div className="flex gap-1  p-1 ml-auto justify-center items-center bg-[#00000059] rounded-[15px]">
          <div className="w-[25%] -pl-2">
            <img src={Coin} className="w-full" />
          </div>
          <div className="text-white text-[1.2rem]"> x 1</div>
        </div>
        <div className="w-[8%]" onClick={toggleSound}>
          <img src={isSound === 1 ? Sound : SoundOff} className="w-full" />
        </div>
      </div>
    </div>
  );
}
