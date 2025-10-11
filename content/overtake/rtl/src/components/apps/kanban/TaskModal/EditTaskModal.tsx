
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

import { TextInput, Modal, Label, Button, Select, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { TaskProperties } from "src/api/kanban/KanbanData";

function EditTaskModal({ show, onHide, editedTask, onSave }: any) {
  const [tempEditedTask, setTempEditedTask] = useState(editedTask);
  const [newtaskImage, setNewtaskImage] = useState(editedTask?.taskImage || "");
  const [imagePreview, setImagePreview] = useState(editedTask?.taskImage || "");


  useEffect(() => {
    setTempEditedTask(editedTask);
    setNewtaskImage(editedTask?.taskImage || "");
    setImagePreview(editedTask?.taskImage || "");
  }, [editedTask]);



  // Function to handle changes in the task input fields
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setTempEditedTask({ ...tempEditedTask, [name]: value });
  };
  // Function to handle changes in the task property
  const handlePropertyChange = (property: any) => {
    setTempEditedTask({ ...tempEditedTask, taskProperty: property });
  };
  // Function to handle saving the changes made to the task and hiding the modal
  const handleSaveChanges = () => {
    const updatedTask = { ...tempEditedTask, taskImage: newtaskImage };
    onSave(updatedTask);
    onHide();
  };

  // Function to handle new image URL input
  const handleNewtaskImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setNewtaskImage(url);
    setImagePreview(url);
  };
  return (
    <Modal size={"md"} show={show} onClose={onHide}>
      <ModalHeader className="pb-0">Edit Task</ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <Label
              htmlFor="task"
              className="mb-2 block capitalize"
            >Task</Label>
            <TextInput
              name="task"
              id="task"
              value={tempEditedTask?.task}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            {/* Task text or image */}
            {tempEditedTask?.taskImage ? (
              <>
                {/* Image handling */}
                <Label htmlFor="taskImage"
                  className="mb-2 block capitalize">
                  Image URL
                </Label>
                <TextInput
                  id="taskImage"
                  value={newtaskImage}
                  onChange={handleNewtaskImageChange}
                />
                {imagePreview && (
                  <div >
                    <Label htmlFor="taskImage">Image Preview:</Label>
                    <img
                      src={imagePreview}
                      alt="Selected"
                      style={{ maxWidth: '100%', height: 'auto', marginTop: '8px', borderRadius: "4px" }}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Task text */}
                <Label
                  htmlFor="tasktext"
                  className="mb-2 block capitalize"
                >Description</Label>
                <TextInput
                  name="taskText"
                  id="tasktext"
                  className="form-control"
                  value={tempEditedTask?.taskText}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
          <div className="col-span-12">
            <Label
              htmlFor="taskProperty"
              className="mb-2 block capitalize"
            >Category</Label>
            <Select
              id="taskProperty"
              className="select-md"
              value={tempEditedTask?.taskProperty}
              onChange={(e) => handlePropertyChange(e.target.value)}
            >
              {TaskProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-span-12">
            <Label htmlFor="duedt" className="mb-2 block capitalize">Date</Label>
            <TextInput
              type="date"
              id="duedt"
              className="form-control date-picker-icon "
              value={tempEditedTask?.date}
              onChange={(e) =>
                setTempEditedTask({ ...tempEditedTask, date: e.target.value })
              }
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onHide} color={'lighterror'}>Close</Button>
        <Button onClick={handleSaveChanges} color={'success'}>Save Changes</Button>
      </ModalFooter>
    </Modal>
  );
}
export default EditTaskModal;
