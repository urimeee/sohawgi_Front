import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/axios';

const getSchedulesByDate = async (year: number, month: number, day: number) => {
  const response = await api.get('/schedules', {
    params: { year, month, day },
  });
  return response.data;
};

export const useSchedulesByDateQuery = (
  year: number,
  month: number,
  day: number,
) => {
  return useQuery({
    queryKey: ['schedulesByDateQuery', year, month, day],
    queryFn: () => getSchedulesByDate(year, month, day),
    enabled: !!year,
  });
};
