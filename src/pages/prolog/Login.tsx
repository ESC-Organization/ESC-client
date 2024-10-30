import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import AngledInputBox from '@/component/prolog/AngledInputBox';
import AngledMonkeyBox from '@/component/prolog/AngledMonkeyBox';
import { useLoginUser } from '@/api/hooks';
import loginPageBg from '@/assets/images/prolog/login-page-bg.png';
import skkuLogo from '@/assets/images/prolog/skku-logo.png';
import { useUserStore } from '@/store/useUserStore';

export default function Login() {
  const { setPhone, setNickname } = useUserStore();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const [nicknameState, setNicknameState] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const character =
    urlParams.get('character') === 'boy' ? 'YUL_UNG' : 'MYEONG_UNG';

  const { mutate: loginUser } = useLoginUser({
    onSuccess: () => {
      setPhone(phoneNumber);
      setNickname(nicknameState);
      alert(
        '로그인에 성공했습니다. 이제 프롤로그를 시작합니다. 화면을 넘기면 프롤로그가 시작됩니다.'
      );
      navigate(`/prolog`);
    },
    onError: () => {
      alert(
        '로그인에 실패했습니다. 닉네임, 전화번호가 중복되진 않았는지 확인해주세요.'
      );
    },
  });

  const handleLogin = () => {
    if (!phoneNumber || !nicknameState) {
      return alert('전화번호와 닉네임을 입력해 주세요.');
    }
    loginUser({
      phone: phoneNumber,
      nickname: nicknameState,
      character: character,
    });
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNicknameState(e.target.value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.includes('-')) {
      setPhoneError("'-'를 제외하고 입력해주세요. (ex>: 01012345678)");
    } else {
      setPhoneError(null); // 에러 메시지 초기화
      setPhoneNumber(input);
    }
  };

  return (
    <div className="flex flex-col w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginPageBg})`, // import된 이미지 사용
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
                  onChange={handlePhoneChange}
                />
              </AngledInputBox>
              {phoneError && (
                <div className="text-red-400 text-[0.8rem] mt-2 text-center">
                  {phoneError}
                </div>
              )}
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
          <img src={skkuLogo} alt="SKKU Logo" />{' '}
          {/* import된 로고 이미지 사용 */}
        </div>
      </div>
    </div>
  );
}
