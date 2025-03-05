import React from 'react';

import hamtori from '../../assets/images/hamtori.svg';
import UserInfo from './UserInfo/UserInfo';

type Props = {
  name: string;
  email: string;
};

const UserProfile = ({ name, email }: Props) => {
  return (
    <div className={'flex flex-row pb-[3.75rem] gap-[1.25rem]'}>
      <img src={hamtori} alt={'hamtori'} />
      <UserInfo name={name} email={email} />
    </div>
  );
};
export default UserProfile;
