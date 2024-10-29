import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import QRFail from '@/component/qr/QRFail';
import QRSuccess from '@/component/qr/QRSuccess';
import { usePutCoin } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';

export default function QRPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const phone = useUserStore((state) => state.phone);

  const codeNum = 'CODE' + urlParams.get('code');

  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  // 코인 업데이트
  const { mutate: updateCoin } = usePutCoin({
    onSuccess: () => {
      console.log('Coin updated successfully');
      queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
      setStatus('success');
    },
    onError: () => {
      setStatus('error');
    },
  });

  useEffect(() => {
    updateCoin({ phone, code: codeNum });
  }, [phone, codeNum, updateCoin]);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        navigate('/play');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  // 상태에 따라 결과 렌더링
  if (status === 'success') {
    return <QRSuccess />;
  }

  if (status === 'error') {
    return <QRFail />;
  }

  return <div className="flex justify-center w-full h-full bg-[##F2F2F2]" />;
}
