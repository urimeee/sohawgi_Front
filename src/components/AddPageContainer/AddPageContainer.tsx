import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/images/rightArrow.svg';

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
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="body_05">{title}</div>

      {/* Content Title List */}
      <div className="flex flex-col gap-[1.6875rem]">
        {contentTitles.map((contentTitle, index) => (
          <div
            key={index}
            onClick={() => onClickHandler(contentTitle)}
            className="flex justify-between hover:cursor-pointer"
          >
            <div className="body_03">{contentTitle}</div>
            <img src={rightArrow} alt="right arrow" className="w-13 h-13" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPageContainer;
