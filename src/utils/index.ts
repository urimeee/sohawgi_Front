import dayjs from 'dayjs';

export const convertDateFormat = (dateString: string) => {
  return dayjs(dateString).format('YYYY-MM-DD');
};
