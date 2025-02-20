import React, { useEffect, useState } from 'react';

import { api } from '../../utils/axios';

// import css
import * as S from './PlusPage.style';

//import Components
import UserProfile from '../../components/UserProfile/UserProfile';
import AddPageContainer from '../../components/AddPageContainer/AddPageContainer';
import VersionInfo from '../../components/VersionInfo/VersionInfo';

interface UserInfo {
  name: string;
  email: string;
}

const PlusPage = () => {
  const addPageInfoTitles = ['서비스 이용약관', '개인정보 처리방침'];
  const addPageSettingTitles = ['로그아웃', '회원탈퇴'];
  const [user, setUser] = useState<UserInfo | null>();

  const getUserInfo = async () => {
    try {
      const response = await api.get('/users/me');
      setUser(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.AddPageContainer>
      <S.AddPageContentContainer>
        <UserProfile name={user?.name} email={user?.email} />
        <S.AddPageBelowContainer>
          <AddPageContainer title={'정보'} contentTitles={addPageInfoTitles} />
          <AddPageContainer
            title={'설정'}
            contentTitles={addPageSettingTitles}
          />
        </S.AddPageBelowContainer>
        <VersionInfo />
      </S.AddPageContentContainer>
    </S.AddPageContainer>
  );
};

export default PlusPage;
