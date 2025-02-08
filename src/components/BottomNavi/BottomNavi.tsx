import { useLocation } from 'react-router-dom';

import * as S from './BottomNavi.style';
import plus_act from '../../assets/images/BottomNavi/plus_act.svg';
import plus_nonact from '../../assets/images/BottomNavi/plus_nonact.svg';
import schedule_act from '../../assets/images/BottomNavi/schedule_act.svg';
import schedule_nonact from '../../assets/images/BottomNavi/schedule_nonact.svg';

const BottomNavi = () => {
  const location = useLocation();

  const isScheduleActive = location.pathname === '/';
  const isMoreActive = location.pathname === '/PlusPage';

  return (
    <S.BottomNavWrapper>
      {/* 일정 영역 */}
      <S.StyledLink to="/">
        <S.ScheduleContainer>
          <S.ScheduleIcon
            src={isScheduleActive ? schedule_act : schedule_nonact}
            alt="일정 아이콘"
          />
          <S.ScheduleText $isActive={isScheduleActive}>일정</S.ScheduleText>
        </S.ScheduleContainer>
      </S.StyledLink>

      {/* 더보기 영역 */}
      <S.StyledLink to="/PlusPage">
        <S.MoreContainer>
          <S.MoreIcon
            src={isMoreActive ? plus_act : plus_nonact}
            alt="더보기 아이콘"
          />
          <S.MoreText $isActive={isMoreActive}>더보기</S.MoreText>
        </S.MoreContainer>
      </S.StyledLink>
    </S.BottomNavWrapper>
  );
};

export default BottomNavi;
