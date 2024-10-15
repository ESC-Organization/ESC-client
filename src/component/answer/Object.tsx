import React from 'react';
import { useState } from 'react';
import Monkey from '../../images/items/monkey.png';
interface ObjectProps {
  q: React.ReactNode;
  answer?: string[];
  onSelect: (index: number | null) => void;
}
export default function Object({ q, answer = [], onSelect }: ObjectProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index + 1);
  };
  return (
    <div className="flex flex-col p-2 gap-2 w-full h-full transform relative z-[80] bg-[#00000059] flex justify-center items-center">
      <div className="relative rounded-[8px] p-4 text-white border-4 border-[#606060] w-[90%]   bg-[#404040]">
        <div className="absolute -top-[15%] w-[30%] left-[35%] -z-[10]">
          <img src={Monkey} />
        </div>
        <div className="mt-[15%] text-[1.1rem]">
          <span style={{ WebkitTextStroke: '1px #000' }}>{q}</span>
        </div>
        <div className="p-2 mt-[5%] mb-[5%] flex flex-col w-full gap-4">
          {answer.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`p-2 rounded-[5px] bg-[#FFFFFF] w-full mx-auto border-[4px] border-[#808080] ${selectedIndex === index ? 'bg-black text-white' : 'bg-[#FFFFFF]'}`}
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
