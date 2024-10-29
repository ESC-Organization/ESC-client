import React from 'react';
import { useState } from 'react';
import Monkey from '/src/assets/images/items/monkey.png';

interface ObjectProps {
  q: React.ReactNode;
  answer?: string[];
  onSelect: (index: number | null) => void;
}

export default function Object({ q, answer = [], onSelect }: ObjectProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHint, setIsHint] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index + 1);
  };
  const showHint = () => {
    setIsHint(!isHint);
  };
  return (
    <div className="flex flex-col p-2 gap-2 w-full h-full transform relative z-[80] bg-[#00000059] flex justify-center items-center">
      <div className="mt-[12%] relative rounded-[8px] p-4 text-white border-4 border-[#606060] w-[90%]   bg-[#404040]">
        <div
          onClick={showHint}
          className="absolute -top-[17%] w-[30%] left-[35%] -z-[10]"
        >
          {isHint && (
            <div className="fixed w-[57%] h-[12%] z-[100]">
              <div className="absolute right-[29%] -top-[110%] text-center w-full ">
                <div className="absolute right-[25%] -top-[10%] text-center w-full p-2 bg-white border-2 border-[#808080] rounded-[5px]">
                  <span
                    style={{ WebkitTextStroke: '1px black' }}
                    className="text-white text-[0.9rem]"
                  >
                    나랑 퀴즈풀러 <br />
                    룸카페 갈뤠?
                  </span>
                </div>
              </div>
            </div>
          )}
          <img src={Monkey} />
        </div>
        <div className="mt-[10%] text-[1.1rem]">
          <span style={{ WebkitTextStroke: '1px #000' }}>{q}</span>
        </div>
        <div className="p-1 mt-[5%] mb-[5%] flex flex-col w-full gap-2">
          {answer.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`p-2 rounded-[5px] hover:bg-[#808080] bg-[#FFFFFF] w-full mx-auto border-[4px] border-[#808080] ${selectedIndex === index ? 'bg-black text-white' : 'bg-[#FFFFFF]'}`}
            >
              <span style={{ WebkitTextStroke: '1px #000' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute pb-4 pr-8 bottom-0 right-0">다음 {`>`}</div>
    </div>
  );
}
