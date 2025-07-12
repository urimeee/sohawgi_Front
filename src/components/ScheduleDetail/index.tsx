import React, { useState } from 'react';

import { formatTime, getRandomIndex } from '../../utils';
import { colorPairs } from './constants';

import CheckedBox from './CheckedBox';
import DefaultBox from './DefaultBox';
import { api } from '../../utils/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  scheduleId: number;
  time:string;
  title: string;
  checked: boolean;
  onClick: () => void;
};

const ScheduleDetail = ({ scheduleId, time, title, onClick, checked }: Props) => {
  const [done, setDone] = useState<boolean>(checked);
  const [colorIndex, setColorIndex] = useState(getRandomIndex(colorPairs.length));

  const onCheckClick = () => {
    const newDone = !done;
    setDone(newDone);
    toggleCheck();

    if (newDone) {
      const randomIndex = getRandomIndex(colorPairs.length);
      setColorIndex(randomIndex);
    }
  }

  const queryClient = useQueryClient();

  const { mutate: toggleCheck } = useMutation({
    mutationFn: async () => {
      await api.post(`/schedules/${scheduleId}/actions/toggle-checked`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['SCHEDULE_LIST'] });
      queryClient.invalidateQueries({ queryKey: ['WEEKLY_SCHEDULE'] });
    },
  })

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
