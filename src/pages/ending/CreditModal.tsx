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
          name: '',
        },
        {
          role: '이송목',
          name: `구름톤 유니브 덕분에 좋은 사람들과 재미있는 프로젝트를 해보게 되었네요..ㅎㅎ

          본인의 파트가 아님에도 열심히 기여해 준 민서와 동건이에게 감사를 표합니다.`,
        },
        {
          role: '김동건',
          name: '',
        },
        {
          role: '김태건',
          name: '',
        },
        {
          role: '이재림',
          name: '',
        },
        {
          role: '오진석',
          name: '',
        },
      ],
    },
  ];
  return (
    <div className="absolute h-full w-full">
      <div className=" p-6 my-auto h-[90%] max-h-[800px] w-full max-w-[500px] absolute bottom-[5%]">
        {/* 크레딧 박스 */}
        <div className="my-auto h-full p-4 text-xl overflow-scroll isolate *:drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)] text-[#F0F0F0] bg-[#00000060] rounded-[8px] border-4 border-[#808080]">
          <div className="h-[400%] flex flex-col items-center justify-around whitespace-pre-line text-center">
            {credits.map((credit) => (
              <>
                <div>
                  <span className="text-[#14AE5C]">{credit.category}</span>
                </div>
                {credit.contents.map((content) => (
                  <>
                    <div>
                      {'role' in content && (
                        <span className="text-gray-300">
                          {content.role}
                          <br />
                        </span>
                      )}
                      {content.name}
                    </div>
                  </>
                ))}
              </>
            ))}
            <div className="text-base">
              「지금 우리 율전은」에 등장하는 모든 원숭이들은 안전하게
              섭외되었습니다.
            </div>
            <div className="w-full px-4 text-sm flex place-content-between">
              <div>9oormthonuniv.skku</div>
              <div>2024.10.</div>
            </div>
          </div>
        </div>
        {/* 닫기버튼 */}
        <div
          onClick={onClose}
          className="absolute p-4 absolute bottom-8 right-8 flex items-center gap-2 "
        >
          <span className="text-xl text-white drop-shadow-[0.2px_0.2px_1.5px_rgba(0,0,0,0.8)]">
            Skip {'>'}
          </span>
        </div>
      </div>
    </div>
  );
}
