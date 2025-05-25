import dayjs from 'dayjs';

export const convertDateFormat = (dateString: string) => {
  return dayjs(dateString).format('YYYY-MM-DD');
};

export const formatTime=(time: string) => {
  const match = time.match(/(오전|오후)\s(\d{1,2})시\s(\d{2})분/);
  if (!match) return time; // 패턴 안 맞으면 그대로 반환

  const [, period, hour, minute] = match;
  return `${period} ${hour}:${minute}`;
}
