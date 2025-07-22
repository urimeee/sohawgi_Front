import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/axios';
import { SCHEDULE_QUERY_KEY } from '../constants/queryKeys';
import { DailyScheduleDate } from '../types/schedule';

const getSchedules = async ({ year, month, day }: DailyScheduleDate) => {
  const response = await api.get('/schedules', {
    params: { year, month, day },
  });
  return response.data.schedules;
};

// 특정 날짜의 일정을 불러오는 react query
export const getDailyScheduleListQuery = ({ year, month, day }: DailyScheduleDate )=> {
  return useQuery({
    queryKey: SCHEDULE_QUERY_KEY.daily({ year, month, day }),
    queryFn: () => getSchedules({ year, month, day }),
  });
};