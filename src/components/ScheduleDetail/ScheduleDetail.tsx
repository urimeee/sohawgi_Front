import React from 'react';
import hamtori from '../../assets/images/hamtori.svg';

type Props = {
  time: string;
  title: string;
  onClick: () => void;
};

const ScheduleDetail = ({ time, title, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-start gap-[0.9rem] w-full cursor-pointer m-0"
      onClick={onClick}
    >
      <img src={hamtori} alt="Hamtori" className="w-40 h-40 object-contain" />
      <div className="flex flex-col gap-[0.05rem]">
        <div className="text-Grey_05 body_05">{time}</div>
        <div className="text-Grey_06 body_02">{title}</div>
      </div>
    </div>
  );
};

export default ScheduleDetail;
