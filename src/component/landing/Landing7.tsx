import { useState, useEffect } from 'react';
import ShadowBox from '../prolog/ShadowBox';
import landingFifthBg from '@/assets/images/prolog/landing-fifth-bg.png';
import handImage from '@/assets/images/prolog/hand.png';

export default function Landing5() {
  const [hands, setHands] = useState<{ top: string; left: string }[]>([]);
  const handCount = 12;

  useEffect(() => {
    if (hands.length >= handCount) return;

    const addHand = () => {
      const newHand = {
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      };
      setHands((prev) => [...prev, newHand]);
    };

    const interval = setInterval(() => {
      addHand();
    }, 200);

    if (hands.length >= handCount) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [hands]);

  return (
    <div className="flex justify-end items-center h-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingFifthBg})`,
        }}
      />

      <div className="content-wrapper text-center text-white text-[1.8rem] relative z-10">
        <div className="flex gap-4 flex-col items-end justify-end 500px:mx-8 mt-80">
          <ShadowBox
            backgroundColor="bg-[#404040]"
            borderColor="border-[#606060]"
            topLineBackground="bg-[#808080]"
          >
            <span className="text-[#900B09]">살려줘..!! </span>
          </ShadowBox>
        </div>
      </div>

      {hands.map((hand, index) => (
        <img
          key={index}
          src={handImage}
          alt="Hand"
          className="absolute"
          style={{
            top: hand.top,
            left: hand.left,
            width: '100px',
            height: 'auto',
          }}
        />
      ))}
    </div>
  );
}
