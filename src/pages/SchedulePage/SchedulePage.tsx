import React from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';
import Calendar from './Calendar';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();

  return (
    <div className="flex w-full flex-col px-18 min-h-[calc(100vh-636px)] no-scrollbar">
      <div>
        <TextField postSchedule={postSchedule} />
      </div>
      <div className="px-8">
        <Calendar />
      </div>
      <div className="flex h-screen justify-center">
        <ScheduleCard />
      </div>
    </div>
  );
};

export default SchedulePage;
