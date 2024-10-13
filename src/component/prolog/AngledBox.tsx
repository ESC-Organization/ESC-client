import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
}

export default function BoxComponent({ children }: BoxComponentProps) {
  return (
    <div
      className="bg-[#D2A15B] border-4 border-[#A17236] text-center px-4 py-2 shadow-lg relative inline-block"
      style={{
        clipPath:
          'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#E5C8A7] z-10"></div>
      {children}
    </div>
  );
}
