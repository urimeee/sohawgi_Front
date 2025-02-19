import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/axios';

// const ScheduleContext = createContext(null);

const useSchedules = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [schedule, setSchedule] = useState<string>('');

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    console.log(
      'scheduleList 변경됨 useSchedule' + scheduleList + scheduleList.length,
    );
  }, [scheduleList]);

  const getSchedules = async () => {
    try {
      const response = await api.get('/schedules');

      if (response.data.length < 0) {
        throw new Error(response.statusText);
      }

      setScheduleList((prev) => {
        return JSON.stringify(prev) === JSON.stringify(response.data)
          ? [...response.data]
          : response.data;
      });
    } catch (e) {
      console.error(e);
    }
  };

  const postSchedule = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    try {
      setSchedule('');
      e.preventDefault();

      await api.post('/schedules', { text: schedule }).then(() => {
        getSchedules();
        // console.log(updatedSchedules);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSchedule = async (clickedSchedule: number) => {
    try {
      await api
        .delete(`/schedules/${clickedSchedule}`)
        .then(() => getSchedules());
    } catch (e) {
      console.error(e);
    }
  };

  return {
    scheduleList,
    schedule,
    setSchedule,
    getSchedules,
    postSchedule,
    deleteSchedule,
  };
};

export default useSchedules;
