import { ReactNode } from 'react';
import styled from 'styled-components';

interface BodyTapProps {
  children: ReactNode;
}

const BodyTapContainer = styled.div`
  margin-left: 1rem;
`;

function BodyTab({ children }: BodyTapProps) {
  return <BodyTapContainer>{children}</BodyTapContainer>;
}

export default BodyTab;
