import React from 'react';
import { Sheet } from 'react-modal-sheet';
import Delete from '../../assets/images/delete.svg';
import * as S from './BottomSheet.style';
import { api } from '../../utils/axios';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  scheduleId: number | null;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  scheduleId,
}) => {
  const deleteHandler = async () => {
    try {
      const result = await api.delete(`/schedules/${scheduleId}`);
      console.log(result);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose} // 이 부분은 Sheet.Backdrop에서도 사용됨
      snapPoints={[0.5, 0.75]} // 바텀시트의 스냅 포인트를 설정 (optional)
    >
      <Sheet.Container
        style={{
          width: '90vw', // 너비를 뷰포트의 90%로 설정
          maxWidth: '500px', // 최대 너비를 500px로 제한
          height: '10rem', // 높이를 콘텐츠에 맞게 자동으로 설정
          maxHeight: '7.5rem', // 최대 높이를 화면의 50%로 제한
          marginLeft: '1.13rem', // 좌우 여백 설정
          marginRight: '1.13rem',
          marginBottom: '1.13rem', // 아래 여백 설정
          padding: '10px 20px 20px 20px', // 내부 여백 설정
          boxSizing: 'border-box', // Padding을 포함한 전체 크기 설정
          overflowY: 'auto', // 내용이 많을 경우 스크롤 가능하도록 설정
          borderRadius: '1.3125rem', // 모서리를 둥글게 설정
        }}
      >
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>
            <S.DeleteContainer onClick={deleteHandler}>
              <S.DeleteIcon src={Delete} alt="delete icon" />
              <S.DeleteText>삭제하기</S.DeleteText>
            </S.DeleteContainer>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>

      {/* Backdrop 클릭 시 자동으로 onClose 실행 */}
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default BottomSheet;
