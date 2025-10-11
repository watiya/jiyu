
import { useState } from "react";
import { Modal, Button, TextInput, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

function EditCategoryModal({
  showModal,
  handleCloseModal,
  handleUpdateCategory,
  initialCategoryName,
}: any) {
  const [newCategoryName, setNewCategoryName] = useState(initialCategoryName);

  const handleSave = () => {
    handleUpdateCategory(newCategoryName);
    handleCloseModal();
  };
  return (
    <Modal size={"md"} show={showModal} onClose={handleCloseModal}>
      <ModalHeader className="pb-0">Edit Category</ModalHeader>
      <ModalBody>
        <TextInput
          className="form-control"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleCloseModal} color={'lighterror'}>Cancel</Button>
        <Button onClick={handleSave} color={'success'}>Save</Button>
      </ModalFooter>
    </Modal>
  );
}
export default EditCategoryModal;
