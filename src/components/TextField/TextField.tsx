import React from 'react';

import * as S from './TextField.style';

import useSchedules from '../../hooks/useSchedule';

const TextField: React.FC = () => {
  const { postSchedule, setSchedule, schedule } = useSchedules();

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
