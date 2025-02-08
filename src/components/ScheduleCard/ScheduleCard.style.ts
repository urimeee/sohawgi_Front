// ScheduleCard.style.ts
import styled from 'styled-components';

export const WrapperContainer = styled.div`
    display: grid;
    gap: 1.5rem; /* '일정' 텍스트와 그리드 사이 간격 */
    width: 100%; /* 부모 요소에 맞게 너비를 조정 */
    background-color: ${({ theme }) => theme.colors.White}; /* 배경 색상 추가 */
    padding: 1.88rem 1.69rem; /* 내부 여백 추가 */
    border-radius: 1.7rem; /* 모서리를 둥글게 */
    box-sizing: border-box; /* 패딩을 너비에 포함하여 크기 조정 */
    height: fit-content;
    텍스트 필드와 너비 같이 될 수 있도록
`;

export const Title = styled.div`
  font-family: ${({ theme }) =>
    theme.fonts.Body_01}; /* 테마에 정의된 폰트 스타일 사용 */
  color: ${({ theme }) => theme.colors.Grey_06}; /* 테마에 정의된 색상 사용 */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 한 열로 설정 */
  gap: 1rem; /* 각 항목 사이의 간격 */
  width: 100%;
`;
