import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AngledBox from '@/component/prolog/AngledBox';
import loginPageBg from '@/assets/images/prolog/login-page-bg.png';
import characterPointer from '@/assets/images/prolog/character-pointer.png';
import characterYuloong from '@/assets/images/prolog/character-yuloong.png';
import characterMyungwoong from '@/assets/images/prolog/character-myungwoong.png';
import skkuLogo from '@/assets/images/prolog/skku-logo.png';

export default function CharacterSelection() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
  };

  const handleNavigateToLogin = () => {
    if (selectedCharacter) {
      navigate(`/login?character=${selectedCharacter}`);
    }
  };

  return (
    <div className="flex flex-col w-screen h-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginPageBg})`,
        }}
      />

      <div className="z-10 flex flex-1 flex-col items-center overflow-hidden">
        <div className="pt-16">
          <AngledBox>
            <span className="text-white text-[2.5rem]">캐릭터 선택</span>
          </AngledBox>
        </div>

        <div className="content-wrapper flex flex-col w-full mt-auto mb-auto mx-4">
          <div className="mt-8 flex justify-center gap-12 relative">
            <div
              className="relative flex flex-col items-center cursor-pointer transition-all duration-300"
              style={{
                transform:
                  selectedCharacter === 'boy' ? 'scale(1.3)' : 'scale(1)',
                transformOrigin: 'center bottom',
              }}
              onClick={() => handleCharacterSelect('boy')}
            >
              {selectedCharacter === 'boy' && (
                <div className="absolute -top-8 w-[24px] h-[24px]">
                  <img src={characterPointer} alt="Pointer" />
                </div>
              )}
              <img
                src={characterYuloong}
                alt="Character Boy"
                className="w-[96px] h-auto mb-4"
              />
            </div>

            <div
              className="relative flex flex-col items-center cursor-pointer transition-all duration-300"
              style={{
                transform:
                  selectedCharacter === 'girl' ? 'scale(1.3)' : 'scale(1)',
                transformOrigin: 'center bottom',
              }}
              onClick={() => handleCharacterSelect('girl')}
            >
              {selectedCharacter === 'girl' && (
                <div className="absolute -top-8 w-[24px] h-[24px]">
                  <img src={characterPointer} alt="Pointer" />
                </div>
              )}
              <img
                src={characterMyungwoong}
                alt="Character Girl"
                className="w-[96px] h-auto mb-4"
              />
            </div>
            <div className="text-white absolute top-32 w-full 500px:px-12">
              <div className="flex justify-start">
                {selectedCharacter === '' && (
                  <AngledBox
                    background="bg-[#909090]"
                    border="border-[#808080]"
                    lineBackground="bg-[#E0E0E0] opacity-50"
                    className="w-full"
                  >
                    <span>캐릭터를 선택해주세요</span>
                  </AngledBox>
                )}
                {selectedCharacter === 'boy' && (
                  <AngledBox
                    background="bg-[#909090]"
                    border="border-[#808080]"
                    lineBackground="bg-[#E0E0E0] opacity-50"
                    className="w-full"
                    onClick={handleNavigateToLogin}
                  >
                    <span>
                      '율웅이'는 율전의 영웅입니다! <br />
                      자연과학적 지식을 지녔습니다.
                    </span>
                  </AngledBox>
                )}
                {selectedCharacter === 'girl' && (
                  <AngledBox
                    background="bg-[#909090]"
                    border="border-[#808080]"
                    lineBackground="bg-[#E0E0E0] opacity-50"
                    className="w-full"
                    onClick={handleNavigateToLogin}
                  >
                    <span>
                      '명웅이'는 명륜의 영웅입니다! <br />
                      인문사회과학적 지식을 지녔습니다.
                    </span>
                  </AngledBox>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="w-[50%] mx-auto">
            <img src={skkuLogo} alt="SKKU Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
