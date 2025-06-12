import React, { useState } from 'react';

interface TextFieldProps {
  postSchedule: (schedule: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ postSchedule }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // 빈 값 방지
    postSchedule(inputValue); // mutate 함수 호출
    setInputValue(''); // 입력값 초기화
  };

  return (
    <form
      className={'sticky pt-80 pb-37 top-0 flex w-full'}
      onSubmit={handleSubmit}
    >
      <div className={'w-full relative'}>
        <input
          className={
            ' w-full px-[1.0625rem] py-[0.8125rem] pr-[3.6rem] outline-none border border-transparent text-Grey_06 body_03 bg-Grey_02 rounded-15 focus:border-1 focus:border-Grey_06 placeholder:text-Grey_04 placeholder:text-14'
          }
          type="text"
          placeholder="예 ) 오늘 오후 7시 팀플 회의"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={`absolute right-10 top-1/2 -translate-y-1/2 px-[0.62rem] py-[0.31rem] 
                      ${inputValue ? 'bg-Grey_06' : 'bg-Grey_04'} text-White 
                      rounded-[1.875rem] body_04 focus:bg-Grey_06`}
          type="submit"
          disabled={!inputValue.trim()}
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default TextField;
