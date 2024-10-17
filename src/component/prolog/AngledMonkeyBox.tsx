import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
}

export default function AngledBox({ children }: BoxComponentProps) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-[-50px]">
        <img
          src="src/assets/images/prolog/monkey.png"
          alt="Monkey Character"
          className="w-[64px] h-[64px]"
        />
      </div>

      <div
        className="bg-[#D2A15B] border-4 border-[#A17236] px-4 shadow-lg inline-block"
        style={{
          clipPath:
            'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
