import React, { useEffect, useState } from 'react';
import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import * as S from './SchedulePage.style';

const SchedulePage = () => {
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    window.receiveUserInfo = function (info: string) {
      console.log('connected!');
      setUserInfo(info);
      console.log('Received user info : ', info);
      alert(`네이티브 통신 성공! 받은 데이터: ${JSON.stringify(info)}`);
      return 'success';
    };
  }, []);

  const buttonOnClick = () => {
    console.log(userInfo);
  };

  return (
    <S.Container>
      <button onClick={buttonOnClick}>버튼</button>
      <TextField />
      <ScheduleCard />
    </S.Container>
  );
};

export default SchedulePage;
