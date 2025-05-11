import React, { useEffect, useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import Calendar from './Calendar';

import useSchedules from '../../hooks/useSchedule';
import { api } from '../../utils/axios';
import dayjs, { Dayjs } from 'dayjs';
import { convertDateFormat } from '../../utils';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [startDate, setStartDate] = useState<Dayjs>(dayjs().startOf('week'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs().endOf('week'));
  const [selectedScheduleList, setSelectedScheduleList] = useState([]);
  const [scheduleCount, setScheduleCount] = useState(0);

  const getSelectedSchedule = async (
    year: number,
    month: number,
    day: number,
  ) => {
    try {
      const response = await api.get('/schedules', {
        params: { year, month, day },
      });
      setSelectedScheduleList(response.data.schedules);
      console.log(selectedScheduleList);
    } catch (error) {
      console.log(error);
    }
  };

  const getScheduleCounts = async (startDate, endDate) => {
    try {
      const formattedStartDate = convertDateFormat(startDate);
      const formattedEndDate = convertDateFormat(endDate);

      const response = await api.get('/schedules/counts', {
        params: { startDate: formattedStartDate, endDate: formattedEndDate },
      });
      setScheduleCount(response.data.scheduleCounts);
      console.log(scheduleCount);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(getSelectedSchedule);

  useEffect(() => {
    const year = selectedDate.year();
    const month = selectedDate.month() + 1;
    const day = selectedDate.date();

    getSelectedSchedule(year, month, day);
    console.log(year, month, day);
  }, [selectedDate]);

  useEffect(() => {
    getScheduleCounts(startDate, endDate);
    console.log(scheduleCount);
  }, []);

  return (
    <div className="flex w-full flex-col px-18 h-screen no-scrollbar">
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
      <div className="flex-1 h-full">
        <ScheduleCard />
      </div>
    </div>
  );
};

export default SchedulePage;
