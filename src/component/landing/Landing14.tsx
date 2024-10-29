import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import AngledBox from '../prolog/AngledBox';
import { useSubmitQuiz } from '@/api/hooks';
import { useUserStore } from '@/store/useUserStore';

export default function Landing14() {
  const phone = useUserStore((state) => state.phone);
  const queryClient = useQueryClient();

  const { mutate: submitQuiz } = useSubmitQuiz({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo', phone] });
    },
  });

  const navigate = useNavigate();
  // 지금 플레이 클릭
  const onClickPlay = () => {
    if (!phone) {
      navigate('/home');
    } else {
      submitQuiz({ phone, correct: 'true', stage: '0' });
      navigate('/play');
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/prolog/landing-sixth-bg.png')`,
        }}
      />

      {/* 콘텐츠 */}
      {/* //가로세로 중앙정렬 */}

      <div className="z-10 text-center text-white text-[1.8rem]">
        <span className="text-[#14AE5C]">당신의 도움</span>
        <span>이 필요합니다</span>
        {/* <div className="mt-4" onClick={() => alert('지금 플레이')}> */}
        <div className="mt-4 cursor-pointer" onClick={onClickPlay}>
          <AngledBox>
            <span>지금 플레이</span>
          </AngledBox>
        </div>
      </div>
    </div>
  );
}
