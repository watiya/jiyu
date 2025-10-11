import { Button, Label, TextInput } from "flowbite-react";

const AuthRegister = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name">Name</Label>
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd">Email Address</Label>
          </div>
          <TextInput
            id="emadd"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" >Password</Label>
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className="form-control"
          />
        </div> 
        <Button color={'primary'} className="w-full">Sign Up</Button> 
        
      </form>
    </>
  )
}

export default AuthRegister
