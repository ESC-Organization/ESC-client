import React from 'react';
import { useState } from 'react';
import Monkey from '../../images/items/monkey.png';
interface ObjectProps {
  q: React.ReactNode;
  onSubject: (subject: string) => void;
}
export default function Subject({ q, onSubject }: ObjectProps) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 제출 버튼을 클릭했을 때 호출되는 함수
  const handleSubmit = () => {
    console.log(inputValue);
    onSubject(inputValue); // 입력된 값 외부로 전달
  };

  return (
    <div className="flex flex-col p-2 gap-2 w-full h-full transform relative z-[80] bg-[#00000059] flex justify-center items-center">
      <div className="relative p-4 text-white border-4 border-[#606060] w-[90%]   bg-[#404040]">
        <div className="absolute -top-[15%] w-[30%] left-[35%] -z-[10]">
          <img src={Monkey} />
        </div>
        <div className="mt-[15%]">{q}</div>
        <div className="p-2 mt-[5%] mb-[5%] flex flex-col w-full gap-4">
          <div className="p-2 rounded-[5px] bg-[#FFFFFF] w-full mx-auto  border-[4px] border-[#808080]">
            <input
              className="placeholder-white"
              style={{ WebkitTextStroke: '1px #000' }}
              placeholder="정답을 적어주세요"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-[5%] mb-[10%] text-right">
          <span style={{ WebkitTextStroke: '1px #000' }} onClick={handleSubmit}>
            제출하기 {`>`}
          </span>
        </div>
      </div>
    </div>
  );
}
