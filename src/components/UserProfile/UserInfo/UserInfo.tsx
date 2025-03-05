import React from 'react';
import appleIcon from '../../../assets/images/appleIcon.png';

type Props = {
  name: string;
  email: string;
};

const UserInfo = ({ name, email }: Props) => {
  return (
    <div>
      <div>{name}</div>
      <div className={'flex gap-[0.1875rem] items-center'}>
        <img
          className={'w-[17px] h-[17px]'}
          src={appleIcon}
          alt={'appleIcon'}
        />
        <div>{email}</div>
      </div>
    </div>
  );
};
export default UserInfo;
