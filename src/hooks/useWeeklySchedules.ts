import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/axios';
import { scheduleKeys } from '../constants/queryKeys';
import { Dayjs } from 'dayjs';

type WeekData = {
  date: string;
  counts: number;
  status: string;
};

const getScheduleCounts = async (startOfWeek: Dayjs, endOfWeek: Dayjs) => {
  const start = startOfWeek.format('YYYY-MM-DD');
  const end = endOfWeek.format('YYYY-MM-DD');

  const response = await api.get('/schedules/counts', {
    params: { startDate: start, endDate: end },
  });

  return response.data.scheduleCounts as WeekData[];
};

const useWeeklySchedules = (startOfWeek: Dayjs, endOfWeek: Dayjs) => {
  const start = startOfWeek.format('YYYY-MM-DD');
  const end = endOfWeek.format('YYYY-MM-DD');

  return useQuery({
    queryKey: scheduleKeys.weekly(start, end),
    queryFn: () => getScheduleCounts(startOfWeek, endOfWeek),
  });
};

export default useWeeklySchedules;
