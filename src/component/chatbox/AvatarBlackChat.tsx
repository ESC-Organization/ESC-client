import React from 'react';
import avatar1 from '/src/assets/images/avatar/1.png';
import avatar2 from '/src/assets/images/avatar/2.png';
import avatar3 from '/src/assets/images/avatar/3.png';
import avatar4 from '/src/assets/images/avatar/4.png';
import avatar5 from '/src/assets/images/avatar/5.png';
import avatar6 from '/src/assets/images/avatar/6.png';
import avatar7 from '/src/assets/images/avatar/7.png';
import none from '/src/assets/images/avatar/0.png';
import avatar8 from '/src/assets/images/avatar/8.png';
import avatar9 from '/src/assets/images/avatar/9.png';
interface AvatarBlackChatProps {
  idx: number;
  props: number;
  name: React.ReactNode;
  text: React.ReactNode;
  handleNext: (idx: number | null) => void; // Pass idx or true
}

const avatars = {
  0: none,
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4,
  5: avatar5,
  6: avatar6,
  7: avatar7,
  8: avatar8,
  9: avatar9,
  // 필요에 따라 추가
};

export default function AvatarBlackChat({
  idx,
  props,
  name,
  text,
  handleNext,
}: AvatarBlackChatProps) {
  const imageSrc = avatars[props]; // 객체에서 이미지 선택

  // Function to handle the '다음' click event
  const goNext = () => {
    handleNext(idx); // Send the current idx to the parent component
  };

  return (
    <div className="relative w-full justify-center h-[70%] z-[70]">
      <div className="w-full max-w-[500px] h-full">
        <div className="w-40 absolute h-[200px] -top-[125px]">
          <img src={imageSrc} alt={`Avatar Step ${props}`} />
        </div>
        <div className="cursor-pointer mt-4 flex flex-col p-4 gap-2 w-full h-full transform relative z-[70] bg-[#404040] rounded-[5px] text-white border-4 border-[#606060]">
          <div className="text-[1.2rem]">{name}</div>
          <div className="pl-2">{text}</div>
          <div onClick={goNext} className="absolute pb-4 pr-8 bottom-0 right-0">
            다음 {`>`}
          </div>
        </div>
      </div>
    </div>
  );
}
