import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";



import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "src/guards/auth/AuthContext";


const AuthLogin = () => {

  const [email, setEmail] = useState<string>("demo1234@gmail.com");
  const [password, setPassword] = useState<string>("demo1234");
  const [error, setError] = useState<string>("");
  let navigate = useNavigate();
  const { signin }: any = useContext(AuthContext);


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && (
        <Alert className="fixed top-10 z-9999 start-1/2" color="failure" icon={() => <Icon className="text-lg" icon="solar:info-circle-bold" />}>
          <span className="font-medium ms-2 text-base">{error}</span>
        </Alert>
      )}
      <Alert className="mt-6 p-4  text-primary bg-lightprimary flex items-start space-x-3">
        <span>
          Demo Login: Use <span className="font-bold ">demo1234@gmail.com</span> and password:
          <span className="font-bold"> demo1234</span> to sign in.
        </span>
      </Alert>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="email">Email</Label>
          </div>
          <TextInput
            id="email"
            type="text"
            sizing="md"
            value={email}
            className={`form-control ${error !== "" ? 'border border-error rounded-md' : ''}`}
            onChange={(e) => setEmail(e.target.value)}
          />


        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="password">Password</Label>
          </div>
          <TextInput
            id="password"
            type="password"
            sizing="md"
            className={`form-control ${error !== "" ? 'border border-error rounded-md' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link to={"/auth/auth1/forgot-password"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button color={"primary"} type="submit" className="rounded-full! w-full">
          Sign in
        </Button>
      </form>

    </>
  );
};

export default AuthLogin;
