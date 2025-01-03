import React, { useEffect, useState } from 'react';
import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import * as S from './SchedulePage.style';

const SchedulePage = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    // WebView가 로드 완료되었음을 Swift에 알림
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.webViewReady
    ) {
      window.webkit.messageHandlers.webViewReady.postMessage('WebViewReady');
    }

    // receiveUserInfo 함수 정의
    window.receiveUserInfo = function (info) {
      console.log('Received info:', info);
      setUserInfo(info);
      return info;
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
