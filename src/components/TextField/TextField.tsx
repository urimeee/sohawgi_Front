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
          'w-full px-[1.0625rem] py-[0.8125rem] pr-[3.6rem] text-Grey_06 text-body_03 border border-Grey_02 bg-Grey_02 rounded-[10px] outline-none focus:bg-Grey_03 focus:border-Grey placeholder:text-Grey_04 placeholder:text-[14px]'
        }
        type="text"
        placeholder="일정을 입력하세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <button
        className="absolute right-[10px] top-1/2 -translate-y-1/2
                      px-[0.62rem] py-[0.31rem] bg-Grey_06 text-White
                      rounded-[1.875rem] text-body_04"
        type="button"
        onClick={(e) => postSchedule(e)}
      >
        등록
      </button>
    </form>
  );
};

export default TextField;
