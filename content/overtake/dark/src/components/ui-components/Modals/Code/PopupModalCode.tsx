import { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const PopupModalCode = () => {
  const [popupModal, setPopupModal] = useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setPopupModal(true)} className="px-10" color="secondary">
          Pop-up Modal
        </Button>
        <Modal
          show={popupModal}
          size="md"
          onClose={() => setPopupModal(false)}
          popup
          className="rounded-t-md"
        >
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="error" onClick={() => setPopupModal(false)}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setPopupModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default PopupModalCode;
