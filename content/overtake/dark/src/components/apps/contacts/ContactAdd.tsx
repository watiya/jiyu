
import  { useContext, useState } from "react";
import profilepic from "/src/assets/images/profile/user-5.jpg";

import {
  Modal,
  Button,
  TextInput,
  Label,
  Select,
  Textarea,
  Alert,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { Icon } from "@iconify/react";
import { ContactContext } from "src/context/Conatactcontext";


const ContactAdd = () => {
  const { addContact } = useContext(ContactContext);
  const [show, setShow] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    image: profilepic,
    company: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    department: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name!]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addContact(formData);
    setShowAlert(true);
    handleClose();

    // Hide alert after some time (e.g., 5 seconds)
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <Button className="w-full " color={"primary"} onClick={handleShow} >
        Add New Contact
      </Button>
      <Modal show={show} onClose={handleClose}>
        <ModalHeader className="pb-0">Add New Contact</ModalHeader>
        <ModalBody>
          <p className="text-sm text-darklink dark:text-bodytext mb-6">
            Let's add a new contact for your application. Fill in all fields and
            click the submit button.
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-6">
                <div className="md:col-span-6 col-span-12">
                  <Label
                    htmlFor="firstname"
                    className="mb-2 block capitalize" >
                      firstname
                      </Label>
                  <TextInput
                    name="firstname"
                    className="form-control"
                    type="text"
                    onChange={handleChange}
                    value={formData.firstname}
                    required
                  />
                </div>
                <div className="md:col-span-6 col-span-12">
                  <Label
                    htmlFor="lastname"
                    className="mb-2 block capitalize"
                  >lastname</Label>
                  <TextInput
                    name="lastname"
                    className="form-control"
                    type="text"
                    onChange={handleChange}
                    value={formData.lastname}
                    required
                  />
                </div>
                <div className="md:col-span-6 col-span-12">
                  <div className="max-w-md">
                      <Label
                      htmlFor="Department"
                      className="mb-2 block capitalize" >
                     Select department
                      </Label>

                    <Select
                      id="Department"
                      className="select-md"
                      name="department"
                      onChange={handleChange}
                      value={formData.department}
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                    </Select>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <Label
                    htmlFor="company"
                    className="mb-2 block capitalize"
                  >company</Label>
                  <TextInput
                    name="company"
                    className="form-control"
                    type="text"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
                <div className="md:col-span-6 col-span-12">
                  <Label
                    htmlFor="phone"
                    className="mb-2 block capitalize"
                  >phone</Label>
                  
                  <TextInput
                    name="phone"
                    className="form-control"
                    type="tel"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div className="md:col-span-6 col-span-12">
                  <Label
                    htmlFor="email"
                    className="mb-2 block capitalize"
                  >email</Label>
                  <TextInput
                    name="email"
                    className="form-control"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div className="col-span-12">
                  <Label
                    htmlFor="address"
                    className="mb-2 block capitalize"
                  >address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    className="form-control-textarea"
                    placeholder="address..."
                    required
                    rows={4}
                    onChange={handleChange}
                    value={formData.address}
                  />
                </div>
                <div className="col-span-12">
                  <Label
                    htmlFor="notes"
                    className="mb-2 block capitalize"
                  >notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="note..."
                    className="form-control-textarea"
                    required
                    rows={4}
                    onChange={handleChange}
                    value={formData.notes}
                  />
                </div>
              </div>
              <ModalFooter className="p-0 pt-6">
                <Button color={"primary"} className="bg-primary" type="submit">
                  Submit
                </Button>
                <Button color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </div>
        </ModalBody>
      </Modal>
      {showAlert && (
        <Alert
          color="success"
          rounded
          className="fixed mx-auto start-0 end-0 top-3 w-fit z-50"
          icon={() => (
            <Icon
              icon="solar:archive-minimalistic-broken"
              className="text-white"
              height={22}
            />
          )}
        >
          <span className="ms-2 font-medium">Contact Added successfully.</span>
        </Alert>
      )}
    </>
  );
};
export default ContactAdd;
