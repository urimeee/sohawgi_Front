import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/axios';

const useSchedules = () => {
  const queryClient = useQueryClient();

  const postScheduleMutation = useMutation({
    mutationFn: async (text: string) => {
        await api.post('/schedules', { text });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
      queryClient.invalidateQueries({ queryKey: ['WEEKLY_SCHEDULE']})
    },
  });

  const deleteScheduleMutation = useMutation({
    mutationFn: async (scheduleId: number) => {
      await api.delete(`/schedules/${scheduleId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
      queryClient.invalidateQueries({ queryKey: ['WEEKLY_SCHEDULE']})
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
