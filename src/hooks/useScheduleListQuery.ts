import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/axios';

const getSchedules = async () => {
  const response = await api.get('/api/schedules');
  return response.data;
};

const useScheduleListQuery = () => {
  return useQuery({
    queryKey: ['SCHEDULE_LIST'],
    queryFn: getSchedules,
  });
};

export default useScheduleListQuery;
