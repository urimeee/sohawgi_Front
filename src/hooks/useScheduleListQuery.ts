import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/axios';

const getSchedules = async ({
  queryKey,
}: {
  queryKey: [string, number, number, number];
}) => {
  const [, year, month, day] = queryKey;
  const response = await api.get('/schedules', {
    params: { year, month, day },
  });
  return response.data.schedules;
};

const useScheduleListQuery = (year: number, month: number, day: number) => {
  return useQuery({
    queryKey: ['SCHEDULE_LIST', year, month, day],
    queryFn: getSchedules,
  });
};

export default useScheduleListQuery;
