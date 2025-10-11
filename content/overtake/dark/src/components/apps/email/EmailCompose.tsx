import {
  Button,
  FileInput,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

const EmailCompose = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="w-full  rounded-xl" color={"primary"} onClick={handleShow}>
        Compose
      </Button>
      <Modal show={show} onClose={handleClose}>
        <ModalHeader className="pb-0">Compose Mail</ModalHeader>
        <ModalBody>
          <form>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <Label
                  htmlFor="to"
                  className="mb-2 block capitalize"
                >to</Label>
                <TextInput id="to" className="form-control" type="text" />
              </div>
              <div className="col-span-12">
                <Label
                  htmlFor="subject"
                  className="mb-2 block capitalize"
                >Subject</Label>
                <TextInput id="subject" className="form-control" type="text" />
              </div>
              <div className="col-span-12">
                <Label
                  htmlFor="message"
                  className="mb-2 block capitalize"
                >Message</Label>
                <Textarea
                  id="message"
                  className="form-control-textarea"
                  required
                  rows={4}
                />
              </div>
              <div className="col-span-12">
                <Label
                  htmlFor="attachment"
                  className="mb-2 block capitalize"
                >Attachment</Label>
                <FileInput id="attachment" className="form-control" />
              </div>
              <div className="col-span-12">
                <ModalFooter className="p-0 pt-6">
                  <Button
                    color={"primary"}
                    className="bg-primary"
                    type="submit"
                    onClick={() => setShow(false)}
                  >
                    send
                  </Button>
                  <Button color={"error"} onClick={handleClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>

    </>
  );
};

export default EmailCompose;
