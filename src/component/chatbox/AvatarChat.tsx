import React from 'react';
interface AvatarChatProps {
  idx: number;
  props: number;
  name: React.ReactNode;
  text: React.ReactNode;
  handleNext: (idx: number | null) => void;
}

const AVATAR_MAXLEN = 10;

export default function AvatarChat({
  idx,
  props,
  name,
  text,
  handleNext,
}: AvatarChatProps) {
  const imageSrc = `/src/assets/images/avatar/${props % AVATAR_MAXLEN}.png`;

  // Function to handle the '다음' click event
  const goNext = () => {
    handleNext(idx); // Send the current idx to the parent component
  };

  return (
    <div className="relative h-full w-full">
      <div className=" p-4 w-full max-w-[500px] absolute bottom-[50px]">
        <div className="w-40 absolute h-[200px] -top-[110px]">
          <img src={imageSrc} alt={`Avatar Step ${props}`} />{' '}
          {/* Use the dynamic image source */}
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
