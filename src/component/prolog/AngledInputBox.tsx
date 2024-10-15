import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
}

export default function AngledBox({ children }: BoxComponentProps) {
  return (
    <div
      className="bg-[#F0F0F0] border-4 border-[#606060] text-center py-2 shadow-lg inline-block"
      style={{
        clipPath:
          'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
      }}
    >
      {children}
    </div>
  );
}
