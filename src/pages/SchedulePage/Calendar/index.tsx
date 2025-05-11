import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import updateLocale from 'dayjs/plugin/updateLocale';

import prevBtn from '../../../assets/images/Calendar/prevWeekBtn.svg';
import nextBtn from '../../../assets/images/Calendar/nextWeekBtn.svg';
import selectedEmoji from '../../../assets/images/Calendar/selectedEmoji.svg';
import defaultEmoji from '../../../assets/images/Calendar/defaultEmoji.svg';

type WeeklyCalendarProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
  setStartDate: (date: Dayjs) => void;
  setEndDate: (date: Dayjs) => void;
};

dayjs.locale('ko');
dayjs.extend(updateLocale);

dayjs.updateLocale('ko', {
  weekdaysWin: ['일', '월', '화', '수', '목', '금', '토'],
});

const WeeklyCalendar = ({
  selectedDate,
  setSelectedDate,
  setStartDate,
  setEndDate,
}: WeeklyCalendarProps) => {
  const startOfWeek = selectedDate.startOf('week');
  const endOfWeek = selectedDate.endOf('week');
  
  const days = Array.from({ length: 7 }).map((_, idx) =>
    startOfWeek.add(idx, 'day'),
  );

  const goToPreviousWeek = () => {
    setSelectedDate(selectedDate.subtract(1, 'week'));
  };

  const goToNextWeek = () => {
    setSelectedDate(selectedDate.add(1, 'week'));
  };

  useEffect(() => {
    setStartDate(startOfWeek);
    setEndDate(endOfWeek);
  }, [selectedDate, setStartDate, setEndDate]);

  return (
    <div className="w-full">
      <div className={'flex place-content-between pb-20'}>
        <span className={'body_01'}>{startOfWeek.format('YYYY. MM')}</span>
        <div className={'flex gap-15'}>
          <button onClick={goToPreviousWeek}>
            <img className={'w-13'} src={prevBtn} alt="prevBtn" />
          </button>
          <button onClick={goToNextWeek}>
            <img className={'w-13'} src={nextBtn} alt="nextBtn" />
          </button>
        </div>
      </div>
      <div className={'flex place-content-between'}>
        {days.map((day, idx) => {
          const isSelected = selectedDate?.isSame(day, 'day');
          return (
            <div
              key={idx}
              className={`flex flex-col body_05 gap-6 hover:cursor-pointer text-center ${isSelected ? 'text-Grey_06' : 'text-Grey_03'}`}
              onClick={() => setSelectedDate(day)}
            >
              <div>{day.format('dd')}</div>
              <div className={'relative'}>
                <img
                  alt={'emoji'}
                  src={isSelected ? selectedEmoji : defaultEmoji}
                  className={'w-32 h-34'}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center  ${isSelected ? 'text-white' : 'text-Grey_04'}`}
                >
                  1
                </div>
              </div>
              <div>{day.format('D') + '일 '}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
