import React, { useState } from 'react';
import { api } from '../../utils/axios';

import * as S from './TextField.style';

const TextField: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [schedule, setSchedule] = useState<string>('');

  const postSchedule = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await api.post(`${process.env.REACT_APP_BASE_SERVER_URL}/schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-ACCESS-TOKEN': `${process.env.REACT_APP_X_ACCESS_TOKEN}`,
          'X-REFRESH-TOKEN': `${process.env.REACT_APP_X_REFRESH_TOKEN}`,
        },
        body: JSON.stringify({ text: schedule }),
      });
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
