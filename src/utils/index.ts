import dayjs from 'dayjs';

export const convertDateFormat = (dateString: string) => {
  return dayjs(dateString).format('YYYY-MM-DD');
};

export const formatTime=(time: string) => {
  const match = time.match(/(오전|오후)\s(\d{1,2})시\s(\d{2})분/);
  if (!match) return time;
  const [, period, hour, minute] = match;
  return `${period} ${hour}:${minute}`;
}

export const getRandomIndex = (max: number) => Math.floor(Math.random() * max);