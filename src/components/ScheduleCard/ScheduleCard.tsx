import { useState, useEffect } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import BottomSheet from '../BottomSheet/BottomSheet'; // BottomSheet 컴포넌트 불러오기
import * as S from './ScheduleCard.style';
import { api } from '../../utils/axios';

interface Schedule {
  scheduleId: number;
  title: string;
  month: number;
  day: number;
  dayOfWeek: string;
}

const ScheduleCard = () => {
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);
  const [scheduleList, setScheduleList] = useState<Schedule[] | null>([]);

  const handleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };

  const getSchedules = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await api.get('/schedules');

      if (response.data.length < 0) {
        throw new Error(response.statusText);
      }

      // const data = await response.json();
      console.log(response.data);
      setScheduleList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <S.WrapperContainer>
      <S.Title>일정</S.Title>
      <S.GridContainer>
        {scheduleList?.map((schedule) => (
          <div key={schedule.scheduleId}>
            <ScheduleDetail
              title={schedule.title}
              day={schedule.day}
              dayOfWeek={schedule.dayOfWeek}
              month={schedule.month}
            />
          </div>
        ))}
      </S.GridContainer>
      <BottomSheet isOpen={isSheetOpen} onClose={handleSheet} />
    </S.WrapperContainer>
  );
};

export default ScheduleCard;
