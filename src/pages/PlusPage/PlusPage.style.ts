import styled from 'styled-components';

export const AddPageContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

export const AddPageBelowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3125rem;
`;

export const AddPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 17px;
  padding-top: calc(env(safe-area-inset-top) + 4rem);
  padding-right: 17px;
`;
