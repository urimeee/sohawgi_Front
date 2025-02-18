import { useEffect, useState } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import BottomSheet from '../BottomSheet/BottomSheet'; // BottomSheet 컴포넌트 불러오기
import * as S from './ScheduleCard.style';

import useSchedules from '../../hooks/useSchedule';

const ScheduleCard = () => {
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);
  const [clickedSchedule, setClickedSchedule] = useState<number | null>(null);

  const { deleteSchedule, scheduleList, getSchedules } = useSchedules();

  const handleSheet = () => {
    setSheetOpen(!isSheetOpen);
    setClickedSchedule(null);
  };

  const onClickHandler = (scheduleId: number) => {
    setClickedSchedule(scheduleId);
    setSheetOpen(true);
    console.log(scheduleId);
  };

  const handleDelete = async () => {
    await deleteSchedule(clickedSchedule);
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <S.WrapperContainer>
      <S.Title>일정</S.Title>
      <S.GridContainer>
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
      </S.GridContainer>
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={handleSheet}
        onDelete={handleDelete}
      />
    </S.WrapperContainer>
  );
};

export default ScheduleCard;
