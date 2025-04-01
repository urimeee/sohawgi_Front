import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/axios';

const useSchedules = () => {
  const queryClient = useQueryClient();

  const postScheduleMutation = useMutation({
    mutationFn: async (schedule: string) => {
      await api.post('/schedules', schedule);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
    },
  });

  const deleteScheduleMutation = useMutation({
    mutationFn: async (scheduleId: number) => {
      await api.delete(`/schedules/${scheduleId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
    },
  });

  return {
    postSchedule: postScheduleMutation.mutate,
    deleteSchedule: deleteScheduleMutation.mutate,
  };
};

export default useSchedules;
