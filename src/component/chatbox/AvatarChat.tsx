import React from 'react';
import Mainbox from './Mainbox';
interface AvatarChatProps {
  props: number;
}

const AvatarChat: React.FC<AvatarChatProps> = ({ props }) => {
  const imageSrc = `../../images/avatar/${props}.png`;

  return (
    <div className="relative w-full justify-center">
      <div className="w-full max-w-[500px] absolute bottom-[150px]">
        <div className="w-40 absolute h-[200px] -top-[125px]">
          <img src={imageSrc} alt={`Avatar Step ${props}`} />{' '}
          {/* Use the dynamic image source */}
        </div>
        <Mainbox />
      </div>
    </div>
  );
};

export default AvatarChat;
