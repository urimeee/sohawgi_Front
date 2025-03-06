import React from 'react';

interface TextFieldProps {
  postSchedule: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => void;
  schedule: string;
  setSchedule: (e: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  postSchedule,
  setSchedule,
  schedule,
}: TextFieldProps) => {
  return (
    <form className={'relative flex w-full'} onSubmit={postSchedule}>
      <input
        className={
          'w-full px-[1.0625rem] py-[0.8125rem] pr-[3.6rem] outline-none text-Grey_06 body_03 bg-Grey_02 rounded-10 focus:border-1 focus:border-Grey_06 placeholder:text-Grey_04 placeholder:text-14'
        }
        type="text"
        placeholder="일정을 입력하세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <button
        className={`absolute right-10 top-1/2 -translate-y-1/2 px-[0.62rem] py-[0.31rem] 
                      ${schedule ? 'bg-Grey_06' : 'bg-Grey_04'} text-White 
                      rounded-[1.875rem] body_04 focus:bg-Grey_06`}
        type="button"
        onClick={(e) => postSchedule(e)}
      >
        등록
      </button>
    </form>
  );
};

export default TextField;
