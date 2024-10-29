import { useState, useEffect, useRef } from 'react';
import Knight from '/src/assets/images/avatar/12.png';
import Monkey_dark1 from '/src/assets/images/items/monkey_dark1.png';
import Monkey_dark2 from '/src/assets/images/items/monkey_dark2.png';
import Monkey_light from '/src/assets/images/items/monkey_light.png';
import AttackGif from '/src/assets/images/attack/slash.gif';
import EffectSound from '/src/assets/sound/3.mp3'; // 효과음 파일 추가

interface GameProps {
  onGameOver: () => void;
  onGameClear: () => void;
}

interface MonkeyState {
  type: 'dark1' | 'dark2' | 'light';
  x: string;
  y: string;
  active: boolean;
}

export default function Game({ onGameOver, onGameClear }: GameProps) {
  const [attackEffect, setAttackEffect] = useState<{
    left: string;
    top: string;
  } | null>(null);
  const [monkeyStatus, setMonkeyStatus] = useState<MonkeyState[]>([
    { type: 'dark1', x: '10%', y: '50%', active: true },
    { type: 'dark2', x: '50%', y: '20%', active: true },
    { type: 'light', x: '90%', y: '50%', active: true },
  ]);

  const effectSoundRef = useRef<HTMLAudioElement | null>(null); // 효과음 레퍼런스 생성

  // 원숭이 위치를 무작위로 설정
  const randomizeMonkeyPositions = () => {
    setMonkeyStatus((prevStatus) =>
      prevStatus.map((monkey) => ({
        ...monkey,
        x: `${Math.random() * 80 + 10}%`,
        y: `${Math.random() * 80 + 10}%`,
      }))
    );
  };

  const handleMonkeyClick = (index: number) => {
    const clickedMonkey = monkeyStatus[index];

    setAttackEffect({ left: clickedMonkey.x, top: clickedMonkey.y });

    if (effectSoundRef.current) {
      effectSoundRef.current.currentTime = 0; // 매 클릭 시 효과음 시작 지점으로 설정
      effectSoundRef.current.play(); // 효과음 재생
    }

    if (clickedMonkey.type === 'light') {
      setTimeout(() => {
        onGameOver();
      }, 600);
    } else {
      setMonkeyStatus((prevStatus) =>
        prevStatus.map((monkey, i) =>
          i === index ? { ...monkey, active: false } : monkey
        )
      );

      const remainingDarkMonkeys = monkeyStatus.filter(
        (monkey) =>
          monkey.active && (monkey.type === 'dark1' || monkey.type === 'dark2')
      ).length;

      if (remainingDarkMonkeys === 1) {
        setTimeout(() => {
          onGameClear();
        }, 600);
      }
      setTimeout(() => setAttackEffect(null), 1000);
    }
  };

  // 원숭이 위치 자동 변경
  useEffect(() => {
    const intervalId = setInterval(randomizeMonkeyPositions, 800);
    return () => clearInterval(intervalId);
  }, []);

  // 게임 시간 제한
  useEffect(() => {
    const timer = setTimeout(() => {
      onGameOver();
    }, 10000);
    return () => clearTimeout(timer);
  }, [onGameOver]);

  // 원숭이 이미지 선택 함수
  const getMonkeyImage = (type: MonkeyState['type']) => {
    switch (type) {
      case 'dark1':
        return Monkey_dark1;
      case 'dark2':
        return Monkey_dark2;
      case 'light':
        return Monkey_light;
    }
  };

  return (
    <div className="absolute w-full h-full z-50">
      <audio ref={effectSoundRef} src={EffectSound} />{' '}
      {/* 효과음 오디오 태그 */}
      <div className="absolute bottom-5 left-5 z-50 w-[200px] h-[200px] sm:w-[150px] sm:h-[150px]">
        <img
          src={Knight}
          className="object-contain scale-x-[-1]"
          alt="Knight"
        />
      </div>
      {monkeyStatus.map(
        (monkey, index) =>
          monkey.active && (
            <img
              key={index}
              src={getMonkeyImage(monkey.type)}
              style={{ left: monkey.x, top: monkey.y }}
              className="absolute w-30 h-30 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-all duration-700 cursor-pointer"
              alt={`원숭이 ${index + 1}`}
              onClick={() => handleMonkeyClick(index)}
            />
          )
      )}
      {attackEffect && (
        <img
          src={AttackGif}
          style={{ left: attackEffect.left, top: attackEffect.top }}
          className="absolute w-20 h-20 md:w-24 md:h-24 pointer-events-none"
          alt="공격 애니메이션"
        />
      )}
    </div>
  );
}
