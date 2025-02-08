import React from 'react';

import hamtori from '../../assets/images/hamtori.svg';
import UserInfo from './UserInfo/UserInfo';
import * as S from './UserProfile.style';

type Props = {
  name: string;
  email: string;
};

const UserProfile = ({ name, email }: Props) => {
  return (
    <S.Container>
      <img src={hamtori} alt={'hamtori'} />
      <UserInfo name={name} email={email} />
    </S.Container>
  );
};
export default UserProfile;
