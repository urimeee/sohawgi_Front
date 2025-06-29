import { useState } from 'react';
import { api } from '../../utils/axios';

import ScheduleDetail from '../ScheduleDetail/ScheduleDetail';
import BottomSheet from '../BottomSheet/BottomSheet';

import useScheduleListQuery from '../../hooks/useScheduleListQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DefaultComponent from '../../pages/SchedulePage/DefaultComponent';

import { Dayjs } from 'dayjs';

type ScheduleCardProps = {
  selectedDate: Dayjs;
};

const ScheduleCard = ({ selectedDate }: ScheduleCardProps) => {
  const year = selectedDate.year();
  const month = selectedDate.month() + 1;
  const day = selectedDate.date();

  const { data: scheduleList = [] } = useScheduleListQuery(year, month, day);

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
      queryClient.invalidateQueries({
        queryKey: ['SCHEDULE_LIST', year, month, day],
      });
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

  return (
    <div className="flex flex-col w-full h-full no-scrollbar flex-shrink-0 gap-6 bg-White rounded-[1.7rem] overflow-y-scroll">
      <div className="flex flex-col gap-16 w-full h-full">
        {scheduleList.length === 0 ? (
          <div className="flex flex-1 w-full h-full justify-center items-center">
            <DefaultComponent />
          </div>
        ) : (
          <div className="flex flex-col gap-35 pt-40 pb-100">
            {scheduleList.map((schedule) => (
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
