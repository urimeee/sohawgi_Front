import React from 'react';
import appleIcon from '../../../assets/images/appleIcon.png';
import * as S from './UserInfo.style';

type Props = {
  name: string;
  email: string;
};

const UserInfo = ({ name, email }: Props) => {
  return (
    <div>
      <div>{name}</div>
      <S.InfoContainer>
        <S.appleImg src={appleIcon} alt={'appleIcon'} />
        <div>{email}</div>
      </S.InfoContainer>
    </div>
  );
};
export default UserInfo;
