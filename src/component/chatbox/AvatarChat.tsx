import React from 'react';
import avatar0 from '@/assets/images/avatar/0.png';
import avatar1 from '@/assets/images/avatar/1.png';
import avatar2 from '@/assets/images/avatar/2.png';
import avatar3 from '@/assets/images/avatar/3.png';
import avatar4 from '@/assets/images/avatar/4.png';
import avatar5 from '@/assets/images/avatar/5.png';
import avatar6 from '@/assets/images/avatar/6.png';
import avatar7 from '@/assets/images/avatar/7.png';
import avatar8 from '@/assets/images/avatar/8.png';
import avatar9 from '@/assets/images/avatar/9.png';

interface AvatarChatProps {
  idx: number;
  props: number;
  name: React.ReactNode;
  text: React.ReactNode;
  handleNext: (idx: number | null) => void;
}

const AVATAR_IMAGES = [
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
];

export default function AvatarChat({
  idx,
  props,
  name,
  text,
  handleNext,
}: AvatarChatProps) {
  const imageSrc = AVATAR_IMAGES[props % AVATAR_IMAGES.length];

  const goNext = () => {
    handleNext(idx);
  };

  return (
    <div className="relative h-full w-full">
      <div className="p-4 w-full max-w-[500px] absolute bottom-[50px]">
        <div className="w-40 absolute h-[200px] -top-[110px]">
          <img src={imageSrc} alt={`Avatar Step ${props}`} />
        </div>

        <div className="h-48 p-4 flex flex-col gap-2 text-[20px] isolate *:drop-shadow text-[#F0F0F0] bg-[#D9A066] rounded-[8px] border-4 border-[#8F563B] whitespace-pre-line">
          <div className="text-[1.2rem]">{name}</div>
          <div className="pl-2">{text}</div>
          <div onClick={goNext} className="absolute p-4 bottom-4 right-4">
            다음 {`>`}
          </div>
        </div>
      </div>
    </div>
  );
}
