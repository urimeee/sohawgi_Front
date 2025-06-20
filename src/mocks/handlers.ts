import { delay, http, HttpResponse } from 'msw';

// 더미 데이터 생성
const dummySchedules ={
  "schedules": [
    {
      "scheduleId": 0,
      "title": "string",
      "time": "string"
    }
  ]
}

export const handlers = [
  // 포스트 목록
  http.all('*', async () => {
    await delay(100)
  }),

  http.get('/api/schedules', () => {
    return HttpResponse.json(dummySchedules);
  }),
];