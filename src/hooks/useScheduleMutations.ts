import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/axios';
import { SCHEDULE_QUERY_KEY } from '../constants/queryKeys';
import { UseSchedulesProps } from '../types/schedule';


const useSchedules = (props : UseSchedulesProps = {}) => {
  const { dailyDate, weekRangeDate } = props;
  const queryClient = useQueryClient();

  const postScheduleMutation = useMutation({
    mutationFn: async (text: string) => {
        await api.post('/schedules', { text });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SCHEDULE_QUERY_KEY.daily(dailyDate) });
      queryClient.invalidateQueries({ queryKey: SCHEDULE_QUERY_KEY.weekly(weekRangeDate) });
    },
  });

  const deleteScheduleMutation = useMutation({
    mutationFn: async (scheduleId: number) => {
      await api.delete(`/schedules/${scheduleId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SCHEDULE_QUERY_KEY.daily(dailyDate) });
      queryClient.invalidateQueries({ queryKey: SCHEDULE_QUERY_KEY.weekly(weekRangeDate) });
    },
  });


  return {
    postSchedule: postScheduleMutation.mutate,
    isPosting: postScheduleMutation.isPending,
    postError: postScheduleMutation.error,
    deleteSchedule: deleteScheduleMutation.mutate,
  };
};

export default useSchedules;
