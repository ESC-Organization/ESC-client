import React from 'react';
interface BlaxBoxProps {
  text: React.ReactNode;
}
export default function BlackBox({ text }: BlaxBoxProps) {
  return (
    <div className="text-[1.2rem] text-center flex flex-col p-8 gap-2 w-full transform relative z-[70] bg-[#00000059] rounded-[5px] text-white border-4 border-[#808080]">
      <div>{text}</div>
    </div>
  );
}
