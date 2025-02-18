import React, { useEffect, useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import * as S from './SchedulePage.style';

import useSchedules from '../../hooks/useSchedule';

interface Schedule {
  scheduleId: number;
  title: string;
  month: number;
  day: number;
  dayOfWeek: string;
}

const SchedulePage = () => {
  const { getSchedules } = useSchedules();

  useEffect(() => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.webViewReady
    ) {
      window.webkit.messageHandlers.webViewReady.postMessage('WebViewReady');
    }

    window.receiveUserInfo = function (info) {
      console.log('Received info:', info);

      localStorage.setItem('userID', JSON.stringify(info.userID));
      localStorage.setItem(
        'accessToken',
        JSON.stringify(info.accessToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(info.refreshToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'authorizationCode',
        JSON.stringify(info.authorizationCode),
      );
      return info;
    };
  }, []);

  // const getSchedules = async () => {
  //   try {
  //     const response = await api.get('/schedules');
  //
  //     if (response.data.length < 0) {
  //       throw new Error(response.statusText);
  //     }
  //     console.log('getschedules의 response.data', response.data);
  //     setScheduleList(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <S.Container>
      <S.SchedulePageContent>
        <TextField />
        <ScheduleCard />
      </S.SchedulePageContent>
    </S.Container>
  );
};

export default SchedulePage;
