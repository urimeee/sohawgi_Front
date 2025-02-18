import React, { FormEvent, useState } from 'react';
import { api } from '../../utils/axios';

import * as S from './TextField.style';

interface Props {
  getSchedules: () => Promise<void>;
}

const TextField: React.FC<Props> = ({ getSchedules }) => {
  const [schedule, setSchedule] = useState<string>('');

  const postSchedule = async (
    e: React.MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) => {
    try {
      e.preventDefault();
      await api.post('/schedules', { text: schedule });
      setSchedule('');
      await getSchedules();
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <S.Form onSubmit={postSchedule}>
      <S.Input
        type="text"
        placeholder="일정을 입력하세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <S.Button type="button" onClick={postSchedule}>
        등록
      </S.Button>
    </S.Form>
  );
};

export default TextField;
