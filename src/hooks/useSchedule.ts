import { useEffect, useState } from 'react';
import { api } from '../utils/axios';

const useSchedules = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [schedule, setSchedule] = useState<string>('');

  useEffect(() => {
    getSchedules();
  }, []);

  const getSchedules = async () => {
    try {
      const response = await api.get('/schedules');
      if (response.data.length < 0) {
        throw new Error(response.statusText);
      }
      console.log(response.data);
      setScheduleList([...response.data]);
    } catch (e) {
      console.error(e);
    }
  };

  const postSchedule = async () => {
    try {
      setSchedule('');
      await api.post('/schedules', { text: schedule });
      await getSchedules();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSchedule = async (clickedSchedule: number) => {
    try {
      await api.delete(`/schedules/${clickedSchedule}`);
      await getSchedules();
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
