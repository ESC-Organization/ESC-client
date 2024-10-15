import React from 'react';

interface BoxComponentProps {
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  topLineBackground?: string;
}

export default function ShadowBox({
  children,
  backgroundColor = 'bg-[#D2A15B]',
  borderColor = 'border-[#A17236]',
  topLineBackground = 'bg-[#E5C8A7]',
}: BoxComponentProps) {
  return (
    <div
      className={`px-4 py-2 relative inline-block border-4 shadow-lg ${backgroundColor} ${borderColor}`}
      style={{
        boxShadow: '10px 15px 15px rgba(0,0,0,0.5)',
        WebkitBoxShadow: '10px 15px 15px rgba(0,0,0,0.5)',
        MozBoxShadow: '10px 15px 15px rgba(0,0,0,0.5))',
      }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 ${topLineBackground}`}
      />
      {children}
    </div>
  );
}
