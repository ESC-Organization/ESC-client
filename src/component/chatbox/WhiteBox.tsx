import React from 'react';
interface WhiteBoxProps {
  text: React.ReactNode;
}

export default function WhiteBox({ text }: WhiteBoxProps) {
  return (
    <div className="bg-[#D9D9D9] p-4 rounded-[30px] w-[100%] ml-auto text-center mb-3 text-[1rem]">
      {text}
    </div>
  );
}
