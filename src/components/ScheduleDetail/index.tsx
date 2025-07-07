import React, { useState } from 'react';
import { formatTime, getRandomIndex } from '../../utils';
import defaultCheckBox from './img/defaultCheckbox.svg';
import CheckedBox from './CheckedBox';
import {api} from '../../utils/axios';
import DefaultBox from './DefaultBox';

type Props = {
  scheduleId: string;
  time:string;
  title: string;
  checked: boolean;
  onClick: () => void;
  onToggleChecked:(scheduleId: number, checked: boolean) => void;
};

const colorPairs = [
  {bg: '#E3F1F2', icon:'#6FC6CF'},
  {bg:'#E9F3E3', icon:'#9ED87E'},
  {bg:'#E4ECF4', icon:'#72A8DD'},
  {bg:'#F4E7EE', icon:'#DF86B7'},
  {bg:'#F8EAEA', icon:'#F59B9C'},
  {bg: '#F9F4DE', icon:'#FFE477'}
]

const ScheduleDetail = ({ scheduleId, time, title, onClick, checked, onToggleChecked }: Props) => {
  const [done, setDone] = useState<boolean>(checked);
  const [colorIndex, setColorIndex] = useState(getRandomIndex(colorPairs.length));

  const onCheckClick = () => {
      setDone(!done);
      const randomIndex = getRandomIndex(5);
      setColorIndex(randomIndex);
      //onToggleChecked(scheduleId)
  }

  return (
    <div className="flex items-center justify-start gap-[0.9rem] w-full ">
      { done?  <CheckedBox className="w-28 h-28" bgColor={colorPairs[colorIndex].bg} iconColor={colorPairs[colorIndex].icon} onClick={onCheckClick}/> :
        <DefaultBox onClick={onCheckClick} className={"cursor-pointer"}/>
      }
      <div
        onClick={onClick}
        className="flex flex-col cursor-pointer w-full gap-[0.05rem]"
      >
        <div className="text-Grey_05 body_05">{formatTime(time)}</div>
        <div className="text-Grey_06 body_02">{title}</div>
      </div>
    </div>
  );
};

export default ScheduleDetail;
