import React, { useEffect, useState } from 'react';
import { api } from '../utils/axios';

const useSchedules = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [schedule, setSchedule] = useState<string>('');

  useEffect(() => {
    getSchedules();
  }, []);

  const getSchedules = async () => {
    try {
      await api.get('/schedules').then((response) => {
        setScheduleList(response.data);

        if (response.data.length < 0) {
          throw new Error(response.statusText);
        }
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

      await api.post('/schedules', { text: schedule });
      await getSchedules();
      console.log(scheduleList);
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
