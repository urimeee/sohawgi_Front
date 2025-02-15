import React, { useState } from 'react';
import { api } from '../../utils/axios';

import * as S from './TextField.style';

const TextField: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [schedule, setSchedule] = useState<string>('');

  const postSchedule = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await api.post(`/schedules`, { text: schedule });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <S.Form>
      <S.Input
        type="text"
        placeholder="일정을 입력하세요"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <S.Button type="button" onClick={postSchedule}>
        등록
      </S.Button>
    </S.Form>
  );
};

export default TextField;
