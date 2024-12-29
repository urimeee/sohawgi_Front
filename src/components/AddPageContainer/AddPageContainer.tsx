// import css
import * as S from './AddPageContainer.style';

// import svg
import rightArrow from '../../assets/images/rightArrow.svg';

// import constants
import { EXTERNAL_LINKS } from '../../constants/links';

type Props = {
  title: string;
  contentTitles: string[];
};

const AddPageContainer = ({ title, contentTitles }: Props) => {
  const onClickHandler = (contentTitle: string) => {
    if (title === '정보') {
      if (EXTERNAL_LINKS[contentTitle]) {
        window.open(EXTERNAL_LINKS[contentTitle], 'popup');
      } else {
        console.log('접근 가능한 링크가 없습니다.');
      }
    } else {
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
