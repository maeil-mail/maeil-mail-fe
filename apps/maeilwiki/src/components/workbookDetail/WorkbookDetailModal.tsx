'use client';

import { Modal } from '@maeil/ui';
import { useParams, useRouter } from 'next/navigation';
import { closeIcon, workbookDetailModalContainer } from './workbookDetail.css';
import CloseIcon from '@/assets/closeIcon.svg';
import WorkbookDetailContent from './WorkbookDetailContent';
import { useWorkbookDetail } from './hooks/useWorkbookDetail';

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
