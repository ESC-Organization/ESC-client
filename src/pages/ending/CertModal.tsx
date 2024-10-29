import TypoGameClear from '/src/assets/images/items/typo-GAMECLEAR.png';
import Avatar5Src from '/src/assets/images/avatar/5.png';
import CertificateSrc from '/src/assets/images/items/certificate.png';
import ShareSrc from '/src/assets/images/items/share.png';
interface CertModalProps {
  onShare: () => void;
  clearInfo: {
    nickname: string;
    cleartime: string;
    ranking: number;
  };
}

export default function CertModal({ onShare, clearInfo }: CertModalProps) {
  return (
    <div className="absolute h-full w-full">
      <div className=" p-6 my-auto h-[70%] max-h-[600px] w-full max-w-[500px] absolute bottom-[15%]">
        <div className="w-[95%] absolute z-[70] left-[50%] -translate-x-1/2 drop-shadow-xl top-10">
          <img src={TypoGameClear} alt="Game Clear" />
        </div>
        <div className="w-16 absolute h-[50px] -top-[40px] left-[50%] -translate-x-1/2">
          <img src={Avatar5Src} />
        </div>
        {/* 인증서 박스 */}
        <div className="my-auto h-full p-4 flex flex-col items-center justify-between text-xl isolate *:drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)] text-[#F0F0F0] bg-[#D9A066] rounded-[8px] border-4 border-[#8F563B] whitespace-pre-line">
          <div className="w-[60%] mt-20 !drop-shadow-xl">
            <img src={CertificateSrc} alt="인증서" />
          </div>
          <div className="text-3xl mt-4">용사 인증서</div>
          <div className="text-center">
            ‘{clearInfo.nickname}’ 당신을
            <br />
            <span className="text-[#14AE5C]">율전의 영웅</span>으로 임명합니다.
          </div>
          <div className="flex flex-col gap-1 text-base w-[60%]">
            <div className="flex place-content-between">
              <div>닉네임</div>
              <div>{clearInfo.nickname}</div>
            </div>
            <div className="flex place-content-between">
              <div>클리어시간</div>
              <div>{clearInfo.cleartime}</div>
            </div>
            <div className="flex place-content-between">
              <div>랭킹</div>
              <div>{clearInfo.ranking}위</div>
            </div>
          </div>
          <div className="w-full px-4 text-sm flex place-content-between">
            <div>9oormthonuniv.skku</div>
            <div>2024.10.29.</div>
          </div>
        </div>
        {/* 공유버튼 */}
        <div
          onClick={onShare}
          className="absolute p-4 -bottom-10 left-[52%] -translate-x-1/2 flex items-center gap-2 "
        >
          <span className="text-xl text-white drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)]">
            공유하기
          </span>
          <span>
            <img src={ShareSrc} alt="공유" className="h-8" />
          </span>
        </div>
      </div>
    </div>
  );
}
