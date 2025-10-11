import { useState } from 'react';
import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from 'flowbite-react';

const FormModalCode = () => {
  const [formModal, setFormModal] = useState(false);
  const [email, setEmail] = useState('');
  function onCloseModal() {
    setFormModal(false);
    setEmail('');
  }

  return (
    <>
      <div className="mt-2">
        <Button onClick={() => setFormModal(true)} className="px-10" color="info">
          Modal with form elements
        </Button>
        <Modal show={formModal} size="md" onClose={onCloseModal} popup>
          <ModalHeader className="p-6">Sign in to our platform</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Your email</Label>
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Your password</Label>
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button className=" bg-primary">Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default FormModalCode;
