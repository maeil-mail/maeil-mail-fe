import useAdminModal from '@/_hooks/useAdminModal';
import BaseModal from '../BaseModal';
import AddQuestionModalContent from './AddQuestionModalContent';

export default function SecretModalTrigger() {
  const { isModalOpen, handleModalClose } = useAdminModal();

  return (
    <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      <AddQuestionModalContent />
    </BaseModal>
  );
}
