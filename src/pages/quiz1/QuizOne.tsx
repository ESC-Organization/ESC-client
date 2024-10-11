import WhiteBox from '@/component/chatbox/whiteBox';
export default function QuizOne() {
  return (
    <div className="flex justify-center w-full h-full bg-[#793A1C]">
      <div className="w-full max-w-[500px] absolute bottom-[250px]">
        <img src="/images/bg/bg2.png" />
      </div>
      <div className="w-full max-w-[500px] absolute bottom-0 h-[250px] z-30 bg-[#661AAF]"></div>
      <div className="w-full max-w-[500px] absolute bottom-[250px] z-20">
        <div className="w-[40%]">
          <img src="/images/avatar/5.png" />
        </div>
      </div>
      <div className="w-full absolute top-[10%] p-4">
        <WhiteBox
          text={
            <>
              <span>내 연구생이 기숙사를 </span>
              <br />
              <span>가서 돌아오지 않는다</span>
            </>
          }
        />
        <WhiteBox
          text={
            <>
              <span>거기 우리에게 꼭 필요한</span>
              <br />
              <span>방호복이 있는데..</span>
            </>
          }
        />
        <WhiteBox
          text={
            <>
              <span>4층에 산다고</span>
              <br />
              <span>했던 거 같은데..</span>
            </>
          }
        />
        <WhiteBox
          text={
            <>
              <span>어디인지 아는가?</span>
            </>
          }
        />
      </div>
    </div>
  );
}
