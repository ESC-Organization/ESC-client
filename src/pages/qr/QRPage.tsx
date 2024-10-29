import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { usePutCoin } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';

export default function QRPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryClient = useQueryClient();
  const phone = useUserStore((state) => state.phone);

  const codeNum = 'CODE' + urlParams.get('code');

  // 코인 업데이트
  const { mutate: updateCoin } = usePutCoin({
    onSuccess: () => {
      console.log('Coin updated successfully');
      queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
    },
    onError: () => {
      alert('코인 지급에 실패했습니다. 다시 시도해주세요.');
    },
  });

  useEffect(() => {
    // updateCoin({ phone, code: codeNum });
  }, [phone, codeNum, updateCoin]);

  return <div>QRPage</div>;
}
