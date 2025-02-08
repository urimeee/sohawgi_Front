import styled from 'styled-components';

export const Container = styled.div`
  /* 전체 컨테이너 스타일 */
  display: flex; /* 컨테이너의 내용물을 가로로 정렬 */
  align-items: center; /* 이미지와 정보의 수직 정렬 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  gap: 0.9rem; /* 이미지와 정보 사이에 간격 추가 */
  width: 100%;
`;

export const Image = styled.img`
  /* 이미지 스타일 */
  width: 2.5rem; /* 이미지 크기를 원하는 대로 조정 */
  height: 2.5rem;
`;

export const InfoContainer = styled.div`
  /* 날짜와 내용 정보 컨테이너 스타일 */
  display: flex; /* 자식 요소를 가로로 배치 */
  flex-direction: column; /* 가로 방향 정렬 */
  gap: 0.05rem; /* 날짜와 내용 사이에 간격 추가 */
`;

export const DateText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Body_05}; /* 텍스트 폰트 스타일 */
  color: ${({ theme }) => theme.colors.Grey_05}; /* 텍스트 색상 */
`;

export const ContentText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Body_02}; /* 텍스트 폰트 스타일 */
  color: ${({ theme }) => theme.colors.Grey_06};
`;
