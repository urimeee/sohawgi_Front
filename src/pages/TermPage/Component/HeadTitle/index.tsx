import styled from 'styled-components';
import { Term } from '../../../../types/term';

import arrow from '../../../../assets/images/TermPage/arrow.png';
import { useNavigate } from 'react-router-dom';

const StyledTitle = styled.div`
  font-size: 1.5rem;
  background-color: white;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 4.25rem 0 1rem 0;
  flex: 1;
  width: 100%;
`;

const StyledTitleComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledTitleText = styled.div`
  height: 100%;
  font-size: 1.2rem;
`;

const LeftArrow = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
`;

function HeadTitle({ headTitle }: Term) {
  const navigate = useNavigate();
  return (
    <StyledTitle>
      <StyledTitleComponent>
        <LeftArrow src={arrow} alt={'arrow '} onClick={() => navigate(-1)} />
        <StyledTitleText>{headTitle} </StyledTitleText>
      </StyledTitleComponent>
    </StyledTitle>
  );
}

export default HeadTitle;
