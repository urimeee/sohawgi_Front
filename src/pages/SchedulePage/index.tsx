import React, { useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import Calendar from './Calendar';

import useSchedules from '../../hooks/useSchedule';
import dayjs, { Dayjs } from 'dayjs';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [startDate, setStartDate] = useState<Dayjs>(dayjs().startOf('week'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs().endOf('week'));

  return (
    <div className="flex w-full flex-col px-18 h-screen no-scrollbar ">
      <div className="sticky bg-white top-0 z-9">
        <div>
          <TextField postSchedule={postSchedule} />
        </div>
        <div>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
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
