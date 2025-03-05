import React from 'react';
import hamtori from '../../assets/images/hamtori.svg';

type Props = {
  month: number;
  day: number;
  dayOfWeek: string;
  title: string;
  onClick: () => void;
};

const ScheduleDetail = ({ month, day, dayOfWeek, title, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-start gap-[0.9rem] w-full cursor-pointer"
      onClick={onClick}
    >
      <img src={hamtori} alt="Hamtori" className="w-10 h-10" />
      <div className="flex flex-col gap-[0.05rem]">
        <div className="text-Grey_05 text-body_05">
          {month}월 {day}일 ({dayOfWeek})
        </div>
        <div className="text-Grey_06 text-body_02">{title}</div>
      </div>
    </div>
  );
};

export default ScheduleDetail;
