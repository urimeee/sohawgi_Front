import React from 'react';

import * as S from './TextField.style';

interface TextFieldProps {
  postSchedule: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => void;
  schedule: string;
  setSchedule: (e: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  postSchedule,
  setSchedule,
  schedule,
}: TextFieldProps) => {
  return (
    <S.Form onSubmit={postSchedule}>
      <S.Input
        type="text"
        placeholder="일정을 입력하세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <S.Button type="button" onClick={(e) => postSchedule(e)}>
        등록
      </S.Button>
    </S.Form>
  );
};

export default TextField;
