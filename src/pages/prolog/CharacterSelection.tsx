import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';

export default function CharacterSelection() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<string>('boy');

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
  };

  const handleNavigateToLogin = () => {
    if (selectedCharacter) {
      navigate(`/login?character=${selectedCharacter}`);
    }
  };

  return (
    <div className="flex flex-col w-full h-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/character-choose-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="z-10 flex flex-1 flex-col items-center">
        <div className="pt-[80px]">
          <AngledBox>
            <span className="text-white text-[2.5rem]">캐릭터 선택</span>
          </AngledBox>
        </div>

        {/* 캐릭터 선택 섹션 */}
        <div className="flex flex-col mt-auto mb-auto mx-4">
          <div className="flex ">
            <div
              className={
                'flex flex-col items-center cursor-pointer transition-all duration-300 mt-4'
              }
              style={
                selectedCharacter === 'boy' ? { transform: 'scale(1.3)' } : {}
              }
              onClick={() => handleCharacterSelect('boy')}
            >
              {selectedCharacter === 'boy' && (
                <div className="relative w-[24px] h-[24px]">
                  <img src="/src/assets/images/prolog/character-pointer.png" />
                </div>
              )}
              <img
                src="src/assets/images/prolog/character-yuloong.png"
                alt="Character Boy"
                className={`w-[170px] h-auto mb-4 ${
                  selectedCharacter === 'boy' ? 'w-[200px]' : ''
                }`}
              />
            </div>

            {/* Character Girl */}
            <div
              className={
                'flex flex-col items-center cursor-pointer transition-all duration-300 '
              }
              style={
                selectedCharacter === 'girl' ? { transform: 'scale(1.3)' } : {}
              }
              onClick={() => handleCharacterSelect('girl')}
            >
              {selectedCharacter === 'girl' && (
                <div className="relative w-[24px] h-[24px]">
                  <img src="/src/assets/images/prolog/character-pointer.png" />
                </div>
              )}
              <img
                src="src/assets/images/prolog/character-myungwoong.png"
                alt="Character Girl"
                className={`w-[200px] h-auto mb-4 ${
                  selectedCharacter === 'girl' ? 'w-[200px]' : ''
                }`}
              />
            </div>
          </div>
          {/* 캐릭터 설명 텍스트 */}
          <div className="mt-8 text-white text-center">
            {selectedCharacter === 'boy' && (
              <AngledBox>
                <span>
                  율웅이는 율전의 영웅입니다! <br />
                  자연사회과학적 지식을 지니고 있습니다.
                </span>
              </AngledBox>
            )}
            {selectedCharacter === 'girl' && (
              <AngledBox>
                <span>
                  명웅이는 명륜의 영웅입니다! <br />
                  인문사회과학적 지식을 지니고 있습니다.
                </span>
              </AngledBox>
            )}
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mb-8 text-center">
          <AngledBox>
            <span
              className="text-white text-[1.5rem] cursor-pointer"
              onClick={handleNavigateToLogin}
            >
              플레이하기
            </span>
          </AngledBox>
          <div className="mt-12 w-[50%] mx-auto">
            <img src="src/assets/images/prolog/skku-logo.png" alt="SKKU Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
