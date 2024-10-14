import React, { useState } from 'react';
import AngledBox from '@/component/prolog/AngledBox';
import AngledInputBox from '@/component/prolog/AngledInputBox';

export default function Login() {
  const [nickname, setNickname] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // url에서 캐릭터 정보 가져오기
  const character = new URLSearchParams(window.location.search).get(
    'character'
  );

  // 로그인 버튼 클릭
  // TODO: 로그인 처리 api 연동
  const handleLogin = () => {
    console.log('닉네임, 전화번호, 캐릭터:', nickname, phoneNumber, character);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNickname(e.target.value);
    }
  };

  return (
    <div className="flex flex-col w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/login-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="z-10 flex flex-1 flex-col items-center justify-between">
        <div className="pt-[80px]">
          <AngledBox>
            <span className="text-white text-[2.5rem]">로그인</span>
          </AngledBox>
        </div>

        {/* 입력 영역 */}
        <div className="px-8 w-full flex-1 flex items-center justify-center">
          <AngledBox>
            <div className="flex flex-col mx-4 max-w-[300px] py-16 gap-8">
              <div>
                <span className="text-white text-[1.5rem] text-left">
                  닉네임
                </span>
                <AngledInputBox>
                  <input
                    type="text"
                    className="h-[40px] text-black text-[1.2rem] text-center bg-[#F0F0F0] text-white"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={handleNicknameChange}
                  />
                </AngledInputBox>
              </div>

              <div>
                <span className="text-white text-[1.5rem] text-left">
                  전화번호
                </span>
                <AngledInputBox>
                  <input
                    type="text"
                    className="h-[40px] text-black text-[1.2rem] text-center bg-[#F0F0F0] text-white"
                    placeholder="전화번호"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </AngledInputBox>
              </div>
            </div>
          </AngledBox>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mb-8 text-center relative">
          <AngledBox>
            <span
              className="text-white text-[1.5rem] cursor-pointer"
              onClick={handleLogin}
            >
              다음
            </span>
          </AngledBox>
          <div className="mt-12 w-[50%] mx-auto">
            <img src="src/assets/images/prolog/skku-logo.png" alt="SKKU Logo" />
          </div>

          <div className="absolute -right-[10px] -top-[40px] bottom-0">
            <img
              src="src/assets/images/prolog/character-myungwoong.png"
              alt="Character Myungwoong"
              className="w-[110px] h-auto"
            />
          </div>
          <div className="absolute -left-[10px] bottom-0">
            <img
              src="src/assets/images/prolog/character-yuloong.png"
              alt="Character Yuloong"
              className="w-[100px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
