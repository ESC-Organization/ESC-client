import React from 'react';
interface BlaxBoxProps {
  text: React.ReactNode;
}
export default function BlackBox({ text }: BlaxBoxProps) {
  return (
    <div className="flex flex-col p-4 gap-2 w-full h-[70%] transform relative z-[70] bg-[#00000059] rounded-[5px] text-white border-4 border-[#808080]">
      <div>{text}</div>
      <div className="absolute pb-4 pr-8 bottom-0 right-0">다음 {`>`}</div>
    </div>
  );
}
