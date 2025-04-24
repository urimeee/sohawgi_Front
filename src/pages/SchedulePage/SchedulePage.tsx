import React from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();

  return (
    <div className="flex w-full flex-col px-18 bg-Grey_01 h-full min-h-[calc(100vh-86px)] no-scrollbar">
      <TextField postSchedule={postSchedule} />
      <ScheduleCard />
    </div>
  );
};

export default SchedulePage;
