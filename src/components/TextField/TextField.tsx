import React, { useEffect, useState } from 'react';
import useSchedules from '../../hooks/useScheduleMutation';
import LoadingSpinner from '../LoadingSpinner';
import ToastBar from '../ToastBar';


const TextField = () => {
  const { postSchedule, isPosting, postError } = useSchedules()
  const [isOpenToast, setIsOpenToast] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSchedule(inputValue.trim());
    setInputValue('');
  };

  const closeToast = () => {
    setIsOpenToast(!isOpenToast);
  }

  useEffect(() => {
    if (postError) {
      setIsOpenToast(false); // 👈 먼저 꺼주고
      setTimeout(() => setIsOpenToast(true), 10); // 👈 다시 true로 (delay로 리렌더 보장)
    }
  }, [postError]);

  return (
    <>
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
      {postError && isOpenToast && <ToastBar msg={"잠시후에 다시 시도해주세요!"} onClose={closeToast} />}
      {isPosting && <LoadingSpinner />}
    </form>
    </>
);
};

export default React.memo(TextField);
