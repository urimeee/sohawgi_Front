import { useState } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail';
import BottomSheet from '../BottomSheet/BottomSheet';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../utils/axios';
import DefaultComponent from '../../pages/SchedulePage/DefaultComponent';
import { useSchedulesByDateQuery } from '../../hooks/useSchedulesByDateQuery';
import dayjs from 'dayjs';

type Props = {
  selectedDate: dayjs.Dayjs;
};

const ScheduleCard = ({ selectedDate }: Props) => {
  const year = selectedDate.year();
  const month = selectedDate.month();
  const day = selectedDate.day();
  const { data: schedules = [] } = useSchedulesByDateQuery(year, month, day);

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
  console.log(schedules.length);

  return (
    <div className="flex flex-col w-full h-screen no-scrollbar flex-shrink-0 gap-6 bg-White rounded-[1.7rem] overflow-y-scroll">
      <div className="flex flex-col gap-35 h-full ">
        {schedules.length === 0 ? (
          <div className="flex justify-center w-full h-full items-center">
            <DefaultComponent />
          </div>
        ) : (
          <div className="pt-40 flex flex-col gap-35">
            {schedules.schedules.map((schedule) => (
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
