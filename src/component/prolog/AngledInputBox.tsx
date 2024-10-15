import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
}

export default function AngledBox({ children }: BoxComponentProps) {
  return (
    <div
      className="bg-[#F0F0F0] border-4 border-[#606060] px-4 py-2 shadow-lg relative inline-block"
      style={{
        clipPath:
          'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#E0E0E0] z-10"></div>
      {children}
    </div>
  );
}
