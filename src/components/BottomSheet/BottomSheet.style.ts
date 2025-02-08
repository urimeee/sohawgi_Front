import styled from 'styled-components';

export const DeleteContainer = styled.div`
  display: flex;            /* 행으로 정렬 */
  align-items: center;       /* 세로축 가운데 정렬 */
  padding: 0;            /* 내부 여백 */
`;

export const DeleteIcon = styled.img`
  width: 2.2rem;              /* 이미지 너비 설정 */
  height: 2.2rem;             /* 이미지 높이 설정 */
  margin-right: 0.31rem;       /* 텍스트와의 간격 */
`;

export const DeleteText = styled.div`
  font-size: ${({ theme }) => theme.fonts.Body_03};        /* 텍스트 크기 */
  color: ${({ theme }) => theme.colors.Grey_04};          /* 텍스트 색상 */
`;