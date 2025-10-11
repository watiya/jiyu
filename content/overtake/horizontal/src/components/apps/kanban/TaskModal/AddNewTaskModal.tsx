
import "react-datepicker/dist/react-datepicker.css";

import { Modal, Button, TextInput, Select, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { TaskProperties } from "src/api/kanban/KanbanData";


function AddNewList({
  show,
  onHide,
  onSave,
  newTaskData,
  setNewTaskData,
  updateTasks,
}: any) {
  const { task, taskText, taskProperty, date, taskImage } = newTaskData;

  const handleSave = () => {
    onSave();
    updateTasks();
    onHide();
  };

  const isFormValid = () => {
    return task && taskText && taskProperty && date && taskImage;
  };
  return (
    <Modal size={"lg"} show={show} onClose={onHide}>
      <ModalHeader className="pb-0">Add Task</ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <TextInput
              id="task"
              value={task}
              className="form-control"
              placeholder="Task"
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, task: e.target.value })
              }
            />
          </div>
          <div className="col-span-12">
            <TextInput
              id="taskText"
              value={taskText}
              className="form-control"
              placeholder="Description"
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskText: e.target.value })
              }
            />
          </div>
          <div className="col-span-12">
            <TextInput
              id="taskImage"
              value={taskImage}
              className="form-control"
              placeholder="Task Image"
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskImage: e.target.value })
              }
            />
            {taskImage !== undefined && (
              <img
                src={taskImage}
                alt="Selected"
                style={{ width: "100%", height: "auto", marginTop: "8px" }}
              />
            )}
          </div>
          <div className="col-span-12">
            <Select
              id="askProperty-label"
              value={taskProperty}
              className="select-md"
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskProperty: e.target.value })
              }
            >
              <option value="">Select Task Property</option>

              {TaskProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-span-12">
            <TextInput
              id="dueDate"
              type="date"
              className="form-control"
              placeholder="Due Date"
              value={date}
              onChange={(e) =>
              {
                console.log(e.target.value);
                setNewTaskData({ ...newTaskData, date: e.target.value })
              }
              }
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color={"lighterror"} onClick={onHide}>
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" disabled={!isFormValid()}>
          Add Task
        </Button>
      </ModalFooter>
    </Modal>
  );
}
export default AddNewList;
