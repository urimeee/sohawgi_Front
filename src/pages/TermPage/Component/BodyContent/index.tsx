import { ReactNode } from 'react';
import styled from 'styled-components';

const BodyContentContainer = styled.div`
  margin-bottom: 1rem;
`;

const BodyContentTitle = styled.div`
  font-weight: bold;
`;

interface BodycontentProps {
  title: string;
  children: ReactNode;
}

function BodyContent({ title, children }: BodycontentProps) {
  return (
    <BodyContentContainer>
      <BodyContentTitle>{title}</BodyContentTitle>
      <div>{children}</div>
    </BodyContentContainer>
  );
}

export default BodyContent;
