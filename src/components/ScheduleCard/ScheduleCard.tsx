import { useEffect, useState } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import BottomSheet from '../BottomSheet/BottomSheet'; // BottomSheet 컴포넌트 불러오기
import { Schedule } from '../../types/schedule';

interface ScheduleCardProps {
  deleteSchedule: (scheduleId: number) => Promise<void>;
  scheduleList: Schedule[];
}

const ScheduleCard = ({ deleteSchedule, scheduleList }: ScheduleCardProps) => {
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

  const handleDelete = async () => {
    await deleteSchedule(clickedSchedule).then(() => setSheetOpen(false));
  };

  useEffect(() => {
    console.log('scheduleList 변경', scheduleList.length);
  }, [scheduleList]);

  return (
    <div className="flex flex-col flex-shrink-0 gap-6 bg-White p-[1.88rem] px-[1.69rem] rounded-[1.7rem] max-h-[calc(100vh-22rem)]">
      <div className="text-Grey_06 body_01">일정</div>
      <div className="flex flex-col gap-4 w-full overflow-y-scroll">
        {scheduleList.map((schedule) => (
          <ScheduleDetail
            key={schedule.scheduleId}
            title={schedule.title}
            day={schedule.day}
            dayOfWeek={schedule.dayOfWeek}
            month={schedule.month}
            onClick={() => onClickHandler(schedule.scheduleId)}
          />
        ))}
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
