import React, { useEffect, useState } from 'react';

// import css
import * as S from './PlusPage.style';

//import Components
import UserProfile from '../../components/UserProfile/UserProfile';
import AddPageContainer from '../../components/AddPageContainer/AddPageContainer';
import VersionInfo from '../../components/VersionInfo/VersionInfo';
// import { UserInfo } from '../../types/userInfo';

const PlusPage = () => {
  const addPageInfoTitles = ['서비스 이용약관', '개인정보 처리방침'];
  const addPageSettingTitles = ['로그아웃', '회원탈퇴'];
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

  return (
    <S.AddPageContainer>
      <p>{userInfo}</p>
      <UserProfile />
      <S.AddPageBelowContainer>
        <AddPageContainer title={'정보'} contentTitles={addPageInfoTitles} />
        <AddPageContainer title={'설정'} contentTitles={addPageSettingTitles} />
      </S.AddPageBelowContainer>
      <VersionInfo />
    </S.AddPageContainer>
  );
};

export default PlusPage;
