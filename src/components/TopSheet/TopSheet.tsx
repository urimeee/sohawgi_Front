import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Picker from 'react-mobile-picker';

interface TopSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopSheet: React.FC<TopSheetProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-[100dvh] bg-black bg-opacity-40 z-[1000]"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[1010] bg-white rounded-b-[1.5rem] p-6 shadow-none flex flex-col justify-between h-[23.5625rem]"
          >
            <div className="flex-1 overflow-y-auto mx-[0.8rem]">

                {/* 상단 status bar 여백 */}
                <div className='h-[2.75rem]'></div>
            
                <div className="text-Grey_06 body_01 pt-[1.25rem] pb-[0.5rem]">년/월 선택</div>

                <div className="h-[12rem] pt-[1.62rem] pb-[1.66rem] overflow-hidden no-scrollbar">
               
               
                </div>

                <div>
                <button className="w-full h-[3.3125rem] rounded-[0.5rem] bg-Grey_06">
                    <div className="text-white body_03">완료</div>
                </button>
                </div>
            </div>

            <div className="w-[2.875rem] h-[0.3125rem] bg-Grey_02 rounded-full mx-auto mt-4 mb-2" />
            </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default TopSheet;
