import { Button, Label, TextInput } from "flowbite-react";

const AuthRegister = () => {
  return (
    <>
<form className="mt-6">
  <div className="mb-4">
    <Label htmlFor="name">Name</Label>
    <TextInput
      id="name"
      type="text"
      sizing="md"
      className="form-control"
    />
  </div>

  <div className="mb-4">
    <Label htmlFor="emadd">Email Address</Label>
    <TextInput
      id="emadd"
      type="text"
      sizing="md"
      className="form-control"
    />
  </div>

  <div className="mb-6">
    <Label htmlFor="userpwd">Password</Label>
    <TextInput
      id="userpwd"
      type="password"
      sizing="md"
      className="form-control"
    />
  </div>

  <Button color="primary" className="w-full">
    Sign Up
  </Button>
</form>

    </>
  )
}

export default AuthRegister
