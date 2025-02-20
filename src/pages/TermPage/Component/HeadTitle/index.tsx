import styled from 'styled-components';
import { Term } from '../../../../types/term';

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

function HeadTitle({ headTitle }: Term) {
  return <StyledTitle>{headTitle}</StyledTitle>;
}

export default HeadTitle;
