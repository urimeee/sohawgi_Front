import React from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';
import Calendar from './Calendar';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();

  return (
    <div className="flex w-full flex-col px-18  h-full min-h-[calc(100vh-86px)] no-scrollbar">
      <TextField postSchedule={postSchedule} />
      <div className="px-8">
        <Calendar />
      </div>
      <ScheduleCard />
    </div>
  );
};

export default SchedulePage;
