import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
  background?: string;
  border?: string;
  lineBackground?: string;
  className?: string;
  onClick?: () => void;
}

export default function AngledBox({
  children,
  background = 'bg-[#D2A15B]',
  border = 'border-[#A17236]',
  lineBackground = 'bg-[#E5C8A7]',
  className,
  onClick,
}: BoxComponentProps) {
  return (
    <div
      className={`px-4 py-2 shadow-lg relative inline-block border-4 ${background} ${border} ${className}`}
      style={{
        clipPath:
          'polygon(5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px), 0 5px)',
      }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 z-10 ${lineBackground}`}
      />
      {children}
      {/* 선택 완료 버튼이 있는 경우 -> 선택 버튼 실행*/}
      {onClick && (
        <>
          <div className="mt-16" />
          <div className="absolute right-4 bottom-2 text-white text-[1rem] flex justify-center items-center cursor-pointer">
            <span onClick={onClick}>선택 완료 {'>'}</span>
          </div>
        </>
      )}
    </div>
  );
}
