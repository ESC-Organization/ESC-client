import React, { useState } from 'react';
import AngledBox from '@/component/prolog/AngledBox';
import AngledInputBox from '@/component/prolog/AngledInputBox';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
import { useUserStore } from '@/store/useUserStore';

export default function Login() {
  const [nicknameState, setNicknameState] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { setPhone, setNickname } = useUserStore();

  // 로그인 버튼 클릭 - API 요청 및 Zustand 상태 업데이트
  const handleLogin = async () => {
    setPhone(phoneNumber);
    setNickname(nicknameState);

    // 필요 시 다음 페이지로 이동
    alert('로그인 성공!');
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNicknameState(e.target.value);
    }
  };

  return (
    <div className="flex flex-col w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/login-page-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="z-10 flex flex-1 flex-col items-center justify-between relative overflow-hidden">
        <div className="content-wrapper pt-16">
          <AngledBox>
            <span className="text-white text-[2.5rem]">로그인</span>
          </AngledBox>
        </div>

        {/* 입력 영역 */}
        <div className="content-wrapper w-full flex-1 flex items-center justify-center">
          <AngledMonkeyBox>
            <div className="flex flex-col px-2 py-8 gap-4">
              <div>
                <span className="text-white text-[1rem] text-left">닉네임</span>
              </div>
              <AngledInputBox>
                <input
                  type="text"
                  className="h-[40px] text-black text-[1rem] text-center bg-[#F0F0F0]"
                  placeholder="닉네임"
                  value={nicknameState}
                  onChange={handleNicknameChange}
                />
              </AngledInputBox>

              <div>
                <span className="text-white text-[1rem] text-left">
                  전화번호
                </span>
              </div>
              <AngledInputBox>
                <input
                  type="text"
                  className="h-[40px] text-black text-[1rem] text-center bg-[#F0F0F0]"
                  placeholder="전화번호"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </AngledInputBox>
              <div className="text-white text-[0.6rem] text-center mt-4">
                <span>• 닉네임은 입력 후 변경할 수 없습니다</span>
                <br />
                <span>
                  • 전화번호는 경품 추첨을 위해 사용되며 사용 후 안전하게
                  파기됩니다
                </span>
              </div>
            </div>
          </AngledMonkeyBox>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="content-wrapper flex flex-col mx-auto mb-4 text-center justify-between">
          <div>
            <AngledBox>
              <span
                className="text-white text-[1.5rem] cursor-pointer"
                onClick={handleLogin}
              >
                다음
              </span>
            </AngledBox>
          </div>
        </div>

        {/* 로고 */}
        <div className="mb-8 w-[50%] mx-auto">
          <img src="src/assets/images/prolog/skku-logo.png" alt="SKKU Logo" />
        </div>
      </div>
    </div>
  );
}
