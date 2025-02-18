import { useState, useCallback } from 'react';
import { api } from '../utils/axios';

const useSchedules = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [schedule, setSchedule] = useState<string>('');

  const getSchedules = useCallback(async () => {
    try {
      const response = await api.get('/schedules');
      if (response.data.length < 0) {
        throw new Error(response.statusText);
      }
      console.log(response.data);
      setScheduleList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const postSchedule = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        await api.post('/schedules', { text: schedule });
        setSchedule('');
        await getSchedules();
      } catch (e) {
        console.error(e);
      }
    },
    [schedule, getSchedules],
  );

  const deleteSchedule = useCallback(
    async (clickedSchedule) => {
      try {
        await api.delete(`/schedules/${clickedSchedule}`);
        await getSchedules();
      } catch (e) {
        console.error(e);
      }
    },
    [getSchedules],
  );

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
