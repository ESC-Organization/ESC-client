import { useEffect } from 'react';

interface GameOverlayProps {
  status: 'start' | 'clear' | 'over';
  onFinish: () => void;
}

export default function GameOverlay({ status, onFinish }: GameOverlayProps) {
  useEffect(() => {
    if (status === 'start') {
      const timer = setTimeout(onFinish, 3000); // 3초 후 오버레이 종료
      return () => clearTimeout(timer);
    }
  }, [status, onFinish]);

  const overlayText =
    status === 'start'
      ? '- Game Start! -'
      : status === 'clear'
        ? '- Game Clear! -'
        : '- Game Over -';

  return (
    <div className="flex flex-col items-center justify-center w-full h-1/4 z-30 space-y-8">
      <h1 className="text-white text-4xl sm:text-5xl font-bold">
        {overlayText}
      </h1>
    </div>
  );
}
