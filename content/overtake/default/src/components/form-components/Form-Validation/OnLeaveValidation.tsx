
import { Label, TextInput, Button } from "flowbite-react";
import  { useEffect, useState } from "react";
import TitleCard from "src/components/shared/TitleBorderCard";
import React from "react";
// Third Form
const onleaveFormData = {
  email: "",
  password: "",
};
interface ErrorsMessage {
  email: string;
  password: string;
}
const errorsMessage: ErrorsMessage = {
  email: "",
  password: "",
};
const OnLeaveValidation = () => {
  //   Third Form
  const [onleaveData, setOnleaveData] = useState(onleaveFormData);
  const [errorsMessages, setErrorsMessages] = useState(errorsMessage);

  const handlesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOnleaveData({
      ...onleaveData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesBlur = (field:string) => {
    setErrorsMessages(validations(onleaveData,field));
  };

  const handlesSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorsMessages(validations(onleaveData,"all"));
  };

  useEffect(() => {
    console.log(onleaveData)
  },[onleaveData])

  //   Third Validate
  const validations = (formValues: any, field:string) => {
    let error: ErrorsMessage = {
      email: "",
      password: "",
    };

    if(field === "email"){
      if (!formValues.email) {
        error.email = "Email is required";
      } else {
        error.email = "";
      }
  
    }
    if(field === "password"){
      if (!formValues.password) {
        error.password = "Password is required";
      } else if (formValues.password.length < 8) {
        error.password = "Password should be a minimum of 8 characters.";
      } else {
        error.password = "";
      }
    }
    if(field === "all"){
      if (!formValues.email) {
        error.email = "Email is required";
      } else {
        error.email = "";
      }

      if (!formValues.password) {
        error.password = "Password is required";
      } else if (formValues.password.length < 8) {
        error.password = "Password should be a minimum of 8 characters.";
      } else {
        error.password = "";
      }
    }
    return error;
  };

  return (
    <div>
      <TitleCard title="On Leave">
        <form onSubmit={handlesSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="mb-2 block">
                <Label htmlFor="email">Email Address</Label>
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                className="form-control"
                onChange={handlesChange}
                onBlur={() => handlesBlur("email")}
                value={onleaveData.email}
              />
              <span className="text-red-500">{errorsMessages.email}</span>
            </div>
            <div className="col-span-12">
              <div className="mb-2 block">
                <Label htmlFor="password">Password</Label>
              </div>
              <TextInput
                id="password"
                type="password"
                name="password"
                className="form-control"
                onChange={handlesChange}
                onBlur={() => handlesBlur("password")}
                value={onleaveData.password}
              />
              <span className="text-red-500">{errorsMessages.password}</span>
            </div>
            <div className="col-span-12 flex items-center gap-[1rem] justify-end">
              <Button type="submit" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </TitleCard>
    </div>
  );
};

export default OnLeaveValidation;
