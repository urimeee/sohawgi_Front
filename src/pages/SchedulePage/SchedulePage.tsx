import React, { useEffect, useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';
import drop from '../../assets/images/drop.svg';
import TopSheet from '../../components/TopSheet/TopSheet';
import ToastBar from '../../components/ToastBar/error';


const SchedulePage = () => {
  const { postSchedule, setSchedule, deleteSchedule, scheduleList, schedule } = useSchedules();
  const [showSheet, setShowSheet] = useState(false);
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

  return (
    <div className="flex w-full flex-col px-18 bg-Grey_01 h-full min-h-[calc(100vh-86px)]">
      <TextField
        postSchedule={postSchedule}
        schedule={schedule}
        setSchedule={setSchedule}
      />
      <div
        className='w-full h-[3.375rem] pl-[0.38rem] pb-[1.3rem] flex items-center gap-[0.5rem] cursor-pointer'
        onClick={() => setShowSheet(true)}
      >
        <div className='text-Grey_06 body_01'>2025.03</div>
        <div className="w-[1rem] h-[1rem] relative overflow-hidden">
          <img src={drop} alt="드롭" className="w-full h-full" />
        </div>
      </div>
      
      <TopSheet isOpen={showSheet} onClose={() => setShowSheet(false)} />
      <ScheduleCard
        deleteSchedule={deleteSchedule}
        scheduleList={scheduleList}
      />

      <ToastBar msg='에러입니다'></ToastBar>

    </div>
  );
};

export default SchedulePage;
