import AngledBox from '@/component/prolog/AngledBox';

interface BottomButtonProps {
  buttonText: string;
  onClickEvent: () => void;
}

export default function BottomButton({
  buttonText,
  onClickEvent,
}: BottomButtonProps) {
  return (
    <div className="mb-4 text-center">
      <AngledBox>
        <span
          className="text-white text-[1.5rem] cursor-pointer"
          onClick={onClickEvent}
        >
          {buttonText}
        </span>
      </AngledBox>
      <div className="mt-8 w-[50%] mx-auto">
        <img src="src/assets/images/prolog/skku-logo.png" alt="SKKU Logo" />
      </div>

      <div className="absolute -right-0 bottom-32">
        <img
          src="src/assets/images/prolog/character-myungwoong.png"
          alt="Character Myungwoong"
          className="w-[110px] h-auto"
        />
      </div>
      <div className="absolute -left-0 bottom-12">
        <img
          src="src/assets/images/prolog/character-yuloong.png"
          alt="Character Yuloong"
          className="w-[100px] h-auto"
        />
      </div>
    </div>
  );
}
