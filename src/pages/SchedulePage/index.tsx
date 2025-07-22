import React, { useCallback, useState } from 'react';

import TextField from '../../components/TextField';
import ScheduleCard from '../../components/ScheduleCard';
import Calendar from './Calendar';
import dayjs, { Dayjs } from 'dayjs';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const setDate = useCallback((date: Dayjs) => setSelectedDate(date), []);

  return (
    <div className="flex w-full flex-col px-18 h-screen no-scrollbar ">
      <div className="sticky bg-white top-0 z-9">
        <div>
          <TextField selectedDate = {selectedDate} />
        </div>
        <div>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setDate}
          />
        </div>
      </div>
      <div className="flex-1 h-full overflow-y-auto">
        <ScheduleCard selectedDate = {selectedDate} />
      </div>
    </div>
  );
};

export default SchedulePage;
