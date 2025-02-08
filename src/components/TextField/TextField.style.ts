import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Form = styled.form`
  position: relative;
  display: flex; /* inline-block 대신 flex 사용 */
  width: 100%; /* 부모 요소에 따라 너비가 조정되도록 설정 */
  max-width: 100%; /* 최대 너비를 제한하여 너무 커지지 않도록 설정 */
  padding: 0 0; /* 좌우에 적절한 패딩 추가 */
`;

export const Input = styled.input`
  width: 100%; /* 부모(Form) 요소에 맞게 너비 조정 */
  padding: 0.8125rem 1.0625rem;
  padding-right: 3.6rem;
  
  font-family: ${({ theme }) => theme.fonts.Body_03}; /* 텍스트 폰트 스타일 */
  color: ${({ theme }) => theme.colors.Grey_06}; /* 텍스트 색상 */
  border-radius: 10px;
  outline: none;

  /* 기본 상태 스타일 */
  border: 1px solid ${({ theme }) => theme.colors.Grey_02};
  background-color: ${({ theme }) => theme.colors.Grey_02};

  /* 포커싱 상태일 때 스타일 */
  &:focus {
    background-color: ${({ theme }) => theme.colors.Grey_03};
    border-color: ${({ theme }) => theme.colors.Grey_06};
  }

  /* Placeholder 스타일 */
  ::placeholder {
    color: ${({ theme }) => theme.colors.Grey_04}; /* Placeholder 색상 */
    font-family: ${({ theme }) => theme.fonts.Body_03}; /* Placeholder 폰트 */
    font-size: 14px; /* Placeholder 폰트 크기 */
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.31rem 0.62rem;
  background-color: ${({ theme }) => theme.colors.Grey_06};
  color: ${({ theme }) => theme.colors.White};
  border: none;
  border-radius: 1.875rem;
  font-size: ${({ theme }) => theme.fonts.Body_04};
`;
