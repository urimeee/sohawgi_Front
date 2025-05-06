import { useEffect, useState } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail';
import BottomSheet from '../BottomSheet/BottomSheet';
import useScheduleListQuery from '../../hooks/useScheduleListQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../utils/axios';
import DefaultComponent from '../../pages/SchedulePage/DefaultComponent';

const ScheduleCard = () => {
  const { data: scheduleList = [] } = useScheduleListQuery();

  const queryClient = useQueryClient();
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);
  const [clickedSchedule, setClickedSchedule] = useState<number | null>(null);

  const handleSheet = () => {
    setSheetOpen(!isSheetOpen);
    setClickedSchedule(null);
  };

  const onClickHandler = (scheduleId: number) => {
    setClickedSchedule(scheduleId);
    setSheetOpen(true);
  };

  const deleteScheduleAPI = async (id: number) => {
    try {
      await api.delete(`/schedules/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { mutate: deleteSchedule } = useMutation({
    mutationFn: deleteScheduleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
      setSheetOpen(false);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleDelete = async () => {
    if (clickedSchedule !== null) {
      deleteSchedule(clickedSchedule);
    }
  };
  console.log(scheduleList.length);

  return (
    <div className="flex flex-col w-full h-screen no-scrollbar flex-shrink-0 gap-6 bg-White rounded-[1.7rem] overflow-y-scroll">
      <div className="flex flex-col gap-35 h-full ">
        {scheduleList.length === 0 ? (
          <div className="flex justify-center w-full h-full items-center">
            <DefaultComponent />
          </div>
        ) : (
          <div className="pt-40 flex flex-col gap-35">
            {scheduleList.schedules.map((schedule) => (
              <ScheduleDetail
                key={schedule.scheduleId}
                title={schedule.title}
                time={schedule.time}
                onClick={() => onClickHandler(schedule.scheduleId)}
              />
            ))}
          </div>
        )}
      </div>
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={handleSheet}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ScheduleCard;
