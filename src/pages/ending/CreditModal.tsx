import skkuLogo from '@/assets/images/prolog/skku-logo.png';

interface CreditModalProps {
  onClose: () => void;
}

export default function CreditModal({ onClose }: CreditModalProps) {
  const credits = [
    {
      category: '만든이',
      contents: [
        {
          role: '소속',
          name: '구름톤 유니브 성균관대',
        },
        {
          role: '기획',
          name: '김민서 오진석',
        },
        {
          role: '디자인',
          name: '김동건 이송목',
        },
        {
          role: '프론트엔드 개발',
          name: '김태건 이재림 김민서',
        },
        {
          role: '백엔드 개발',
          name: '이송목',
        },
      ],
    },
    {
      category: '장소 제공',
      contents: [
        {
          name: '성균관대학교 성균융합원 학생회 ICON',
        },
      ],
    },
    {
      category: '기획 동기 및 의도',
      contents: [
        {
          name: `저희끼리 프로젝트를 하나 하자고 이야기했었는데, 학교를 소개할 만한 소재로 온라인 방탈출을 기획하면 재미있을 것 같았어요!

          성대인들만 공감할 수 있는 이야기를 퀴즈로 풀어나가고 싶었습니다. 팀원들이 에브리타임 밈에 대해 어느정도 알고 있는 편이라 공감대가 쉽게 형성되었던 것 같아요.

          마침 몇몇 학과에서 할로윈 파티를 기획하고 있다는 소식을 들어서 해당 행사에서 공개하는 것을 목표로 다들 열심히 개발을 진행했습니다.

          앞으로 다양한 컨텐츠를 보충하여 학교를 알릴 수 있는 하나의 장치로 사용되면 좋겠습니다.
          `,
        },
      ],
    },
    {
      category: '제작자들의 한 마디',
      contents: [
        {
          role: '김민서',
          name: `
            소소한 밈과 킹받음을 플레이하시면서 
            알아채셨다면,, 당신도 밈 마스터!

            프로젝트 진행하면서
            정말 행복하고 재미있었어요!

            마지막으로 모든 도트를 손수 찍어준 
            동건오빠에게 샤라웃을 보냅니다 !!
          `,
        },
        {
          role: '이송목',
          name: `
            구름톤 유니브 덕분에 좋은 사람들과 재미있는 프로젝트를 해보게 되었네요..ㅎㅎ

            본인의 파트가 아님에도 열심히 기여해 준 민서와 동건이에게 감사를 표합니다.
          `,
        },
        {
          role: '김동건',
          name: `
            처음 기획부터 기발한 아이디어들에 어디로 튈 지 몰랐던 프로젝트였는데요, 완성까지 잘 이끌어준 팀원들에게 큰 사랑을 보냅니다...S2

            처음 도전해 본 픽셀아트 많이들 좋아해주셔서 감사합니다:>
          `,
        },
        {
          role: '김태건',
          name: `
            여러분이 모은 코인 하나하나, 퀴즈 하나하나가 제 코드 수십줄의 피땀눈물이였습니다,,,

            제 피땀눈물을 함께해준 모든 팀원들 너무 고맙고, 피땀눈물의 결과물을 재밌게 즐겨주신 여러분들도 모두 감사드려요!!

            재밌게 즐겨주셔서 감사합니다 :)
          `,
        },
        {
          role: '이재림',
          name: `
            소소한 선물도 받아보면서 직접 제작한
            귀여운 픽셀 율전명륜 캐릭터들도 구경해보는 재미!

            힘들었을텐데  내색없이 
            함께 고생해준 우리팀 친구들 너무 감사합니다!!
            덕분에 재밌게 즐기면서 플젝했슴다!
          `,
        },
        {
          role: '오진석',
          name: `
            팀원 중 한 명이라도 없었다면 시작하지도 못했을 프젝... 
            첫 프로젝트를 너무 좋은 사람들과 함께해 즐거운 경험이었습니다!
          `,
        },
      ],
    },
  ];
  return (
    <div className="absolute h-full w-full">
      <div className=" p-6 my-auto h-[90%] max-h-[800px] w-full max-w-[500px] absolute bottom-[5%]">
        {/* 크레딧 박스 */}
        <div className="my-auto h-full p-4 text-xl overflow-y-scroll scrollbar-hide isolate *:drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)] text-[#F0F0F0] bg-[#00000060] rounded-[8px] border-4 border-[#808080]">
          <div className="h-[260rem] flex flex-col items-center justify-evenly whitespace-pre-line break-keep text-center">
            {credits.map((credit, i) => (
              <>
                <div key={i}>
                  <span className="text-2xl text-[#14AE5C]">
                    {credit.category}
                  </span>
                </div>
                {credit.contents.map((content, j) => (
                  <div key={`${i}-${j}`}>
                    {'role' in content && (
                      <span className="text-gray-300">
                        {content.role}
                        <br />
                      </span>
                    )}
                    {content.name}
                  </div>
                ))}
              </>
            ))}
            <div className="text-base text-gray-300">
              {`
              
              - 본 스토리는 모두 픽션입니다 -

              「ESC: 지금 우리 율전은」에 등장하는 모든 원숭이들은 안전하게
              섭외되었습니다.
              
              `}
            </div>
            <div className="">
              지금까지 「
              <span className="text-[#14AE5C]">ESC: 지금 우리 율전은</span>
              {`」을
              플레이해주셔서 감사합니다
              
              저희 구름톤 유니브 성균관대의
              다음 활동도 기대해주세요`}
            </div>
            <div className="mb-8 w-[50%] mx-auto">
              <img src={skkuLogo} alt="SKKU Logo" />{' '}
            </div>
          </div>
        </div>
        {/* 닫기버튼 */}
        <div
          onClick={onClose}
          className="p-4 absolute bottom-8 right-8 flex items-center gap-2 "
        >
          <span className="text-xl text-white drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)]">
            Skip {'>'}
          </span>
        </div>
      </div>
    </div>
  );
}
