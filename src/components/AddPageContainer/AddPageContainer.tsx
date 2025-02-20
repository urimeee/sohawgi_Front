// import css
import * as S from './AddPageContainer.style';

// import svg
import rightArrow from '../../assets/images/rightArrow.svg';

// import constants
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  contentTitles: string[];
  onClick?: () => void;
};

const AddPageContainer = ({ title, contentTitles, onClick }: Props) => {
  const navigate = useNavigate();
  const onClickHandler = (contentTitle: string) => {
    if (title === '정보') {
      if (contentTitle === '서비스 이용약관') navigate('/info/usePolicy');
      if (contentTitle === '개인정보 처리방침') navigate('/info/privacy');
    }
    if (title === '설정') {
      if (contentTitle === '로그아웃') {
        if (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.logoutHandler
        ) {
          window.webkit.messageHandlers.logoutHandler.postMessage('logout');
        } else {
          console.error('Logout handler not found');
        }
      }
      if (contentTitle === '회원탈퇴') {
        if (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.deleteAccountHandler
        ) {
          window.webkit.messageHandlers.deleteAccountHandler.postMessage(
            'deleteAccount',
          );
        } else {
          console.error('DeleteAccount handler not found');
        }
      }
    }
  };

  return (
    <S.AppPageContainer>
      <S.Title>{title}</S.Title>
      <S.ContentTitleContainer>
        {contentTitles.map((contentTitle, index) => (
          <S.ContentContainer
            key={index}
            onClick={() => onClickHandler(contentTitle)}
          >
            <S.ContentTitle>{contentTitle}</S.ContentTitle>
            <S.RightArrowImage src={rightArrow} alt={'rightArrow'} />
          </S.ContentContainer>
        ))}
      </S.ContentTitleContainer>
    </S.AppPageContainer>
  );
};
export default AddPageContainer;
