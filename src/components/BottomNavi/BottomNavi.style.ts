import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none; /* Link 자체의 밑줄 제거 */
`;

export const BottomNavWrapper = styled.div`
  position: fixed; /* 하단에 고정 */
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White}; /* 배경 흰색 */
  height: 4rem;
  padding: 0 1.5rem 2rem 1.5rem; /* 좌우 여백 1rem, 하단 여백 2rem */
  border-top: 1px solid ${({ theme }) => theme.colors.Grey_03}; /* 상단에 얇은 회색선 추가 */
  box-shadow: none;
  z-index: 1000;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ScheduleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

export const ScheduleText = styled.span<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.fonts.Body_05};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.Grey_06 : theme.colors.Grey_02};
  text-decoration: none; /* 밑줄 제거 */
`;

export const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

export const MoreText = styled.span<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.fonts.Body_05};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.Grey_06 : theme.colors.Grey_02};
  text-decoration: none; /* 밑줄 제거 */
`;