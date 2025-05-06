'use client';

import { useParams, useRouter } from 'next/navigation';
import { Modal } from '@maeil/ui';
import WorkbookDetailContent from './WorkbookDetailContent';
import { useWorkbookDetail } from './hooks/useWorkbookDetail';
import CloseIcon from '@/assets/closeIcon.svg';
import { closeIcon, workbookDetailModalContainer } from './workbookDetail.css';

export interface WorkbookDetailModalProps {}

export default function WorkbookDetailModal() {
  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const { data } = useWorkbookDetail(Number(id));

  const closeModal = () => {
    router.back();
  };

  return (
    <Modal contentClassName={workbookDetailModalContainer} isOpen={true} onClose={closeModal}>
      <CloseIcon role="button" alt="모달 닫기" onClick={closeModal} className={closeIcon} />
      <WorkbookDetailContent workbook={data} />
    </Modal>
  );
}
