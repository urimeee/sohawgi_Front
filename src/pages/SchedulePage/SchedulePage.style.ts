// SchedulePage.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; /* TextField와 ScheduleCard를 세로로 나열 */
  gap: 2.31rem; /* 각 요소 사이의 간격 */
  padding-top: calc(env(safe-area-inset-top) + 4rem);
  padding-bottom: 10rem;
  width: 100%;
`;

export const SchedulePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding-left: 17px;
  padding-right: 17px;
`;
