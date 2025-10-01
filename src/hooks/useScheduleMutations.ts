import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/axios';
import { SCHEDULE_QUERY_KEY } from '../constants/queryKeys';
import { UseSchedulesProps } from '../types/schedule';
import { trackEvent } from '../lib/amplitude';

type CreatedSchedule = {
  id: number;
  text: string;
  startsAt?: string;
  endsAt?: string;
}


const useSchedules = (props : UseSchedulesProps = {}) => {
  const { dailyDate, weekRangeDate } = props;
  const queryClient = useQueryClient();

  const postScheduleMutation = useMutation({
    mutationFn: async (text: string) => {
        const res = await api.post('/schedules', { text });
        return res.data as CreatedSchedule;
    },
    onSuccess: (data, text) => {
      // 성공 이벤트
      trackEvent('register_success', {
        schedule_id: data?.id,
        input_length: text?.length ?? 0,
      })
      // 데이터 최신화
      queryClient.invalidateQueries({ queryKey: SCHEDULE_QUERY_KEY.all });
    },
    onError: (error: any, text) => {
      // 실패 이밴트
      trackEvent('register_fail', {
        input_length: text?.length ?? 0,
        error_name: error?.name,
        error_message: error?.message,
        finished_at: Date.now(),
      });
    }
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
