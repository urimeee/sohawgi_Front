// ScheduleCard.style.ts
import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1.5rem; /* '일정' 텍스트와 그리드 사이 간격 */
  background-color: ${({ theme }) => theme.colors.White}; /* 배경 색상 추가 */
  padding: 1.88rem 1.69rem; /* 내부 여백 추가 */
  border-radius: 1.7rem; /* 모서리를 둥글게 */
  max-height: calc(100vh - 22rem);
`;

export const Title = styled.div`
  font-family: ${({ theme }) =>
    theme.fonts.Body_01}; /* 테마에 정의된 폰트 스타일 사용 */
  color: ${({ theme }) => theme.colors.Grey_06}; /* 테마에 정의된 색상 사용 */
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 각 항목 사이의 간격 */
  width: 100%;
  overflow-y: scroll;
`;
