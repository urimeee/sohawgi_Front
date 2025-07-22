import React, { useCallback, useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import updateLocale from 'dayjs/plugin/updateLocale';

import prevBtn from '../../../assets/images/Calendar/prevWeekBtn.svg';
import nextBtn from '../../../assets/images/Calendar/nextWeekBtn.svg';

import useWeeklyScheduleCountsQuery from '../../../hooks/useWeeklyScheduleCountsQuery';
import CalendarCell from './CalendarCell';

type WeeklyCalendarProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
};

dayjs.locale('ko');
dayjs.extend(updateLocale);

dayjs.updateLocale('ko', {
  weekdaysWin: ['일', '월', '화', '수', '목', '금', '토'],
});

const Calendar = ({
                          selectedDate,
                          setSelectedDate,
                        }: WeeklyCalendarProps) => {
  const startOfWeek = useMemo(() => selectedDate.startOf('week'), [selectedDate]);
  const endOfWeek = useMemo(() => selectedDate.endOf('week'), [selectedDate]);

  const { data: weeklyScheduleCounts } = useWeeklyScheduleCountsQuery(startOfWeek, endOfWeek);

  const weeklyScheduleMap = useMemo(() => {
    if(!weeklyScheduleCounts) return new Map();
    return new Map(weeklyScheduleCounts.map(item => [item.date, item]));
  }, [weeklyScheduleCounts]);

  const days = Array.from({ length: 7 }).map((_, idx) =>
      startOfWeek.add(idx, 'day'),
  );

  const goToPreviousWeek = useCallback(() =>  setSelectedDate(selectedDate.subtract(1, 'week')), [selectedDate, setSelectedDate]);
  const goToNextWeek = useCallback(() =>  setSelectedDate(selectedDate.add(1, 'week')), [selectedDate, setSelectedDate]);

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
            const matchingDate = weeklyScheduleMap.get(day);
            return (
                <CalendarCell key={idx} day={day} selectedDate={selectedDate} setSelectedDate={setSelectedDate} matchingDate = {matchingDate}  />
            );
          })}
        </div>
      </div>
  );
};

export default React.memo(Calendar);
