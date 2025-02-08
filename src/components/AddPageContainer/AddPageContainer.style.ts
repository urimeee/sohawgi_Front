import styled from 'styled-components';

export const AppPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Title = styled.div`
  color: #74767c;
  font-size: 0.8125rem;
`;

export const ContentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

export const ContentTitle = styled.div`
  color: #343845;
  font-weight: bold;
  font-size: 0.9375rem;
`;

export const RightArrowImage = styled.img`
  width: 13px;
  height: 13px;
`;
