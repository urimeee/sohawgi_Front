import React, { useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import Calendar from './Calendar';

import useSchedules from '../../hooks/useSchedule';
import dayjs from 'dayjs';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { postSchedule } = useSchedules();

  return (
    <div className="flex w-full flex-col px-18 min-h-[calc(100vh-636px)] no-scrollbar">
      <div>
        <TextField postSchedule={postSchedule} />
      </div>
      <div className="px-8">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="flex w-full h-screen">
        <ScheduleCard selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default SchedulePage;
