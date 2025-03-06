import React from 'react';
import { Sheet } from 'react-modal-sheet';
import Delete from '../../assets/images/delete.svg';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[0.5, 0.75]}>
      <Sheet.Container
        className="w-[90vw] max-w-500 h-[10rem] max-h-[7.5rem]
                   mx-[1.13rem] mb-32 p-40 px-20
                   box-border overflow-y-auto rounded-[1.3125rem]"
      >
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>
            <div
              className="flex items-center cursor-pointer"
              onClick={onDelete}
            >
              <img
                src={Delete}
                alt="delete icon"
                className="w-[2.2rem] h-[2.2rem] mr-[0.31rem]"
              />
              <span className="text-Grey_04 body_03">삭제하기</span>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
};

export default BottomSheet;
